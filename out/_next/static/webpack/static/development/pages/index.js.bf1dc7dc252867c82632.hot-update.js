webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "./node_modules/@ionic/pwa-elements/loader/index.mjs");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _components_chat_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/chat/chat */ "./components/chat/chat.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");

var _jsxFileName = "/media/dwa/archivos/Developer-projects/dwa/components/navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 //Capatitor import


var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Network;

var network = function network(setNet) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function network$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Network.addListener("networkStatusChange", function (rs) {
            console.log(rs);
            setNet(rs);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var inactive = {
  color: "darkgoldenrod"
};

function Navbar(props) {
  var navStatus = props.navStatus;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState3[0],
      setShow = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      net = _useState4[0],
      setNet = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
    setWidth(window.innerWidth);
    window.addEventListener('resize', function () {
      setWidth(window.innerWidth);
    });
    window.removeEventListener('resize', function () {
      setWidth(window.innerWidth);
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setStatus(navStatus);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    network(setNet);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/dark.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width,minimum-scale=1,initial-scale=1 user-scalable=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, width > 720 ? status === 'home' ? __jsx("p", {
    style: inactive,
    className: "inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("img", {
    src: "/img/logo.png",
    width: "32px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "diaz web app") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("img", {
    src: "/img/logo.png",
    width: "32px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "diaz web app")) : null, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, status === 'home' ? __jsx("p", {
    style: inactive,
    className: "inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    style: inactive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
    style: inactive,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), width > 641 ? 'home' : null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setShow(true);
    },
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), width > 641 ? 'home' : null)), status === 'web apps' ? __jsx("p", {
    style: inactive,
    className: "inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    style: inactive,
    width: "32px",
    height: "32px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["WebOutlined"], {
    style: inactive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), width > 641 ? 'web apps' : null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/webapps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setShow(true);
    },
    href: "/webapps.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    width: "32px",
    height: "32px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["WebOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), width > 641 ? 'web apps' : null)), status === 'movil apps' ? __jsx("p", {
    style: inactive,
    className: "inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    style: inactive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DeveloperModeOutlined"], {
    style: inactive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), width > 641 ? 'movil apps' : null) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/movilapps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setShow(true);
    },
    href: "/movilapps.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DeveloperModeOutlined"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), width > 641 ? 'movil apps' : null))))), __jsx(_components_chat_chat__WEBPACK_IMPORTED_MODULE_6__["default"], {
    net: net,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\n\n                    :root{\n                        --font-size:16px;\n                        --iconColor:rgb(0, 135, 224);\n                        --iconColorButton:rgb(255, 255, 255);\n                        --textColor:lightgrey;\n                        --backgroundColor:#1d1d1d;\n                        --themeColor:#2d2d2d;\n                    }\n                    header{\n                        position:fixed;\n                        ".concat(width < 721 ? 'bottom:0;' : 'top:0;', "\n                        background:var(--themeColor);\n                        height:52px;\n                        z-index:999;\n                    }\n                    main{\n                        height:calc(100vh - 52px);\n                        ").concat(width < 721 ? 'top:0;' : 'top:52px;', "\n                    }\n                    header span{\n                        grid-column: 2 / span 14;\n                        display:flex;\n                        flex-flow:row nowrap;\n                        align-items:center;\n                        justify-content:").concat(width < 720 ? 'center;' : 'space-between;', "\n                        height:52px;\n                        overflow:hidden;\n                    }\n                    header span nav{\n                        display:flex;\n                        flex-flow:row nowrap;\n                        align-items:center;\n                        justify-content:").concat(width < 720 ? 'space-between;' : "flex-end;", "\n                        height:52px;\n                        overflow:hidden;\n                        ").concat(width < 720 ? 'width:100%;' : null, "\n                    }\n\n                    header span a{\n                        display:flex;\n                        flex-flow:row nowrap;\n                        justify-content:space-between;\n                        align-items:center;\n                        padding:0 2vmin;\n                        text-transform:capitalize;\n                    }\n                    \n                    header span a svg{\n                        color:var(--iconColor);\n                    }\n                    header span a img{\n                        margin-right:5px;\n                    }\n                    header span p{\n                        display:flex;\n                        flex-flow:row nowrap;\n                        justify-content:space-between;\n                        align-items:center;\n                        text-transform:capitalize;\n                    }\n                ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Backdrop"], {
    style: {
      zIndex: '99999'
    },
    open: show,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("img", {
    src: "/img/loading-chulo.gif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })));
}



/***/ })

})
//# sourceMappingURL=index.js.bf1dc7dc252867c82632.hot-update.js.map