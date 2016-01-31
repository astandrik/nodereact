var store = require('./store.js');

var Textarea = React.createClass({
    getInitialState: function() {
      return {message: ""}
    },
    update: function(e) {
        this.setState({message: e.target.value})
    },
    getStateMessage: function() {
      return store.getState();
    },
    sendMessage: function() {
      var currMessage = {text: this.state.message, author: 'Trall'};
      $.post('/postMessage', currMessage);
      store.dispatch({type: 'MESSAGES_UPDATED', messages: [currMessage]});
    },
    render: function(){
        return (
          <div>
            <textarea className="form-control" onChange={this.update} rows="5">
            </textarea>
            <button type="button" className="btn btn-default" onClick={this.sendMessage}>ОТПРАВИТЬ</button>
          </div>
        );
    }
});


var List = React.createClass({
  getInitialState: function() {
    return {messagesList: ''}
  },
  componentDidMount: function() {
    $.get('/messages', function(data) {
      store.dispatch({type: 'MESSAGES_UPDATED', messages: data});
    }.bind(this));
  },
  deleteItem: function(id) {
    $.post('/deleteMessage', {id: id});
    store.dispatch({type: 'MESSAGES_DELETED', id: id});
  },
  getData: function() {
    var newList = [];
    var messagesList = store.getState().messagesList;
    messagesList.forEach((item) => {
      if(item) {
        newList.push(
          <div className="flex-row">
          <li key={item.id} style={{flex:1}} className="list-group-item">{item.author} wrote: {item.text}</li>
            <IconDelete click={this.deleteItem.bind(this, item.id)}/>
        </div>
         )
      }
    })
    return newList;
  },
  render: function() {
      return (
        <div className='custom-table'>
          <ul className="list-group">
            {this.getData()}
          </ul>
        </div>
      )
  }
});


var SVGComponent = React.createClass({
    render: function() {
        return <svg {...this.props}>{this.props.children}</svg>;
    }
});

var Bin = React.createClass({
    render: function() {
        return (
          <g>
        <path {...this.props} d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875    C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916    c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703    c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z     M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282    c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802    H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"></path>
          <rect x="475.031" y="286.593" width="48.418" height="396.942"></rect>
              <rect x="363.361" y="286.593" width="48.418" height="396.942"></rect>
              <rect x="251.69" y="286.593" width="48.418" height="396.942"></rect>
              </g>
        )
    }
});

var IconDelete = React.createClass({
  render: function() {
    return (
      <SVGComponent height="30px" width="30px" viewBox="0 0 774.266 774.266" onClick={this.props.click}>
        <Bin height="30px" width="30px" x="25" y="25" />
    </SVGComponent>
      )
  }
})

module.exports = function() {
  return {
    List: List,
    Textarea : Textarea
  }
}
