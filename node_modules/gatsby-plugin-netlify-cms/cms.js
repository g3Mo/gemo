"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _netlifyCmsApp = _interopRequireDefault(require("netlify-cms-app"));

/**
 * Load Netlify CMS automatically if `window.CMS_MANUAL_INIT` is set.
 */
if (!window.CMS_MANUAL_INIT) {
  _netlifyCmsApp["default"].init();
} else {
  console.log("`window.CMS_MANUAL_INIT` flag set, skipping automatic initialization.'");
}
/**
 * The stylesheet output from the modules at `modulePath` will be at `cms.css`.
 */


_netlifyCmsApp["default"].registerPreviewStyle("cms.css");