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
  var newToppingRedux = [];
  var pizzaDataRedux = PizzaServData;
  var doughNameRedux = pizzaDataRedux.dough[values.dough].name;
  var sizeNameRedux = pizzaDataRedux.size[values.size].name;
  var sauceNameRedux = pizzaDataRedux.sauce[values.sauce].name;
  var cheeseNameRedux = values.cheese.map(function (name, i) {
    return pizzaDataRedux.cheese[name].name;
  });
  var vegetablesNameRedux = values.vegetables.map(function (name, i) {
    return pizzaDataRedux.vegetables[name].name;
  });
  var meatNameRedux = values.meat.map(function (name, i) {
    return pizzaDataRedux.meat[name].name;
  });
  newToppingRedux.push.apply(newToppingRedux, [doughNameRedux, sizeNameRedux, sauceNameRedux].concat(_toConsumableArray(cheeseNameRedux), _toConsumableArray(vegetablesNameRedux), _toConsumableArray(meatNameRedux)));
  PizzaName = [].concat(newToppingRedux);
  dispatch({
    type: "pizza/pizzaName",
    payload: PizzaName
  });
};

exports.toppingsName = toppingsName;