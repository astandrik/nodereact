module.exports = function(store) {
  var UsersList = React.createClass({
    componentDidMount: function() {
      $.get('/users', function(data) {
        store.dispatch({type: 'USERS_UPDATED', usersList: data});
      }.bind(this));
    },
    getData: function() {
        var newList = [];
        var userList = store.getState().usersList;
        userList.forEach((item) => {
          newList.push(<li className="list-group-item">{item.Name}</li>);
        })
        return newList;
    },
    render: function() {
      return (
        <ul className="list-group">
            {this.getData()}
        </ul>
      );
    }
  });

  return UsersList;
}
