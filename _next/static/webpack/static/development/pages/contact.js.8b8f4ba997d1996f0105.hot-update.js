webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./middleware/mailer.js":
/*!******************************!*\
  !*** ./middleware/mailer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function _sendMail(data, cb) {
  console.log(dat);
  axios.post('https://share.rolistudio.co/sendmail', data).then(cb);
}

module.exports = {
  sendMail: function sendMail(data, cb) {
    _sendMail(data, cb);
  }
};

/***/ })

})
//# sourceMappingURL=contact.js.8b8f4ba997d1996f0105.hot-update.js.map