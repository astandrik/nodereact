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

/*
function testReducer() {
  var action1 = {
    type : ''
  };
  var action2 = {
    type: 'MESSAGES_UPDATED',
    messages: [{author: 'Ubludok', text: 'Mat tvou', id: 1}]
  };
  var action3 = {
      type: 'MESSAGES_DELETED',
      id: 1
  }
  let state1 = {
    messagesList: [{author: 'Govno', text: 'Zhopa', id: 2}]
  };
  let state2 = {
    messagesList: [{author: 'Govno', text: 'Zhopa', id: 2}, {author: 'Ubludok', text: 'Mat tvou', id:1}]
  };
  expect(reducer(state1, action1)).toEqual(state1);
  expect(reducer(state1, action2)).toEqual(state2);
  expect(reducer(state2, action3)).toEqual(state1);
}

try {
    testReducer();
    console.log('All tests passed');
} catch (e) {
  console.log(e);
}
*/

module.exports = store;
