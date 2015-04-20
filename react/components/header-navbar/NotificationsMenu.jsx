var React = require('react');

var NotificationsMenu = React.createClass({
  render: function () {
    return (
      <li className="dropdown notifications-menu">
        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-bell-o"></i>
          <span className="label label-warning">10</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have 10 notifications</li>
          <li>
            <ul className="menu">
              <li>
                <a href="javascript:;">
                  <i className="fa fa-users text-aqua"></i> 5 new members joined today
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-users text-red"></i> 5 new members joined
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-user text-red"></i> You changed your username
                </a>
              </li>
            </ul>
          </li>
          <li className="footer"><a href="javascript:;">View all</a></li>
        </ul>
      </li>
    );
  }
});

module.exports = NotificationsMenu;
