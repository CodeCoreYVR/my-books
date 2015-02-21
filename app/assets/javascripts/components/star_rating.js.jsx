var StarRating = React.createClass({
  clickStar: function(starNumber) {
    var self = this;
    return function() {
      self.props.onChangeRating(starNumber);
    }
  },

  render: function() {
    var stars = [],
        numberOfFilled = this.props.rating,
        numberOfEmpty = 5 - this.props.rating,
        starNumber = 0;

    for (var i = 1; i <= numberOfFilled; i++) {
      starNumber = starNumber + 1;
      stars.push(<span className="ion-ios-star"
                       onClick={this.clickStar(starNumber)} />)
    }

    for (var i = 1; i <= numberOfEmpty; i++) {
      starNumber = starNumber + 1;
      stars.push(<span className="ion-ios-star-outline"
                       onClick={this.clickStar(starNumber)} />)
    }

    return (
      <div>
        {stars}
      </div>
    )
  }
});
