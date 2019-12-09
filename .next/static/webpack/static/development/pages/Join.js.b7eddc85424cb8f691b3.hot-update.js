webpackHotUpdate("static\\development\\pages\\Join.js",{

/***/ "./pages/Join.js":
/*!***********************!*\
  !*** ./pages/Join.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Join_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Join_css */ "./component/Join_css.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./pages/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Join = function Join() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrName = _useState[0],
      getName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrID = _useState2[0],
      getID = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrPW = _useState3[0],
      getPW = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrPN = _useState4[0],
      getPN = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrBD = _useState5[0],
      getBD = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function getname(e) {
    getName(e.target.value);
  }

  function getid(e) {
    getID(e.target.value);
  }

  function getpw(e) {
    getPW(e.target.value);
  }

  function getpn(e) {
    getPN(e.target.value);
  }

  function getbd(e) {
    getBD(e.target.value);
  }

  function Join() {
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
      method: 'POST',
      url: '/join_process',
      data: {
        userName: usrName,
        userID: usrID,
        userPW: usrPW,
        userPN: usrPN,
        userBD: usrBD
      }
    }).then(function (res) {
      if (true) {
        alert('회원가입이 완료되었습니다.');
        router.push({
          pathname: '/Login'
        });
      } else {}
    });
  }

  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "TIC-\uD68C\uC6D0\uAC00\uC785")), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_component_Join_css__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("div", null, __jsx("div", {
    "class": "signin-back"
  }, __jsx("div", {
    "class": "signin-whiteback"
  }, __jsx("div", {
    "class": "signin-card"
  }, __jsx("h1", null, "\uD68C\uC6D0\uAC00\uC785"), __jsx("form", null, __jsx("p", {
    "class": "signin-name"
  }, __jsx("input", {
    type: "text",
    name: "user_name",
    placeholder: "\uC774\uB984",
    onChange: getname,
    required: true
  })), __jsx("p", {
    "class": "signin-username"
  }, __jsx("input", {
    type: "text",
    name: "user_id",
    placeholder: "\uC544\uC774\uB514",
    onChange: getid,
    required: true
  })), __jsx("p", {
    "class": "signin-pwd"
  }, __jsx("input", {
    type: "password",
    name: "user_pwd",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    onChange: getpw,
    required: true
  })), __jsx("p", {
    "class": "ph"
  }, __jsx("input", {
    type: "text",
    name: "user_pn",
    placeholder: "\uC804\uD654\uBC88\uD638",
    onChange: getpn,
    required: true
  })), __jsx("p", {
    "class": "birth"
  }, __jsx("input", {
    type: "text",
    name: "user_bd",
    placeholder: "\uC0DD\uB144\uC6D4\uC77C (YYYYMMDD)",
    onChange: getbd,
    required: true
  })), __jsx("img", {
    src: "bar.png",
    width: "100%",
    alt: ""
  }), __jsx("button", {
    "class": "sign_in",
    type: "button",
    onClick: Join
  }, " ", "Sign In", " ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ })

})
//# sourceMappingURL=Join.js.b7eddc85424cb8f691b3.hot-update.js.map