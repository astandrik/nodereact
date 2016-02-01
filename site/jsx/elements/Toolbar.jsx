module.exports = function(store){

  var ToolBar = React.createClass({
    render: function() {
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Project PAHOM</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/chat">Chat</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </div>
        </nav>
      );
    }
  });
  return ToolBar;
};
