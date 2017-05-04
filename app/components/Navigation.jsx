var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="fluid-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand nav-title" to="/" activeClassName="active-link">React Timer App</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">

            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <Link to="/" activeClassName="active-link">Countdown</Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <p className="navbar-text navbar-right">Created by <a href="http://www.mattstuhring.com" target="_blank" className="navbar-link">Matt Stuhring</a></p>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

module.exports = Navigation;
