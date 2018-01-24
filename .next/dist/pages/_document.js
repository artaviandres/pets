"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/andresartavia/Documents/Projects/pets/pages/_document.js?entry";


var MyDocument = function (_Document) {
	(0, _inherits3.default)(MyDocument, _Document);

	function MyDocument() {
		(0, _classCallCheck3.default)(this, MyDocument);

		return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
	}

	(0, _createClass3.default)(MyDocument, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("html", { lang: "en", className: "jsx-675263494",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 6
				}
			}, _react2.default.createElement(_document.Head, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			}, _react2.default.createElement("title", {
				className: "jsx-675263494",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			}, "Sureal Music - a digital music platform for artists and fans"), _react2.default.createElement("meta", {
				name: "viewport",
				content: "initial-scale=1.0, width=device-width",
				className: "jsx-675263494",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}), _react2.default.createElement("link", {
				rel: "shortcut icon",
				type: "image/png",
				href: "/static/images/favicon.png",
				className: "jsx-675263494",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			})), _react2.default.createElement("body", {
				className: "jsx-675263494",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement(_document.Main, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}), _react2.default.createElement(_document.NextScript, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			})), _react2.default.createElement(_style2.default, {
				styleId: "675263494",
				css: "body{margin:0;background-color:#F5F5F5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm1DLEFBR2tDLFNBQ2dCLHlCQUM1QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FuZHJlc2FydGF2aWEvRG9jdW1lbnRzL1Byb2plY3RzL3BldHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+XG5cdFx0XHRcdFx0XHRTdXJlYWwgTXVzaWMgLSBhIGRpZ2l0YWwgbXVzaWMgcGxhdGZvcm0gZm9yIGFydGlzdHMgYW5kIGZhbnNcblx0XHRcdFx0XHQ8L3RpdGxlPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInNob3J0Y3V0IGljb25cIlxuXHRcdFx0XHRcdFx0dHlwZT1cImltYWdlL3BuZ1wiXG5cdFx0XHRcdFx0XHRocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi5wbmdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGJvZHk+XG5cdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0XHQ8TmV4dFNjcmlwdCAvPlxuXHRcdFx0XHQ8L2JvZHk+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvaHRtbD5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=pages/_document.js?entry */"
			}));
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIk15RG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7Ozs7Ozs7SSxBQUVWOzs7Ozs7Ozs7OzsyQkFDWCxBQUNSOzBCQUNDLGNBQUEsVUFBTSxNQUFOLEFBQVcsaUJBQVg7O2VBQUE7aUJBQUEsQUFDQztBQUREO0lBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBO2VBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUdBO1VBQUEsQUFDTSxBQUNMO2FBRkQsQUFFUztlQUZUOztlQUFBO2lCQUpELEFBSUMsQUFJQTtBQUpBO0FBQ0M7U0FHRCxBQUNLLEFBQ0o7VUFGRCxBQUVNLEFBQ0w7VUFIRCxBQUdNO2VBSE47O2VBQUE7aUJBVEYsQUFDQyxBQVFDLEFBTUQ7QUFOQztBQUNDLHdCQUtGLGNBQUE7ZUFBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDOztlQUFEO2lCQURELEFBQ0MsQUFDQTtBQURBO0FBQUEsdUJBQ0EsQUFBQzs7ZUFBRDtpQkFqQkYsQUFlQyxBQUVDO0FBQUE7QUFBQTthQWpCRjtTQURELEFBQ0MsQUE0QkQ7QUE1QkM7Ozs7O0FBSHFDLEE7O2tCQUFuQixBIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVzYXJ0YXZpYS9Eb2N1bWVudHMvUHJvamVjdHMvcGV0cyJ9