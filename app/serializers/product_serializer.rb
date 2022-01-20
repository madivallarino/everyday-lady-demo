class ProductSerializer < ActiveModel::Serializer
  attributes :id, :image, :backimage, :price, :desc, :color, :category, :subtype, :name, :size

 
end
