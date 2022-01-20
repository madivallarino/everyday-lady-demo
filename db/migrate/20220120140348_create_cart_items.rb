class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.string :name
      t.integer :quantity
      t.integer :price
      t.string :size
      t.belongs_to :cart
      t.string :image
      t.timestamps
    end
  end
end
