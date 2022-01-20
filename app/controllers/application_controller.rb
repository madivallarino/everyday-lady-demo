class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
before_action  :authorize


def current_or_guest_user
    
    if current_user
        # byebug
        if session[:guest_user_id]
            guest_user.destroy
            session[:guest_user_id] = nil
        end
        current_user
    else 
        guest_user
    end
   
end

# def guest_user
#     if (! @guest_user)
#         create_guest_user
#     else 
#         @guest_user ||= User.find_by(id: session[:guest_user_id])
#     end
    
# end

private

def authorize
    @current_user = User.find_by(id: session[:user_id]) 
   
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user 
end

def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end




def current_user 
    @current_user ||= User.find_by_id(session[:user_id]) 
    
end


def create_guest_user
    guest = User.create(:name => "guest", :email => "guest_#{Time.now.to_i}#{rand(99)}@example.com", :password => "guest")
    guest.save!(:validate => false)

    session[:user_id] = guest.id
    # session[:guest_user_id] = guest.id
    newcart = Cart.create(user_id: guest.id)
    newwishlist = WishList.create(user_id: guest.id)
    session[:cart_id] = newcart.id
    session[:wish_list_id] = newwishlist.id


    render json: guest, status: :created
  
end

end
