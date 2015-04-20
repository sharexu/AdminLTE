var React = require('react');

var HeaderLogo = require('./HeaderLogo.jsx');

var AppHeader = React.createClass({
  render: function () {
    return (
      <header className="main-header">
        <HeaderLogo mini="5118" full="<b>5118</b>管理后台" />
        <HeaderNavbar />
      </header>
    );
  }
});

module.exports = AppHeader;
