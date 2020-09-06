"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * VuexModuleTpl
 */
var VuexModuleTpl =
  /**
   *
   * @param name - the directive name
   */
  function VuexModuleTpl(name) {
    _classCallCheck(this, VuexModuleTpl);

    this.type = "module";
    this.name = name;
  };

exports.default = VuexModuleTpl;
