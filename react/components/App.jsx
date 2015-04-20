var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var AppHeader = require('./AppHeader.jsx');
var AppSidebar = require('./AppSidebar.jsx');
var AppContent = require('./AppContent.jsx');
var AppFooter = require('./AppFooter.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <AppHeader />
        <AppSidebar />
        <RouteHandler />
        <AppFooter />
      </div>
    );
  }
});

module.exports = App;
