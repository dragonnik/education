"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

require("./index.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 *
 * @param props
 */
var LabelIconTip = function LabelIconTip(props) {
  var label = props.label,
      tooltip = props.tooltip,
      subTitle = props.subTitle;

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  if (!tooltip && !subTitle) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label);
  }

  var className = getPrefixCls('pro-core-label-tip');
  var tooltipProps = typeof tooltip === 'string' || /*#__PURE__*/_react.default.isValidElement(tooltip) ? {
    title: tooltip
  } : tooltip;

  var icon = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.icon) || /*#__PURE__*/_react.default.createElement(_icons.InfoCircleOutlined, null);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.stopPropagation();
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    }
  }, label, subTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-subtitle")
  }, subTitle), tooltip && /*#__PURE__*/_react.default.createElement(_antd.Tooltip, tooltipProps, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(className, "-icon")
  }, icon)));
};

var _default = /*#__PURE__*/_react.default.memo(LabelIconTip);

exports.default = _default;