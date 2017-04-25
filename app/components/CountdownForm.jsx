var React = require('react');

var CountdownForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var strSeconds = this.seconds.value;

    // regex checking strSeconds for containing only numbers
    if (strSeconds.match(/^[0-9]*$/)) {
      this.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={this.handleSubmit} className="countdown-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref={(input) => {this.seconds = input;}}
                placeholder="Enter time in seconds"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success btn-block">Start</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = CountdownForm;
