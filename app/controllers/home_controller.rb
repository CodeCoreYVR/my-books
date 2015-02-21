class HomeController < ApplicationController

  def index
    @books = Book.order('id ASC').all
  end

  def search
  end

  def perform_search
    raw_results = GoogleBooks.search(params[:q]).to_a
    results = raw_results.map { |result| Book.new_from_api(result) }

    render json: {results: results}
  end

end
