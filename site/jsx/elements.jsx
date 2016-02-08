

module.exports = function(store) {
    var  Chat = require('./elements/Chat.jsx')(store),
         Textarea = require('./elements/Textarea.jsx')(store),
         Toolbar = require('./elements/Toolbar.jsx')(store),
         UsersList = require('./elements/UsersList.jsx')(store),
         Canvas = require('./elements/Canvas.jsx')(store);

  return {
    Chat,
    Textarea,
    Toolbar,
    UsersList,
    Canvas
  };
};
