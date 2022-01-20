class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :image
      t.string :backimage
      t.string :size
      t.string :color
      t.string :category
      t.string :desc
      t.string :subtype
      t.timestamps
    end
  end
end
