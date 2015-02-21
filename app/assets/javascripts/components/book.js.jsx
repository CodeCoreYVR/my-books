var Book = React.createClass({
  getInitialState: function() {
    return {
      rating: this.props.details.rating
    }
  },

  updateBookRating: function(newRating) {
    /* Send off request to server to inform of state change */
    var oldRating = this.state.rating;
    var thisBookComponent = this;
    $.ajax({
      url: '/books/' + this.props.details.id,
      type: 'PUT',
      data: {book: {rating: newRating}},
      error: function() {
        // this is now window!
        alert('Could not save!')
        thisBookComponent.setState({rating: oldRating});
      }
    });

    /* Updates the state right away */
    this.setState({rating: newRating});
  },

  render: function() {
    var description = this.props.details.description || "";

    return (
      <div className="book-card">
        <div className="book-card-header">
          <img src={this.props.details.image_url} />
          <h2>
            <a href={this.props.details.link} title={this.props.details.title} target="_new">
              {this.props.details.title.substr(0, 15) + "..."}
            </a>
          </h2>
          <h3>{this.props.details.authors}</h3>
        </div>

        <div className="book-card-body">
          <p>{description.substr(0, 145) + "..."}</p>
        </div>

        <div className="book-card-footer">
          <StarRating rating={this.state.rating}
                      onChangeRating={this.updateBookRating} />
        </div>
      </div>
    )
  }
});
