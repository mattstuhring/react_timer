var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  // Everytime the props or state is updated this method fires
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        // ternary checking if newCount has reached 0
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
