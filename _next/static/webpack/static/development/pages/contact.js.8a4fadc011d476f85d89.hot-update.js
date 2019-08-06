webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.jsx":
/*!***************************!*\
  !*** ./pages/contact.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styles.sass */ "./styles/styles.sass");
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _middleware_mailer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middleware/mailer */ "./middleware/mailer.js");
/* harmony import */ var _middleware_mailer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_middleware_mailer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/nav */ "./components/nav.jsx");
/* harmony import */ var _components_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/name */ "./components/name.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");







var _jsxFileName = "/media/rohith/Data/Workspace/Web/therohith-next/pages/contact.jsx";







var ContactComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContactComponent, _Component);

  function ContactComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      name: "",
      email: "",
      message: "",
      showMessage: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFormChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      Object(_middleware_mailer__WEBPACK_IMPORTED_MODULE_9__["sendMail"])(_this.state, function (done) {
        _this.setState({
          name: "",
          email: "",
          message: "",
          showMessage: true
        });

        console.log(done);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleLink", function (url) {
      console.log(url);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleLink = function (url) {
        window.open(url, "_blank");
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          email = _this$state.email,
          message = _this$state.message,
          showMessage = _this$state.showMessage;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "section-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_name__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "contact-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "Full Name",
        name: "name",
        autoComplete: "name",
        autoFocus: true,
        value: name,
        onChange: this.handleFormChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "email",
        placeholder: "E-Mail",
        name: "email",
        autoComplete: "email",
        value: email,
        onChange: this.handleFormChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        rows: "5",
        placeholder: "Message",
        name: "message",
        value: message,
        onChange: this.handleFormChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), this.state.showMessage && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: "#000"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Message Sent!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Send"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "large-btn-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "large-btn",
        onClick: function onClick() {
          _this2.handleLink("tel:+918110960609");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "large-btn",
        onClick: function onClick() {
          _this2.handleLink("mailto:contact@therohith.com");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })));
    }
  }]);

  return ContactComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactComponent);

/***/ })

})
//# sourceMappingURL=contact.js.8a4fadc011d476f85d89.hot-update.js.map