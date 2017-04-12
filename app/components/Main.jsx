var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div>
        <div className="container">
          <button type="button" className="btn btn-primary">Primary</button>

          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>


          <i className="fa fa-fort-awesome" aria-hidden="true"></i>

          <p>Main.jsx Rendered!</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
