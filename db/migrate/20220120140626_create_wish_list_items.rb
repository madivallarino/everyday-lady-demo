class CreateWishListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :wish_list_items do |t|
      t.string :name
      t.string :image
      t.integer :price
      t.belongs_to :wishlist
      t.timestamps
    end
  end
end
