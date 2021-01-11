"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateRoute = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import { useAuth } from "./AuthContext";
var PrivateRoute = function PrivateRoute(_ref) {
  var redirectPath = _ref.redirectPath,
      routeProps = _objectWithoutProperties(_ref, ["redirectPath"]);

  //   const { authed } = useAuth();
  var dispatch = (0, _reactRedux.useDispatch)();
  var Registered = (0, _reactRedux.useSelector)(function (state) {
    return state.Registered;
  });
  return Registered ? console.log(1111) : console.log(2222); // return Registered ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};

exports.PrivateRoute = PrivateRoute;