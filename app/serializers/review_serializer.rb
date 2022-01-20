class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :review, :product_name

  
  belongs_to :user
end
