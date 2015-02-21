var SearchResultList = React.createClass({

  render: function() {
    var searchResults = [];

    this.props.books.forEach(function(book) {
      searchResults.push(<SearchResult details={book} />)
    });

    return (
      <div>
        {searchResults}
      </div>
    )
  }
});
