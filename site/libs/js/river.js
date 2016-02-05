var Reka =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Reka = __webpack_require__(1)
	
	
	module.exports = Reka;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Vodichka =  __webpack_require__(2)
	
	var Reka = function(obj, name){
	  obj.vodichkaGo = function() {
	    var self = this;
	    this.vodichka = Vodichka(self);
	  };
	}
	
	module.exports = Reka;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Vodichka(self) {
	    return {
	    name: name,
	    channeledObjects : [],
	    makers: {},
	    makeRiver: {
	      to: function(obj, name) {
	        self.vodichka.channeledObjects.push({object: obj, name: name});
	        if(!obj.vodichka) {
	          Reka(obj);
	          obj.vodichkaGo();
	        }
	        obj.vodichka.channeledObjects.push({object: self, name: name});
	      }
	    },
	    manageRiver: {
	      requestPool: function(message, data, callback) {
	        var answers = [];
	        var answersPromises = [];
	        var counterManager = {
	          counter: 0,
	          add: function(me) {me.counter++;},
	          subst: function(me) {
	            me.counter--;
	            if (me.counter == 0) {
	            callback(answers);}
	          }
	        }
	        self.vodichka.channeledObjects.forEach(function(obj) {
	          if(obj.object.vodichka.makers[message]) {
	            obj.object.vodichka.makers[message].forEach(function(act) {
	              counterManager.add(counterManager);
	              var result = act(data);
	              answersPromises.push(new Promise(function(resolve, reject) {resolve(result);}));
	            })
	          };
	        });
	        for(var i = 0; i < answersPromises.length; i++) {
	          answersPromises[i].then(function(ans) {
	            if(ans.then) {
	                counterManager.add(counterManager);
	                ans.then(function(elem) {
	                  answers.push(elem);
	                  counterManager.subst(counterManager);
	                })
	            } else {
	              answers.push(ans);
	              counterManager.subst(counterManager)}
	            }
	          )
	        }
	      },
	      really: function(message, action) {
	        if(self.vodichka.makers[message]) {
	          self.vodichka.makers[message].push(action);
	        }  else {
	          self.vodichka.makers[message] = [];
	          self.vodichka.makers[message].push(action);
	        }
	      },
	      orly: function(message) {
	        delete self.vodichka.makers[message];
	      }
	    }
	  };
	}
	
	module.exports = Vodichka;


/***/ }
/******/ ]);
//# sourceMappingURL=river.js.map