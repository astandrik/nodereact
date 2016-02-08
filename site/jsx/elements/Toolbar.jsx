var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var Link = window.ReactRouter.Link;

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
              <li><Link to="/chat" className='custom-link'>Chat</Link></li>
              <li><Link to="/users" className='custom-link'>Users</Link></li>
              <li><Link to="/canvas" className='custom-link'>Canvas</Link></li>
            </ul>
          </div>
        </nav>
      );
    }
  });
  return ToolBar;
};
