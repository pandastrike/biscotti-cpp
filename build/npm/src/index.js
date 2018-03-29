"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _biscotti = require("biscotti");

var processor;

exports.default = processor = function ({ globals = { require }, open = "::", close }) {
  return (0, _biscotti.engine)([{
    sandbox: (0, _biscotti.sandbox)(globals)
  }, (0, _biscotti.loader)({
    biscotti: {
      index: true,
      extensions: [".bpp"]
    }
  }), (0, _biscotti.fallback)({
    language: "biscotti"
  }), (0, _biscotti.include)(), _biscotti.buffer, (0, _biscotti.embedded)(open, close), _biscotti.filters.string]);
};

exports.default = processor;