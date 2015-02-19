class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.text :title
      t.text :authors
      t.text :description
      t.text :link
      t.text :image_url
      t.integer :rating
      t.timestamps
    end
  end
end
