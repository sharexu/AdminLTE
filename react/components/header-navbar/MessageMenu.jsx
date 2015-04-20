var React = require('react');

var MessageMenu = React.createClass({
  render: function () {
    return (
      <li className="dropdown messages-menu">
        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-envelope-o"></i>
          <span className="label label-success">4</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have 4 messages</li>
          <li>
            <ul className="menu">
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                  </div>
                  <h4>
                    Support Team
                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                  </h4>
                  <p>Why not buy a new awesome theme?</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="footer"><a href="#">See All Messages</a></li>
        </ul>
      </li>
    );
  }
});

module.exports = MessageMenu;
