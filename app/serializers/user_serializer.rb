class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :firstName, :lastName


  has_many :carts
  has_one :wish_list
end
