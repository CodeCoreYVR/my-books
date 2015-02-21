var SearchPage = React.createClass({
  statics: {
    SEARCH_DELAY: 250
  },

  getInitialState: function() {
    return {
      searchResults: []
    }
  },

  handleSearchQueryChange: function() {
    var searchText = this.refs.searchBox.getDOMNode().value,
        self = this;

    if (this.searchDelay) {
      clearTimeout(this.searchDelay);
    }

    this.searchDelay = setTimeout(function() {
      $.post('/search', {q: searchText}, function(response) {
        self.setState({searchResults: response.results});
      });
    }, SearchPage.SEARCH_DELAY);
  },

  render: function() {
    return (
      <div className="page search-page">
        <header>
          <div className="container">
            <h1>Add a book</h1>

            <div className="header-actions">
              <a href="/">Go back to my books</a>
            </div>

            <input onChange={this.handleSearchQueryChange}
                   ref="searchBox"
                   className="book-search-box"
                   placeholder="Search by title or author">
            </input>
          </div>
        </header>

        <section className="content">
          <div className="container">
            <SearchResultList books={this.state.searchResults} />
          </div>
        </section>
      </div>
    )
  }
});
