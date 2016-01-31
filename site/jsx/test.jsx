var elements = require('./elements.jsx')()
var store = require('./store.js');


  function render() {
      ReactDOM.render(
      <div>
            <elements.List/>
            <elements.Textarea/>
      </div>      ,
            document.getElementById('content')
      ,
      function() {
         $('.custom-table').scrollTop(parseInt($('.list-group').css('height'), 10));  }
       )
  }

store.subscribe(render);
store.dispatch({type:''});
