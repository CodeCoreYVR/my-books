class HomeController < ApplicationController

  def index
    @books = Book.order('id ASC').all
  end

end
