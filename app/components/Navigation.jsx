var React = require('react');
var { Link, IndexLink } = require('react-router');
var { Navbar, Nav, NavItem } = require('react-bootstrap');

var Navigation = () => {
  return (
    <div>
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          {/* Nav App Name */}
          <Navbar.Text>
            React Timer
          </Navbar.Text>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* Nav links left */}
          <Nav>
            <Navbar.Text>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            </Navbar.Text>
          </Nav>
          {/* Nav links right */}
          <Nav pullRight>
            <Navbar.Text pullRight>
              Created by <Navbar.Link href="http://www.mattstuhring.com" target="_blank">Matt Stuhring</Navbar.Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

module.exports = Navigation;
