"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _antd = require("antd");

var _proProvider = require("@ant-design/pro-provider");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FieldLabel = function FieldLabel(props) {
  var _classNames;

  var label = props.label,
      onClear = props.onClear,
      value = props.value,
      _props$size = props.size,
      size = _props$size === void 0 ? 'middle' : _props$size,
      disabled = props.disabled,
      ellipsis = props.ellipsis,
      placeholder = props.placeholder,
      className = props.className,
      style = props.style,
      formatter = props.formatter,
      bordered = props.bordered,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear;

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-core-field-label');
  var intl = (0, _proProvider.useIntl)();

  var getTextByValue = function getTextByValue(aLabel, aValue) {
    if (aValue !== undefined && aValue !== null && aValue !== '' && (!Array.isArray(aValue) || aValue.length)) {
      var _str;

      var str;

      if (formatter) {
        str = formatter(aValue);
      } else {
        str = Array.isArray(aValue) ? aValue.join(',') : String(aValue);
      }

      var prefix = aLabel ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, aLabel, ': ') : '';

      if (!ellipsis) {
        return /*#__PURE__*/_react.default.createElement("span", null, prefix, str);
      }

      var getText = function getText() {
        var isArrayValue = Array.isArray(aValue) && aValue.length > 1;
        var unitText = intl.getMessage('form.lightFilter.itemUnit', '项');

        if (str.length > 32 && isArrayValue) {
          return "...".concat(aValue.length).concat(unitText);
        }

        return '';
      };

      var tail = getText();
      return /*#__PURE__*/_react.default.createElement("span", {
        title: str
      }, prefix, (_str = str) === null || _str === void 0 ? void 0 : _str.substr(0, 32), tail);
    }

    return aLabel || placeholder;
  };

  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-active"), !!value || value === 0), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-allow-clear"), allowClear), _classNames), className),
    style: style
  }, getTextByValue(label, value), (value || value === 0) && allowClear && /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, {
    className: (0, _classnames.default)("".concat(prefixCls, "-icon"), "".concat(prefixCls, "-close")),
    onClick: function onClick(e) {
      if (onClear && !disabled) {
        onClear();
      }

      e.stopPropagation();
    }
  }), /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
    className: (0, _classnames.default)("".concat(prefixCls, "-icon"), "".concat(prefixCls, "-arrow"))
  }));
};

var _default = FieldLabel;
exports.default = _default;