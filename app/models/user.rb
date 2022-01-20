class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :carts
    has_many :cart_items, through: :carts
    has_one :wish_list
    has_many :wish_list_items, through: :wish_list
end
