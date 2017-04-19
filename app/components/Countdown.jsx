var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return (
      <div className="row countdown">
        <div className="col-sm-12">
          <h3 className="text-center">Countdown Component</h3>
          <Clock totalSeconds={129}/>
        </div>
      </div>
    );
  }
});

module.exports = Countdown;
