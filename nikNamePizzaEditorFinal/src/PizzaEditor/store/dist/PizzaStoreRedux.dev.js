"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.finalTotal = exports.fetchdata = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var setQuote = function setQuote(data) {
  var data2 = [];

  var data1 = _toConsumableArray(data);

  var dataS = [{
    dough: {
      'thin': {},
      'fluffy': {}
    },
    size: {
      'small': {},
      'big': {}
    },
    sauce: {
      'tomatoSauce': {},
      'whiteSauce': {},
      'spicySauce': {}
    },
    cheese: {
      'mozzarella': {},
      'cheddar': {},
      'dorBlue': {}
    },
    vegetables: {
      'tomato': {},
      'mushrooms': {},
      'pepper': {}
    },
    meat: {
      'bacon': {},
      'pepperoni': {},
      'ham': {}
    }
  }];
  var newNewData = dataS;

  function toppings(itemNew) {
    if (itemNew.category === "dough") {
      var name = itemNew.name;
      var price = itemNew.price;
      newNewData[0].dough[name] = {
        name: name,
        price: price
      };
    } else if (itemNew.category === "size") {
      var _name = itemNew.name;
      var _price = itemNew.price;
      newNewData[0].size[_name] = {
        name: _name,
        price: _price
      };
    } else if (itemNew.category === "sauce") {
      var _name2 = itemNew.name;
      var _price2 = itemNew.price;
      newNewData[0].sauce[_name2] = {
        name: _name2,
        price: _price2
      };
    } else if (itemNew.category === "cheese") {
      var _name3 = itemNew.name;
      var _price3 = itemNew.price;
      newNewData[0].cheese[_name3] = {
        name: _name3,
        price: _price3
      };
    } else if (itemNew.category === "vegetables") {
      var _name4 = itemNew.name;
      var _price4 = itemNew.price;
      newNewData[0].vegetables[_name4] = {
        name: _name4,
        price: _price4
      };
    } else if (itemNew.category === "meat") {
      var _name5 = itemNew.name;
      var _price5 = itemNew.price;
      newNewData[0].meat[_name5] = {
        name: _name5,
        price: _price5
      };
    }
  }

  var newData = data1.map(function (item, i) {
    var itemNew = item;
    toppings(itemNew);
  });
  data2.push.apply(data2, newNewData);
  return data2;
};

var fetchdata = (0, _toolkit.createAsyncThunk)("pizza/fetchdata", function _callee() {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:4000/ingredients").then(function (res) {
            return res.json();
          }).then(function (data) {
            return setQuote(data);
          }));

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchdata = fetchdata;
var initialState = {
  toppings: [],
  address: [],
  cardnum: "",
  total: 200,
  registered: false,
  pizzaServData: [],
  orderList: [],
  servAnswer: {
    isLoading: false,
    isError: false,
    error: ""
  }
};
var pizzaLogic = (0, _toolkit.createSlice)({
  name: "pizza",
  initialState: initialState,
  reducers: {
    pizzaName: function pizzaName(state, action) {
      state.toppings = action.payload;
    },
    finalTotal: function finalTotal(state, action) {
      state.total = action.payload;
    },
    cardNum: function cardNum(state, action) {
      state.cardnum = action.payload;
    },
    address: function address(state, action) {
      state.address = action.payload;
    },
    registered: function registered(state, action) {
      state.registered = action.payload;
    },
    orderList: function orderList(state, action) {
      state.orderList = action.payload;
    },
    servAnswer: function servAnswer(state, action) {
      state.servAnswer.isLoading = action.isLoading;
      state.servAnswer.isError = action.isError;
      state.servAnswer.error = action.error;
    }
  },
  extraReducers: _defineProperty({}, fetchdata.fulfilled, function (state, action) {
    state.pizzaServData = action.payload;
  })
});

var finalTotal = function finalTotal(values, PizzaServData) {
  if (PizzaServData !== undefined) {
    var pizzaData = PizzaServData;
    var doughPrice = Number(pizzaData.dough[values.dough].price);
    var sizePrice = Number(pizzaData.size[values.size].price);
    var saucePrice = Number(pizzaData.sauce[values.sauce].price);
    var cheesePrice = values.cheese.reduce(function (price, cheese) {
      return price + Number(pizzaData.cheese[cheese].price);
    }, 0);
    var vegetablesPrice = values.vegetables.reduce(function (price, vegetables) {
      return price + Number(pizzaData.vegetables[vegetables].price);
    }, 0);
    var meatPrice = values.meat.reduce(function (price, meat) {
      return price + Number(pizzaData.meat[meat].price);
    }, 0);
    return doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200;
  } else {
    return 200;
  }
};

exports.finalTotal = finalTotal;
var store = (0, _toolkit.configureStore)({
  reducer: pizzaLogic.reducer
});
exports.store = store;
store.dispatch(fetchdata());