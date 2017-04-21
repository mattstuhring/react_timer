var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function() {
    return (
      <div className="row timer">
        <div className="col-sm-12">
          <h3 className="text-center">Timer Component</h3>
          <div>
            <Clock totalSeconds={61}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Timer;
