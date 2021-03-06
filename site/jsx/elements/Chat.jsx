module.exports = function(store) {

  var Textarea = require('./Textarea.jsx')(store);

  var Chat = React.createClass({
  getInitialState: function() {
    return {messagesList: ''}
  },
  componentDidMount: function() {
    $.get('/messages', function(data) {
      store.dispatch({type: 'MESSAGES_UPDATED', messages: data});
    }.bind(this));
  },
  deleteItem: function(id) {
    $.post('/deleteMessage', {id: id}).then(function(data) {
      store.dispatch({type: 'MESSAGES_UPDATED', messages: data});
    })
  },
  showPostMessage: function(id) {
    store.dispatch({type: 'TOGGLE_POST', id: id});
  },
  getData: function() {
    var newList = [];
    var messagesList = store.getState().messagesList;
    messagesList.forEach((item) => {
      if(item) {
        newList.push(
          <div key={item.id} className="flex-column">
            <div className="flex-row justify-center flex-stretch">
              <li style={{flex:1}} className="list-group-item">
                 <Post text={item.text} author={item.author}></Post>
              </li>
              <PostToolBar item={item} deleteItem={this.deleteItem} showPostMessage={this.showPostMessage}/>
            </div>
            <div className="flex-row justify-center flex-stretch">
              <div className="post-form" style={{flex:1}} >
                {   (()=> {
                  if(item.postFormShown) return  <Textarea></Textarea>
                  })()
                }
              </div>
            </div>
          </div>
         )
      }
    });
    return newList;
  },
  render: function() {
      return (
        <div>
          <div className='custom-table'>
            <ul className="list-group">
              {this.getData()}
            </ul>
          </div>
        </div>
      )
  }
});

var PostToolBar = React.createClass({
  getInitialState: function() {
    return {messagesList: ''}
  },
  render: function() {
    return (
    <div className="flex-column justify-around">
      <div>
        <IconDelete click={this.props.deleteItem.bind(null,this.props.item.id)}/>
      </div>
      <div>
        <IconPost click={this.props.showPostMessage.bind(null, this.props.item.id)}></IconPost>
      </div>
    </div>
  )}
});

var Post = React.createClass({
  render: function() {
    return (
      <div className="flex-column">
        <div className="post-header">
          {this.props.author}
        </div>
        <div className="post-text">
          {this.props.text}
        </div>
      </div>
    )
  }
})

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

var Write = React.createClass({
  render: function() {
    return (
		<g>
			<path {...this.props} d="M280.497,120.476c3.085-8.391,3.192-15.358-0.41-19.694c-6.795-8.046-24.655-5.026-45.816,5.975     l-58.716-70.191c9.621-14.064,13.352-26.424,8.197-32.637c-8.909-10.591-40.23,0.971-69.932,25.799     C84.095,54.599,67.27,83.352,76.179,94.03c5.177,6.191,17.968,4.681,33.543-2.308l24.073,28.754H52.645v371.449H439.28V120.476     H280.497z M412.661,465.285c-23.706,0-309.713,0-333.441,0c0-23.598,0-294.614,0-318.234c7.032,0,37.274,0,76.814,0     l12.425,14.841c-14.539,18.896-20.665,35.958-13.892,44.026c9.383,11.217,40.035,1.251,71.378-22.132l49.246,55.696     c0,0,9.685,4.422,16.351-2.243c6.665-6.622,3.494-14.345,3.494-14.345l-49.225-55.739c7.14-6.687,13.417-13.482,18.702-20.104     c70.838,0,137.255,0,148.148,0C412.661,170.671,412.661,441.686,412.661,465.285z"></path>
			<rect x="115.847" y="267.157" width="258.742" height="35.117"></rect>
			<rect x="115.847" y="362.931" width="258.742" height="35.117"></rect>
		</g>
    )
  }
})

var IconPost = React.createClass({
  render: function() {
    return (
      <SVGComponent height="30" width="30" viewBox="0 0 491.925 491.925" onClick={this.props.click}>
        <Write />
      </SVGComponent>
    )
  }
})

var IconDelete = React.createClass({
  render: function() {
    return (
      <SVGComponent height="30" width="30" viewBox="0 0 774.266 774.266" onClick={this.props.click}>
        <Bin />
      </SVGComponent>
      )
  }
})

return Chat;
}
