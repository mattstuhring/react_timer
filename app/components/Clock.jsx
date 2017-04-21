var React = require('react');

var Clock = React.createClass({
  // Declare default props
  getDefaultProps: function() {
    totalSeconds: 0
  },

  // propTypes is used to make sure the data you receive is valid.  For performance reasons, propTypes is only checked in development mode.
  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  // formatSeconds -> converts seconds into '00:00'
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },

  render: function() {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
