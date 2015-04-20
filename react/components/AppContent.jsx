var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var ReviewList = require('./ReviewList.jsx');

var AppContent = React.createClass({
  render: function () {
    return (
      <div className="content-wrapper">
        <RouteHandler />
      </div>
    );
  }
});

module.exports = AppContent;
