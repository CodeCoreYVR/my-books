class BooksController < ApplicationController
  before_action :find_book, only: [:update]

  def update
    @book.update(book_params)
    render nothing: true
  end

  def create
    result = GoogleBooks.search(params[:google_books_id]).to_a.first
    Book.create_from_api(result)
    render nothing: true
  end

  private

  def find_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:rating)
  end
end
