"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TemplateGenerator = _interopRequireDefault(require("./TemplateGenerator"));

var _ComponentTpl = _interopRequireDefault(require("./templates/ComponentTpl"));

var _DirectiveTpl = _interopRequireDefault(require("./templates/DirectiveTpl"));

var _PipeTpl = _interopRequireDefault(require("./templates/PipeTpl"));

var _SingleTpl = _interopRequireDefault(require("./templates/SingleTpl"));

var _VuexModuleTpl = _interopRequireDefault(require("./templates/VuexModuleTpl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TemplateFactory
 */
var TemplateFactory = /*#__PURE__*/function () {
  function TemplateFactory() {
    _classCallCheck(this, TemplateFactory);
  }

  _createClass(TemplateFactory, null, [{
    key: "createTemplateFor",

    /**
     * Factory to generate the templates
     * @param cli options
     */
    value: function createTemplateFor(cli) {
      /**
       * Generate Vue 2 component
       */
      if (cli.component) {
        return new _TemplateGenerator["default"](new _ComponentTpl["default"](cli.component));
      }
      /**
       * Generate Vue 2 directive
       */


      if (cli.directive) {
        return new _TemplateGenerator["default"](new _DirectiveTpl["default"](cli.directive));
      }
      /**
       * Generate Vue 2 single file component
       */


      if (cli.single) {
        return new _TemplateGenerator["default"](new _SingleTpl["default"](cli.single, cli.folder));
      }

      if (cli.pipe) {
        return new _TemplateGenerator["default"](new _PipeTpl["default"](cli.pipe));
      }

      if (cli.module) {
        return new _TemplateGenerator["default"](new _VuexModuleTpl["default"](cli.module));
      }
    }
  }]);

  return TemplateFactory;
}();

var _default = TemplateFactory;
exports["default"] = _default;