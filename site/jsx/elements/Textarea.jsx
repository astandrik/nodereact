

module.exports = function(store) {

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
          $.post('/postMessage', currMessage).then(function(data) {
              store.dispatch({type: 'MESSAGES_UPDATED', messages: data});
          });
          this.setState({message: ''});

        },
        render: function(){
            return (
              <div>
                <textarea value={this.state.message} className="form-control" onChange={this.update} rows="5">
                </textarea>
                <button type="button" className="btn btn-default" onClick={this.sendMessage}>ОТПРАВИТЬ</button>
              </div>
            );
        }
    });
    return Textarea;
}
