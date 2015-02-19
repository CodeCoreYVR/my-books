var IndexPage = React.createClass({

  render: function() {
    return (
      <div className="page index-page">
        <header>
          <div className="container">
            <h1>My Books</h1>

            <div className="header-actions">
              <a href="#">Add a new one</a>
            </div>
          </div>
        </header>

        <section className="content">
          <div className="container">
            { /* render all of the books */ }
            <BookList books={this.props.books} />
          </div>
        </section>
      </div>
    );
  }
});
