var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;

function messagesList(state, action) {
  switch(action.type) {
    case 'MESSAGES_UPDATED':
      return  action.messages;
      break;
    case 'TOGGLE_POST':
      return state.map(item => {
        if(item.id == action.id) {
          item.postFormShown = !item.postFormShown;
        }
        return item;
      });
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
