var SearchResult = React.createClass({
  getInitialState: function() {
    return {
      inCollection: false
    }
  },

  addToCollection: function() {
    var self = this;

    $.post('/books', {google_books_id: this.props.details.google_books_id}).
      fail(function() { self.setState({inCollection: false}) });

    this.setState({inCollection: true});
  },

  render: function() {
    var description = this.props.details.description || "",
        footer;

    if (this.state.inCollection) {
      footer = (
        <span className="already-in-collection-button">
          In collection
        </span>
      )
    } else {
      footer = (
        <a onClick={this.addToCollection}
           className="add-book-to-collection-button">
           Add to my books
        </a>
      )
    }

    return (
      <div className="book-card search-result-card">
        <div className="book-card-header">
          <img src={this.props.details.image_url} />
          <h2>{this.props.details.title.substr(0, 15) + "..."}</h2>
          <h3>{this.props.details.authors}</h3>
        </div>

        <div className="book-card-body">
          <p>{description.substr(0, 180) + "..."}</p>
        </div>

        {footer}
      </div>
    )
  }
});
