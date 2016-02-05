var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;

function messagesList(state, action) {
  switch(action.type) {
    case 'MESSAGES_UPDATED':
      return  action.messages;
    default:
      return state ? state: [];
  }
}

function usersList(state, action) {
  switch (action.type) {
    case 'USERS_UPDATED':
      return action.usersList;
    default:
      return  state ? state : [];
  }
}

const reducer = combineReducers({messagesList,usersList})

var store = createStore(reducer);

module.exports = store;
