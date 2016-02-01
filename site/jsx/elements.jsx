

module.exports = function(store) {
    var  List = require('./elements/List.jsx')(store),
    Textarea = require('./elements/Textarea.jsx')(store);
    
  return {
    List: List,
    Textarea : Textarea
  }
}
