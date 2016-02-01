var createStore = Redux.createStore;

function reducer(state = {message: ''}, action) {
  switch(action.type) {
    case 'MESSAGES_UPDATED':
      return {messagesList: action.messages};
    default:
      return {messagesList: state.messagesList ? state.messagesList : [] };
  }
}

var store = createStore(reducer);

module.exports = store;
