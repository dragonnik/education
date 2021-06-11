import "antd/es/spin/style";
import _Spin from "antd/es/spin";
var _excluded = ["isLoading", "pastDelay", "timedOut", "error", "retry"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var PageLoading = function PageLoading(_ref) {
  var isLoading = _ref.isLoading,
      pastDelay = _ref.pastDelay,
      timedOut = _ref.timedOut,
      error = _ref.error,
      retry = _ref.retry,
      reset = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 100,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(_Spin, _extends({
    size: "large"
  }, reset)));
};

export default PageLoading;