class AddGoogleBooksId < ActiveRecord::Migration
  def change
    add_column :books, :google_books_id, :text
  end
end
