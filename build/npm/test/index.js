"use strict";

var _path = require("path");

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _src = require("../src");

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var before, verify;

verify = function ({ before, actual, expected }) {
  return _asyncToGenerator(function* () {
    return _assert2.default.equal(expected, (yield actual(before())));
  });
};

before = function () {
  return (0, _src2.default)({ require });
};

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("biscotti-cpp", [(0, _amen.test)("from path", verify({
    before: before,
    actual: function (render) {
      return render({
        path: (0, _path.resolve)("./test/files/index.bpp")
      });
    },
    expected: "# Greetings!\n\n\n\nThis is a test.\n\nHello, Foo!\n\nGoodbye, now!"
  })), (0, _amen.test)("from content", verify({
    before: before,
    actual: function (render) {
      return render({
        content: "# Greetings!\n\n:: do $ -> \"Hello, Bar!\" ::"
      });
    },
    expected: '# Greetings!\n\nHello, Bar!'
  }))])));
})();