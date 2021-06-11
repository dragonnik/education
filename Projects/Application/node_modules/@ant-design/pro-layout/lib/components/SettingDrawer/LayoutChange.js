"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.renderLayoutSettingItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _defaultSettings = _interopRequireDefault(require("../../defaultSettings"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderLayoutSettingItem = function renderLayoutSettingItem(item) {
  var action = /*#__PURE__*/_react.default.cloneElement(item.action, {
    disabled: item.disabled
  });

  return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: item.disabled ? item.disabledReason : '',
    placement: "left"
  }, /*#__PURE__*/_react.default.createElement(_antd.List.Item, {
    actions: [action]
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      opacity: item.disabled ? 0.5 : 1
    }
  }, item.title)));
};

exports.renderLayoutSettingItem = renderLayoutSettingItem;

var LayoutSetting = function LayoutSetting(_ref) {
  var _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? {} : _ref$settings,
      changeSetting = _ref.changeSetting;
  var formatMessage = (0, _index.getFormatMessage)();

  var _ref2 = settings || _defaultSettings.default,
      contentWidth = _ref2.contentWidth,
      splitMenus = _ref2.splitMenus,
      fixedHeader = _ref2.fixedHeader,
      layout = _ref2.layout,
      fixSiderbar = _ref2.fixSiderbar;

  return /*#__PURE__*/_react.default.createElement(_antd.List, {
    split: false,
    dataSource: [{
      title: formatMessage({
        id: 'app.setting.content-width',
        defaultMessage: 'Content Width'
      }),
      action: /*#__PURE__*/_react.default.createElement(_antd.Select, {
        value: contentWidth || 'Fixed',
        size: "small",
        className: "content-width",
        onSelect: function onSelect(value) {
          changeSetting('contentWidth', value);
        },
        style: {
          width: 80
        }
      }, layout === 'side' ? null : /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
        value: "Fixed"
      }, formatMessage({
        id: 'app.setting.content-width.fixed',
        defaultMessage: 'Fixed'
      })), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
        value: "Fluid"
      }, formatMessage({
        id: 'app.setting.content-width.fluid',
        defaultMessage: 'Fluid'
      })))
    }, {
      title: formatMessage({
        id: 'app.setting.fixedheader',
        defaultMessage: 'Fixed Header'
      }),
      action: /*#__PURE__*/_react.default.createElement(_antd.Switch, {
        size: "small",
        className: "fixed-header",
        checked: !!fixedHeader,
        onChange: function onChange(checked) {
          changeSetting('fixedHeader', checked);
        }
      })
    }, {
      title: formatMessage({
        id: 'app.setting.fixedsidebar',
        defaultMessage: 'Fixed Sidebar'
      }),
      disabled: layout === 'top',
      disabledReason: formatMessage({
        id: 'app.setting.fixedsidebar.hint',
        defaultMessage: 'Works on Side Menu Layout'
      }),
      action: /*#__PURE__*/_react.default.createElement(_antd.Switch, {
        size: "small",
        className: "fix-siderbar",
        checked: !!fixSiderbar,
        onChange: function onChange(checked) {
          return changeSetting('fixSiderbar', checked);
        }
      })
    }, {
      title: formatMessage({
        id: 'app.setting.splitMenus'
      }),
      disabled: layout !== 'mix',
      action: /*#__PURE__*/_react.default.createElement(_antd.Switch, {
        size: "small",
        checked: !!splitMenus,
        className: "split-menus",
        onChange: function onChange(checked) {
          changeSetting('splitMenus', checked);
        }
      })
    }],
    renderItem: renderLayoutSettingItem
  });
};

var _default = LayoutSetting;
exports.default = _default;