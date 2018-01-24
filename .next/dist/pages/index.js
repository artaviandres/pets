'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _user = require('react-icons/lib/fa/user');

var _user2 = _interopRequireDefault(_user);

var _lock = require('react-icons/lib/fa/lock');

var _lock2 = _interopRequireDefault(_lock);

var _Input = require('../components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/andresartavia/Documents/Projects/pets/pages/index.js?entry';


var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            var videoList = ['Cat', 'Puppy'];
            var backgroundVideo = videoList[Math.floor(Math.random() * videoList.length)];
            return _react2.default.createElement('div', {
                className: 'jsx-824765383',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-824765383' + ' ' + 'container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement('form', {
                className: 'jsx-824765383',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_Input2.default, { icon: _react2.default.createElement(_user2.default, { size: 20, color: 'gray', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }), placeholder: 'username', type: 'text', required: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement(_Input2.default, { icon: _react2.default.createElement(_lock2.default, { size: 20, color: 'gray', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }), placeholder: 'password', type: 'password', required: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement('br', {
                className: 'jsx-824765383',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_Button2.default, { color: 'white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Login'))), _react2.default.createElement('video', { autoPlay: true, loop: true, id: 'video-background', muted: true, className: 'jsx-824765383',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('source', {
                src: '/static/videos/' + backgroundVideo + '.mp4',
                type: 'video/mp4',
                className: 'jsx-824765383',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            })), _react2.default.createElement(_style2.default, {
                styleId: '824765383',
                css: 'video.jsx-824765383{position:absolute;top:0;z-index:-100;width:100%;}.container.jsx-824765383{margin:38vh auto 0 auto;height:500px;width:500px;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDNEIsQUFHMkMsQUFNTSxrQkFMbEIsTUFDTyxBQUtBLGFBSkYsQUFLQyxXQUpoQixDQUtrQixjQUNsQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVzYXJ0YXZpYS9Eb2N1bWVudHMvUHJvamVjdHMvcGV0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGYVVzZXIgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3VzZXInO1xuaW1wb3J0IEZhTG9jayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvbG9jayc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2aWRlb0xpc3QgPSBbXG4gICAgICAgICAgICAnQ2F0JyxcbiAgICAgICAgICAgICdQdXBweSdcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFZpZGVvID0gdmlkZW9MaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp2aWRlb0xpc3QubGVuZ3RoKV07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGljb249ezxGYVVzZXIgc2l6ZT17MjB9IGNvbG9yPXsnZ3JheSd9IC8+fSBwbGFjZWhvbGRlcj17J3VzZXJuYW1lJ30gdHlwZT17J3RleHQnfSByZXF1aXJlZD17J3RydWUnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGljb249ezxGYUxvY2sgc2l6ZT17MjB9IGNvbG9yPXsnZ3JheSd9IC8+fSBwbGFjZWhvbGRlcj17J3Bhc3N3b3JkJ30gdHlwZT17J3Bhc3N3b3JkJ30gcmVxdWlyZWQ9eyd0cnVlJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3doaXRlJ30+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx2aWRlbyBhdXRvUGxheSBsb29wIGlkPVwidmlkZW8tYmFja2dyb3VuZFwiIG11dGVkPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvc3RhdGljL3ZpZGVvcy8nICsgYmFja2dyb3VuZFZpZGVvICsgJy5tcDQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzh2aCBhdXRvIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=pages/index.js?entry */'
            }));
        }
    }]);

    return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiRmFVc2VyIiwiRmFMb2NrIiwiSW5wdXQiLCJCdXR0b24iLCJJbmRleCIsInByb3BzIiwidmlkZW9MaXN0IiwiYmFja2dyb3VuZFZpZGVvIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTttQ0FDRjs7bUJBQUEsQUFBWSxPQUFPOzRDQUFBOzttSUFBQSxBQUNULEFBQ1Q7Ozs7O2lDQUNRLEFBQ0w7Z0JBQU0sWUFBWSxDQUFBLEFBQ2QsT0FESixBQUFrQixBQUVkLEFBRUo7Z0JBQU0sa0JBQWtCLFVBQVUsS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQVMsVUFBM0QsQUFBd0IsQUFBVSxBQUFtQyxBQUNyRTttQ0FDSSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7bURBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyxpQ0FBTSxzQkFBTSxBQUFDLGdDQUFPLE1BQVIsQUFBYyxJQUFJLE9BQWxCLEFBQXlCO2tDQUF6QjtvQ0FBYixBQUFhO0FBQUE7aUJBQUEsR0FBcUMsYUFBbEQsQUFBK0QsWUFBWSxNQUEzRSxBQUFpRixRQUFRLFVBQXpGLEFBQW1HOzhCQUFuRztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLGlDQUFNLHNCQUFNLEFBQUMsZ0NBQU8sTUFBUixBQUFjLElBQUksT0FBbEIsQUFBeUI7a0NBQXpCO29DQUFiLEFBQWE7QUFBQTtpQkFBQSxHQUFxQyxhQUFsRCxBQUErRCxZQUFZLE1BQTNFLEFBQWlGLFlBQVksVUFBN0YsQUFBdUc7OEJBQXZHO2dDQUZKLEFBRUksQUFDQTtBQURBOzsyQkFDQTs7OEJBQUE7Z0NBSEosQUFHSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLGtDQUFPLE9BQVIsQUFBZTs4QkFBZjtnQ0FBQTtBQUFBO2VBTlosQUFDSSxBQUNJLEFBSUksQUFHUiw0QkFBQSxjQUFBLFdBQU8sVUFBUCxNQUFnQixNQUFoQixNQUFxQixJQUFyQixBQUF3QixvQkFBbUIsT0FBM0MsaUJBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjs7cUJBRWEsb0JBQUEsQUFBb0Isa0JBRDdCLEFBQytDLEFBQzNDO3NCQUZKLEFBRVM7MkJBRlQ7OzhCQUFBO2dDQVZSLEFBU0ksQUFDSTtBQUFBO0FBQ0k7eUJBWFo7cUJBREosQUFDSSxBQStCUDtBQS9CTzs7Ozs7RUFYUSxnQkFBTSxBLEFBNkMxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5kcmVzYXJ0YXZpYS9Eb2N1bWVudHMvUHJvamVjdHMvcGV0cyJ9