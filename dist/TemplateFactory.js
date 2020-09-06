"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TemplateGenerator = require("./TemplateGenerator");

var _TemplateGenerator2 = _interopRequireDefault(_TemplateGenerator);

var _ComponentTpl = require("./templates/ComponentTpl");

var _ComponentTpl2 = _interopRequireDefault(_ComponentTpl);

var _DirectiveTpl = require("./templates/DirectiveTpl");

var _DirectiveTpl2 = _interopRequireDefault(_DirectiveTpl);

var _PipeTpl = require("./templates/PipeTpl");

var _PipeTpl2 = _interopRequireDefault(_PipeTpl);

var _SingleTpl = require("./templates/SingleTpl");

var _SingleTpl2 = _interopRequireDefault(_SingleTpl);

var _VuexModuleTpl = require("./templates/VuexModuleTpl");

var _VuexModuleTpl2 = _interopRequireDefault(_VuexModuleTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TemplateFactory
 */
var TemplateFactory = function () {
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
        return new _TemplateGenerator2.default(new _ComponentTpl2.default(cli.component));
      }

      /**
       * Generate Vue 2 directive
       */
      if (cli.directive) {
        return new _TemplateGenerator2.default(new _DirectiveTpl2.default(cli.directive));
      }

      /**
       * Generate Vue 2 single file component
       */
      if (cli.single) {
        return new _TemplateGenerator2.default(new _SingleTpl2.default(cli.single, cli.folder));
      }

      if (cli.pipe) {
        return new _TemplateGenerator2.default(new _PipeTpl2.default(cli.pipe));
      }

      if (cli.module) {
        return new _TemplateGenerator2.default(new _VuexModuleTpl2.default(cli.module));
      }
    }
  }]);

  return TemplateFactory;
}();

exports.default = TemplateFactory;