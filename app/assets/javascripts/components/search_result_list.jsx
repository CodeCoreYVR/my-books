var SearchResultList = React.createClass({

  render: function() {
    var searchResults = [];

    this.props.books.forEach(function(book) {
      searchResults.push(
        <SearchResult key={book.google_books_id} details={book} />
      )
    });

    return (
      <div>
        {searchResults}
      </div>
    )
  }
});
