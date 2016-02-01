var store = require('./store.js');
var elements = require('./elements.jsx')(store)

  function render() {
      ReactDOM.render(
      <div>
            <elements.Toolbar/>
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
