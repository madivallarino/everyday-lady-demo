class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :create_guest_user]
    

    def create 
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            newcart = Cart.create(user_id: user.id)
            newwishlist = WishList.create(user_id: user.id)
            session[:cart_id] = newcart.id
            session[:wish_list_id] = newwishlist.id
            render json: user, status: :created
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def index 
        render json: User.all, status: :ok
    end

    def show
        if current_user
            render json: current_user, include: [:carts], status: :ok
        else 
            render json: {error: "No active session"}, status: :unauthorized
        end
    end

    # def create_guest
    #     byebug
    #     session[:user_id] = save_guest.id
    # end

    # def save_guest
       
    #     user = User.create(:username => "guest", :password => "guest")
    #     user.save(:validate => false)
    #     byebug
    #     render json: user, status: :ok
    # end

   
   

    private
    def user_params
        params.permit(:email, :lastName, :password, :password_confirmation, :firstName)
    end
    

    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end
end
