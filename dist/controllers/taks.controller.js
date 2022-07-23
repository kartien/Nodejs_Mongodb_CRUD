"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTaskEdit = exports.renderTask = exports.getTasks = exports.editTask = exports.doneTask = exports.deleteTask = exports.createTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

// Task Index
var renderTask = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Task["default"].find().lean();

          case 2:
            tasks = _context.sent;
            res.render("index", {
              tasks: tasks
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Render tasks on tasks 


exports.renderTask = renderTask;

var getTasks = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Task["default"].find().lean();

          case 2:
            tasks = _context2.sent;
            res.render("tasks", {
              tasks: tasks
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Create a new Task


exports.getTasks = getTasks;

var createTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            task = (0, _Task["default"])(req.body);
            _context3.next = 4;
            return task.save();

          case 4:
            res.redirect("/tasks");
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function createTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Render Edit a Task consult fot data on database


exports.createTask = createTask;

var renderTaskEdit = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Task["default"].findById(req.params.id).lean();

          case 3:
            task = _context4.sent;
            res.render("edit", {
              task: task
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0.message);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function renderTaskEdit(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Render Edit Task


exports.renderTaskEdit = renderTaskEdit;

var editTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Task["default"].findByIdAndUpdate(id, req.body);

          case 3:
            res.redirect("/tasks");

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function editTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Render Delete Task


exports.editTask = editTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Task["default"].findByIdAndDelete(id);

          case 3:
            res.redirect("/tasks");

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); // Render Done Task


exports.deleteTask = deleteTask;

var doneTask = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return _Task["default"].findById(id);

          case 3:
            task = _context7.sent;
            task.done = !task.done;
            _context7.next = 7;
            return task.save();

          case 7:
            res.redirect("/tasks");

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function doneTask(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.doneTask = doneTask;