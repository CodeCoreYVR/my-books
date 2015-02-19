var BookList = React.createClass({

  render: function() {
    var books = [];

    this.props.books.forEach(function(book) {
      books.push(<Book details={book} />)
    });

    return (
      <div>{books}</div>
    )
  }
});
