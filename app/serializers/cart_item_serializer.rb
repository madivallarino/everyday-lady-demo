class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :price, :image, :size

  belongs_to :cart
end
