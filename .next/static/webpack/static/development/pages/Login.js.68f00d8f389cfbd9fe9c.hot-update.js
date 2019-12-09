webpackHotUpdate("static\\development\\pages\\Login.js",{

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./pages/Header.js");
/* harmony import */ var _component_Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Login_css */ "./component/Login_css.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrID = _useState[0],
      getID = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      usrPW = _useState2[0],
      getPW = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  function gotoReg() {
    router.push('/Join');
  } // useEffect(() =>{
  // });


  function getid(e) {
    getID(e.target.value);
  }

  function getpw(e) {
    getPW(e.target.value);
  }

  function login() {
    axios__WEBPACK_IMPORTED_MODULE_6___default()({
      method: 'POST',
      url: '/Login',
      data: {
        userID: usrID,
        userPW: usrPW
      }
    }).then(function (res) {
      console.log(res.data.bool);
      var check = res.data.bool;

      if (check) {
        alert('환영합니다! ' + res.data.userID + '님!');
        localStorage.setItem('usrID', userID);
        router.push({
          pathname: '/Mypage'
        });
      } else {
        alert('잘못된 로그인 접근입니다.');
      }
    });
  }

  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "TIC-\uB85C\uADF8\uC778")), __jsx(_component_Login_css__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
    "class": "body_login"
  }, __jsx("div", {
    "class": "back"
  }, __jsx("div", {
    "class": "whiteback"
  }, __jsx("div", {
    "class": "login-card"
  }, __jsx("h1", null, "\uB85C\uADF8\uC778"), __jsx("form", null, __jsx("p", {
    "class": "username"
  }, __jsx("input", {
    type: "text",
    name: "user_id",
    placeholder: "\uC544\uC774\uB514",
    onChange: getid,
    required: true
  })), __jsx("p", {
    "class": "pwd"
  }, __jsx("input", {
    type: "password",
    name: "user_pwd",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    onChange: getpw,
    required: true
  })), __jsx("button", {
    "class": "login",
    type: "button",
    onClick: login
  }, " ", "Log in", " "), __jsx("button", {
    "class": "sign_in",
    type: "button",
    onClick: gotoReg
  }, " ", "Sign In", " ")), __jsx("img", {
    src: "/login_or.png",
    width: "100%",
    alt: ""
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Non_member"
  }, __jsx("button", {
    "class": "non_member",
    type: "button"
  }, " ", "\uBE44\uD68C\uC6D0 \uC608\uB9E4\uD558\uAE30", " ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=Login.js.68f00d8f389cfbd9fe9c.hot-update.js.map