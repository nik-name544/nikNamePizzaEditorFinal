"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toppingsName = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var toppingsName = function toppingsName(_ref) {
  var values = _ref.values,
      PizzaServData = _ref.PizzaServData,
      PizzaName = _ref.PizzaName,
      dispatch = _ref.dispatch;
  var newTopping = [];
  var pizzaData = PizzaServData;
  var doughName = pizzaData.dough[values.dough].name;
  var sizeName = pizzaData.size[values.size].name;
  var sauceName = pizzaData.sauce[values.sauce].name;
  var cheeseName = values.cheese.map(function (name, i) {
    return pizzaData.cheese[name].name;
  });
  var vegetablesName = values.vegetables.map(function (name, i) {
    return pizzaData.vegetables[name].name;
  });
  var meatName = values.meat.map(function (name, i) {
    return pizzaData.meat[name].name;
  });
  newTopping.push.apply(newTopping, [doughName, sizeName, sauceName].concat(_toConsumableArray(cheeseName), _toConsumableArray(vegetablesName), _toConsumableArray(meatName)));
  PizzaName = [].concat(newTopping);
  dispatch({
    type: "pizza/pizzaName",
    payload: PizzaName
  });
};

exports.toppingsName = toppingsName;