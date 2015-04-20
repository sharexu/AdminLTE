var React = require('react');

var HeaderLogo = React.createClass({
  render: function () {
    return (
      <a href="/" className="logo">
        <span className="logo-mini"
          dangerouslySetInnerHTML={{__html: this.props.mini}}>
        </span>
        <span className="logo-lg"
          dangerouslySetInnerHTML={{__html: this.props.full}}>
        </span>
      </a>
    );
  }
});

module.exports = HeaderLogo;
