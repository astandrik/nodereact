var homeTest =
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

	'use strict';
	
	__webpack_require__(1);
	var el = __webpack_require__(5);
	__webpack_require__(8);
	
	exports.hui = 'hhhhhh';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1;\r\n  margin-bottom: 10px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.custom-table {\r\n  height: 60vh;\r\n  overflow-y: scroll;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (store) {
	  var List = __webpack_require__(6)(store),
	      Textarea = __webpack_require__(7)(store);
	
	  return {
	    List: List,
	    Textarea: Textarea
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	module.exports = function (store) {
	  var List = React.createClass({
	    displayName: 'List',
	
	    getInitialState: function getInitialState() {
	      return { messagesList: '' };
	    },
	    componentDidMount: function componentDidMount() {
	      $.get('/messages', function (data) {
	        store.dispatch({ type: 'MESSAGES_UPDATED', messages: data });
	      }.bind(this));
	    },
	    deleteItem: function deleteItem(id) {
	      $.post('/deleteMessage', { id: id });
	      store.dispatch({ type: 'MESSAGES_DELETED', id: id });
	    },
	    getData: function getData() {
	      var _this = this;
	
	      var newList = [];
	      var messagesList = store.getState().messagesList;
	      messagesList.forEach(function (item) {
	        if (item) {
	          newList.push(React.createElement(
	            'div',
	            { className: 'flex-row' },
	            React.createElement(
	              'li',
	              { key: item.id, style: { flex: 1 }, className: 'list-group-item' },
	              item.author,
	              ' wrote: ',
	              item.text
	            ),
	            React.createElement(IconDelete, { click: _this.deleteItem.bind(_this, item.id) })
	          ));
	        }
	      });
	      return newList;
	    },
	    render: function render() {
	      return React.createElement(
	        'div',
	        { className: 'custom-table' },
	        React.createElement(
	          'ul',
	          { className: 'list-group' },
	          this.getData()
	        )
	      );
	    }
	  });
	
	  var SVGComponent = React.createClass({
	    displayName: 'SVGComponent',
	
	    render: function render() {
	      return React.createElement(
	        'svg',
	        this.props,
	        this.props.children
	      );
	    }
	  });
	
	  var Bin = React.createClass({
	    displayName: 'Bin',
	
	    render: function render() {
	      return React.createElement(
	        'g',
	        null,
	        React.createElement('path', _extends({}, this.props, { d: 'M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875    C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916    c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703    c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z     M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282    c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802    H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z' })),
	        React.createElement('rect', { x: '475.031', y: '286.593', width: '48.418', height: '396.942' }),
	        React.createElement('rect', { x: '363.361', y: '286.593', width: '48.418', height: '396.942' }),
	        React.createElement('rect', { x: '251.69', y: '286.593', width: '48.418', height: '396.942' })
	      );
	    }
	  });
	
	  var IconDelete = React.createClass({
	    displayName: 'IconDelete',
	
	    render: function render() {
	      return React.createElement(
	        SVGComponent,
	        { height: '30px', width: '30px', viewBox: '0 0 774.266 774.266', onClick: this.props.click },
	        React.createElement(Bin, { height: '30px', width: '30px', x: '25', y: '25' })
	      );
	    }
	  });
	
	  return List;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (store) {
	
	    var Textarea = React.createClass({
	        displayName: 'Textarea',
	
	        getInitialState: function getInitialState() {
	            return { message: "" };
	        },
	        update: function update(e) {
	            this.setState({ message: e.target.value });
	        },
	        getStateMessage: function getStateMessage() {
	            return store.getState();
	        },
	        sendMessage: function sendMessage() {
	            var currMessage = { text: this.state.message, author: 'Trall' };
	            $.post('/postMessage', currMessage).then(function (data) {
	                store.dispatch({ type: 'MESSAGES_UPDATED', messages: data });
	            });
	            this.setState({ message: '' });
	        },
	        render: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement('textarea', { value: this.state.message, className: 'form-control', onChange: this.update, rows: '5' }),
	                React.createElement(
	                    'button',
	                    { type: 'button', className: 'btn btn-default', onClick: this.sendMessage },
	                    'ОТПРАВИТЬ'
	                )
	            );
	        }
	    });
	    return Textarea;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(9);
	var elements = __webpack_require__(5)(store);
	
	function render() {
	      ReactDOM.render(React.createElement(
	            'div',
	            null,
	            React.createElement(elements.List, null),
	            React.createElement(elements.Textarea, null)
	      ), document.getElementById('content'), function () {
	            $('.custom-table').scrollTop(parseInt($('.list-group').css('height'), 10));
	      });
	}
	
	store.subscribe(render);
	store.dispatch({ type: '' });

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	var createStore = Redux.createStore;
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { message: '' } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'MESSAGES_UPDATED':
	      return { messagesList: action.messages };
	    default:
	      return { messagesList: state.messagesList ? state.messagesList : [] };
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map