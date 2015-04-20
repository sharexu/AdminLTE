var React = require('react');

var HeaderNavbarMenu = require('HeaderNavbarMenu.jsx');

var HeaderNavbar = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-statis-top" role="navigation">
        <a href="javascript:;" className="sidebar-toggle"
          data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <HeaderNavbarMenu />
      </nav>
    );
  }
});

module.exports = HeaderNavbar;
