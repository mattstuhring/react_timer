var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  // Fires everytime the props or state is updated (after update)
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  // Fires right before the component gets removeed from the DOM
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },

  render: function() {
    var {count, timerStatus} = this.state;

    return (
      <div className="row timer">
        <div className="col-sm-12">
          <h1 className="text-center page-title">Timer App</h1>
          <div>
            <Clock totalSeconds={count}/>
            <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Timer;
