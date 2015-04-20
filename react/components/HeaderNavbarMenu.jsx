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
          <li className="dropdown notifications-menu">
            <NotificationsMenu />
          </li>
          <li className="dropdown tasks-menu">
            <TasksMenu />
          </li>
          <li className="dropdown user-menu">
            <UserMenu />
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = HeaderNavbarMenu;
