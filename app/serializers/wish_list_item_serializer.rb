class WishListItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price

  belongs_to :wish_list
end
