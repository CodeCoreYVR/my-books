class Book < ActiveRecord::Base

  def self.create_from_api(response)
    Book.create(
      title: response.title,
      authors: Array.wrap(response.authors).join(', '),
      description: response.description,
      link: response.info_link,
      image_url: response.image_link,
      rating: 0
    )
  end

end
