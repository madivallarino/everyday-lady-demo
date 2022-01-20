class CartsController < ApplicationController

    skip_before_action :authorize, only: [:show]

    def show 
     cart = Cart.find_by(id: session[:cart_id])
     render json: cart, include: :cart_items, status: :ok
   
    end
   
    def purchased
     
     cart = Cart.find_by(id: params[:id])
     cart.update(purchased: params[:purchased])
     session.delete :cart_id
     Cart.create(user_id: session[:user_id])
     end
 
     def purchasedcarts
         carts = Cart.where(purchased: true, user_id: params[:id])
         render json: carts, status: :ok
     end
 
     def discount
         cart = Cart.find_by(id: params[:id])
         cart.update(discount: params[:discount])
         render json: cart, status: :ok
     end
end
