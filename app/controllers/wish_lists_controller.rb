class WishListsController < ApplicationController

    def show 
        wishlist = WishList.find_by(id: session[:wish_list_id])
        render json: wishlist, include: :wish_list_items, status: :ok
      
       end
end
