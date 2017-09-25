'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _granim = require('granim');

var _granim2 = _interopRequireDefault(_granim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GranimCanvas = function (_React$Component) {
   _inherits(GranimCanvas, _React$Component);

   function GranimCanvas() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, GranimCanvas);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GranimCanvas.__proto__ || Object.getPrototypeOf(GranimCanvas)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
         granim: undefined
      }, _temp), _possibleConstructorReturn(_this, _ret);
   }

   _createClass(GranimCanvas, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         this.setState({
            granim: new _granim2.default(_extends({}, this.props))
         });
      }
   }, {
      key: 'render',
      value: function render() {
         return _react2.default.createElement('canvas', { id: 'granim-canvas', style: this.props.style });
      }
   }]);

   return GranimCanvas;
}(_react2.default.Component);

exports.default = GranimCanvas;


GranimCanvas.defaultProps = {
   direction: 'diagonal',
   element: '#granim-canvas',
   opacity: [1, 1],
   states: {
      "default-state": {
         gradients: [['#834D9B', '#D04ED6'], ['#1CD8D2', '#93EDC7']],
         transitionSpeed: 2000
      }
   },
   style: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1
   }
};

GranimCanvas.propsType = {
   direction: _propTypes2.default.oneOf(new Array("diagonal", 'left-right', 'top-bottom', 'radial')),
   opacity: _propTypes2.default.arrayOf(_propTypes2.default.number),
   isPausedWhenNotInView: _propTypes2.default.bool,
   stateTransitionSpeed: _propTypes2.default.number,
   defaultStateName: _propTypes2.default.string,
   onStart: _propTypes2.default.func,
   onGradientChange: _propTypes2.default.func,
   onEnd: _propTypes2.default.func
};