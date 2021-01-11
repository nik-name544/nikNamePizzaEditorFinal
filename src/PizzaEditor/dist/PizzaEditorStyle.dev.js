"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxTitle = exports.CheckboxInner = exports.CheckboxGroup = exports.SauceInner = exports.SizeDoughText = exports.RadioText = exports.RadioLabel = exports.RadioBox = exports.SizeDoughWrapper = exports.ToppingTitle = exports.SizeDough = exports.SizeDoughInner = exports.MainApp = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    padding: 50px 15px 4px;\n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    color: #1F1F33;\n    border-radius: 12px;\n    position: relative; \n\n    &::before {\n        content: \"\";\n        width: 64px;\n        height: 64px;\n        position: absolute;\n        background-repeat: no-repeat;\n        top: -20px;  \n    }\n\n    \n\n     \n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    background: #FFFFFF;\n    box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);\n    border-radius: 12px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    margin-top: 30px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    background: #F9F9FB;\n    padding: 6px 6px 12px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: space-between;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 4px 25px;  \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    vertical-align: -6.5px;\n    border-radius: 12px;\n    outline: none;\n    transition: 0.2s;\n    padding: 4px 17px; \n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    color: #1F1F33;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    input[type=\"radio\"]:checked  {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: fit-content;\n    background: #F9F9FB;\n    padding: 6px 6px 12px;\n    border-radius: 12px;\n    display: flex;\n    justify-content: space-between;\n    width: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: #4B4B7C;\n    font-family: Rounded Mplus 1c;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    padding-left: 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 47%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    margin: 0 auto;\n    margin-top: 100px;\n    align-items: center;\n    /* width: fit-content; */\n    height: 100%;\n    width: 360px;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainApp = _styledComponents["default"].form(_templateObject());

exports.MainApp = MainApp;

var SizeDoughInner = _styledComponents["default"].div(_templateObject2());

exports.SizeDoughInner = SizeDoughInner;

var SizeDough = _styledComponents["default"].fieldset(_templateObject3());

exports.SizeDough = SizeDough;

var ToppingTitle = _styledComponents["default"].legend(_templateObject4());

exports.ToppingTitle = ToppingTitle;

var SizeDoughWrapper = _styledComponents["default"].div(_templateObject5());

exports.SizeDoughWrapper = SizeDoughWrapper;

var RadioBox = _styledComponents["default"].input(_templateObject6());

exports.RadioBox = RadioBox;

var RadioLabel = _styledComponents["default"].label(_templateObject7());

exports.RadioLabel = RadioLabel;

var RadioText = _styledComponents["default"].span(_templateObject8());

exports.RadioText = RadioText;
var SizeDoughText = (0, _styledComponents["default"])(RadioText)(_templateObject9());
exports.SizeDoughText = SizeDoughText;

var SauceInner = _styledComponents["default"].div(_templateObject10());

exports.SauceInner = SauceInner;

var CheckboxGroup = _styledComponents["default"].div(_templateObject11());

exports.CheckboxGroup = CheckboxGroup;

var CheckboxInner = _styledComponents["default"].label(_templateObject12()); // styled.p`
// &::before {
//     background-image: url(./img/${props => props.name}.png); }


exports.CheckboxInner = CheckboxInner;

var CheckboxTitle = _styledComponents["default"].p(_templateObject13());

exports.CheckboxTitle = CheckboxTitle;