var React = require('react');

var AppFooter = React.createClass({
  render: function () {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.1
        </div>
        <strong>
          Copyright &copy; 2014-2015
        </strong>
      </footer>
    );
  }
});

module.exports = AppFooter;
