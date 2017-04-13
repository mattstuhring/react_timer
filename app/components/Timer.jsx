var React = require('react');

var Timer = React.createClass({
  render: function() {
    return (
      <div className="row timer">
        <div className="col-sm-12">
          <h3 className="text-center">Timer Component</h3>
        </div>
      </div>
    );
  }
});

module.exports = Timer;
