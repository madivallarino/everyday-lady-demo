class WishListItemsController < ApplicationController

    def addwishlist
        item = WishListItem.create(price: params[:price], name: params[:name], image: params[:image], wish_list_id: session[:wish_list_id])
        render json: item, status: :ok
    end

    def delete
    item = WishListItem.find_by(id: params[:id])
    item.destroy
    end
end
