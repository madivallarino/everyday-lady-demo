class CartSerializer < ActiveModel::Serializer
  attributes :id, :discount, :purchased, :cart_items

  has_many :cart_items
  belongs_to :user
end
