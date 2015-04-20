var React = require('react');

var MessageMenu = require('MessageMenu.jsx');
var NotificationsMenu = require('NotificationsMenu.jsx');
var TasksMenu = require('TasksMenu.jsx');
var UserMenu = require('UserMenu.jsx');

var HeaderNavbarMenu = React.createClass({
  render: function () {
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <MessageMenu />
          <NotificationsMenu />
          <TasksMenu />
          <UserMenu />
        </ul>
      </div>
    );
  }
});

module.exports = HeaderNavbarMenu;
