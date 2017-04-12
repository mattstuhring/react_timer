var React = require('react');
var { Link, IndexLink } = require('react-router');
var { Navbar, Nav, NavItem } = require('react-bootstrap');

var Navigation = () => {
  return (
    <div>
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          {/* Nav Brand */}
          <Navbar.Brand>
            <IndexLink className="navbar-brand" to="#/" activeClassName="active-link">React Timer</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* Nav links left */}
          <Nav>
            <Navbar.Text>
              <Link to="#/timer" activeClassName="active-link">Timer</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="#/countdown" activeClassName="active-link">Countdown</Link>
            </Navbar.Text>
          </Nav>
          {/* Nav links right */}
          <Nav pullRight>
            <Navbar.Text pullRight>
              Create by <Navbar.Link href="http://www.mattstuhring.com" target="_blank">Matt Stuhring</Navbar.Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

module.exports = Navigation;
