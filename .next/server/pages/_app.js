"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const socialLinks = [
    {
        id: 1,
        url: "https://github.com/mbluis4",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {})
    },
    {
        id: 2,
        url: "https://www.linkedin.com/in/luis-enrique-mill%C3%A1n-brito-88a14442/",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedin, {})
    },
    {
        id: 3,
        url: "https://twitter.com/mbluis",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTwitterSquare, {})
    },
    {
        id: 4,
        url: "https://www.instagram.com/mbluis/?hl=en",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaInstagram, {})
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socialLinks);


/***/ }),

/***/ 1481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/links.js
const links = [
    {
        id: 1,
        text: "Home",
        url: "/"
    },
    {
        id: 2,
        text: "Projects",
        url: "/projects"
    },
    {
        id: 3,
        text: "About",
        url: "/about"
    },
    {
        id: 4,
        text: "Contact",
        url: "/contact"
    }, 
];
/* harmony default export */ const data_links = (links);

// EXTERNAL MODULE: ./src/data/socialLinks.js
var socialLinks = __webpack_require__(9918);
;// CONCATENATED MODULE: external "react-icons/gr"
const gr_namespaceObject = require("react-icons/gr");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Sidebar.js





const Sidebar = ({ openSidebar , toggleSidebar  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${openSidebar ? "translate-x-0" : "translate-x-full"} fixed top-0 left-0 z-20 bg-slate-400 h-full 
      w-full py-5 flex flex-col items-center justify-start transition-all overflow-hidden `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(gr_namespaceObject.GrClose, {
                className: "self-end text-2xl mr-4",
                onClick: toggleSidebar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col items-center my-4",
                children: data_links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: toggleSidebar,
                        className: "text-2xl mb-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.url,
                            children: link.text
                        })
                    }, link.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex space-x-4 text-2xl",
                children: socialLinks/* default.map */.Z.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: social.url,
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: toggleSidebar,
                        children: social.icon
                    }, social.id)
                )
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: ./src/components/Navbar.js




const Navbar = ({ openSidebar , toggleSidebar  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "absolute top-0 left-0 w-full h-20 flex items-center z-10 bg-slate-50 shadow-md",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-ninety max-w-7xl my-0 mx-auto md:grid md:grid-cols-2 md:items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: " hover:cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-3xl text-primary_1 tracking-wider font-bold",
                                        children: "Dev"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-3xl text-slate-700 tracking-wider font-bold",
                                        children: "Luen"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "md:hidden text-xl",
                                onClick: toggleSidebar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiMenu3Line, {})
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden md:flex md:flex-row md:justify-end md:space-x-5 py-2 px-0 text-lg tracking-wide",
                    children: data_links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.url,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hover:text-primary_1 hover:underline hover:cursor-pointer hover:underline-offset-4 transition-all",
                                children: link.text
                            })
                        }, link.id)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-slate-900 text-slate-100 h-36 grid text-center place-items-center py-6 mt-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex space-x-4 text-2xl mb-5",
                children: socialLinks/* default.map */.Z.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: social.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: social.icon
                    }, social.id)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "text-lg",
                children: [
                    "Copyright\xa9",
                    new Date().getFullYear(),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-primary_1",
                        children: " DevLuen"
                    }),
                    " All rights reserved. Built with",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-primary_1",
                        href: "https://nextjs.org/",
                        children: "Next.js"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Head.js

const Head = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "DevLuen"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "Web development Porfolio",
                content: "html javascript css React Next TailwindCss"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
};
/* harmony default export */ const components_Head = (Head);

;// CONCATENATED MODULE: ./src/components/SharedLayout.js






const SharedLayout = ({ children  })=>{
    const { 0: openSidebar , 1: setOpenSidebar  } = (0,external_react_.useState)(false);
    const toggleSidebar = ()=>{
        setOpenSidebar((prev)=>!prev
        );
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Head, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col m-0 min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                        openSidebar: openSidebar,
                        toggleSidebar: toggleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {
                        openSidebar: openSidebar,
                        toggleSidebar: toggleSidebar
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const components_SharedLayout = (SharedLayout);

;// CONCATENATED MODULE: ./src/pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_SharedLayout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(1481)));
module.exports = __webpack_exports__;

})();