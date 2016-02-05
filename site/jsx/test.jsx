var store = require('./store.js');
var elements = require('./elements.jsx')(store)

var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var Link = window.ReactRouter.Link;

var Container = React.createClass({
  render: function() {
    return (
        <div className='custom-container'>
          <elements.Toolbar/>
         {this.props.children}
        </div>
    );
  }
})

var socket =  io.connect('http://localhost:'+8080);
  socket.on('messagesUpdated', function (data) {
    $.get('/messages', function(data) {
      store.dispatch({type: 'MESSAGES_UPDATED', messages: data});
    });
  });


  function render() {
      ReactDOM.render(
      <div>

              <Router>
                <Route path="/" component={Container}>
                  <Route path='chat' component={elements.Chat}/>
                  <Route path='users' component={elements.UsersList}/>
                </Route>
              </Router>
      </div>      ,
            document.getElementById('content')
      ,
      function() {
         $('.custom-table').scrollTop(parseInt($('.list-group').css('height'), 10));  }
       )
  }

store.subscribe(render);
store.dispatch({type:''});
