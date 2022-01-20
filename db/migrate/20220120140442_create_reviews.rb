class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review
      t.integer :star_rating
      t.string :product_name
      t.belongs_to :user
      t.timestamps
    end
  end
end
