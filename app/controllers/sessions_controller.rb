class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :current_cart]

    def create 
        user = User.find_by(email: params[:email])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id
               
                wishlist = user.wish_list
                session[:wish_list_id] = wishlist.id
                carts = user.carts
                singlecart = carts.where(purchased: false).last
                if singlecart
                session[:cart_id] = singlecart.id
               
                render json: user, status: :ok
                else
                newcart = Cart.create(user_id: user.id)
                session[:cart_id] = newcart.id
                render json: user, status: :ok
                end
            else
                render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
            end

    end

    
       
      
      

    def destroy
        session.clear
        head :no_content
    end

end