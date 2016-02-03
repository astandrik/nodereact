var createStore = Redux.createStore;

function messagesReducer(messages, action) {
  switch(action.type) {
    case 'MESSAGES_UPDATED':
      return  action.messages;
    default:
      return messages ? messages : [];
  }
}

function usersReducer(users, action) {
  switch (action.type) {
    case 'USERS_UPDATED':
      return action.usersList;
    default:
      return  users ? users : [];
  }
}

function reducer(state = {}, action) {
  return {
    messagesList: messagesReducer(state.messagesList, action),
    usersList: usersReducer(state.usersList, action)
  }
}

var store = createStore(reducer);

module.exports = store;
