class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.belongs_to :user
      t.boolean :purchased, default: false
      t.boolean :discount, default: false
      t.timestamps
    end
  end
end
