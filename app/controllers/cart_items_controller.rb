class CartItemsController < ApplicationController

    def additem
        item = CartItem.create(price: params[:price], name: params[:name], quantity: params[:quantity], image: params[:image], cart_id: session[:cart_id])
        render json: item, status: :ok
       
    end

    def delete 
        item = CartItem.find_by(id: params[:id])
        item.destroy
    end
    
    def quantity
        item = CartItem.find_by(id: params[:id])
        item.update(quantity: params[:quantity])
    end

end
