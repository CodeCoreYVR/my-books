class Book < ActiveRecord::Base

  def self.create_from_api(response)
    Book.new_from_api(response).save
  end

  def self.new_from_api(response)
    Book.new(
      title: response.title,
      authors: Array.wrap(response.authors).join(', '),
      description: response.description,
      link: response.info_link,
      image_url: response.image_link,
      google_books_id: response.id,
      rating: 0
    )
  end

end
