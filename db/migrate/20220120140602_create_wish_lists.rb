class CreateWishLists < ActiveRecord::Migration[6.1]
  def change
    create_table :wish_lists do |t|
      t.belongs_to :user
      t.timestamps
    end
  end
end
