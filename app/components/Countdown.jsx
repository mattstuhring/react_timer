var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    });
  },

  render: function() {
    var {count} = this.state;

    return (
      <div className="row countdown">
        <div className="col-sm-12">
          <h3 className="text-center">Countdown Component</h3>
          <Clock totalSeconds={count}/>
          <CountdownForm onSetCountdown={this.handleSetCountdown} />
        </div>
      </div>
    );
  }
});

module.exports = Countdown;
