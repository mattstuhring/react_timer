var React = require('react');
var Nav = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="container">
        <p>Main.jsx Rendered!</p>
        {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
