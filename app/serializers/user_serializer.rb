class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name

  has_many :carts
  has_one :wish_list
end
