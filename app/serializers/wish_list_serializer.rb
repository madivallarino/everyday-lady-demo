class WishListSerializer < ActiveModel::Serializer
  attributes :id

  has_many :wish_list_items
end
