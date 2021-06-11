"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _proProvider = require("@ant-design/pro-provider");

require("./index.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownFooter = function DropdownFooter(props) {
  var intl = (0, _proProvider.useIntl)();
  var onClear = props.onClear,
      onConfirm = props.onConfirm,
      disabled = props.disabled,
      footerRender = props.footerRender;

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-core-dropdown-footer');
  var defaultFooter = [/*#__PURE__*/_react.default.createElement(_antd.Button, {
    key: "clear",
    style: {
      visibility: onClear ? 'visible' : 'hidden'
    },
    type: "link",
    size: "small",
    disabled: disabled,
    onClick: function onClick(e) {
      if (onClear) {
        onClear(e);
      }

      e.stopPropagation();
    }
  }, intl.getMessage('form.lightFilter.clear', '清除')), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    key: "confirm",
    "data-type": "confirm",
    type: "primary",
    size: "small",
    onClick: onConfirm,
    disabled: disabled
  }, intl.getMessage('form.lightFilter.confirm', '确认'))];

  if (footerRender === false) {
    return null;
  }

  var renderDom = footerRender && footerRender(onConfirm, onClear) || defaultFooter;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls,
    onClick: function onClick(e) {
      return e.target.getAttribute('data-type') !== 'confirm' && e.stopPropagation();
    }
  }, renderDom);
};

var _default = DropdownFooter;
exports.default = _default;