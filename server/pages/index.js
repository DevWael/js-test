"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(6742);
// EXTERNAL MODULE: ./components/more-stories.js + 1 modules
var more_stories = __webpack_require__(7929);
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6838);
// EXTERNAL MODULE: ./components/date.js
var components_date = __webpack_require__(1297);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3763);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/hero-post.js






function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-8 md:mb-16",
      children: coverImage && /*#__PURE__*/jsx_runtime_.jsx(cover_image/* default */.Z, {
        title: title,
        coverImage: coverImage,
        slug: slug
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "mb-4 text-4xl lg:text-6xl leading-tight",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/posts/${slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "hover:underline",
              dangerouslySetInnerHTML: {
                __html: title
              }
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mb-4 md:mb-0 text-lg",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_date/* default */.Z, {
            dateString: date
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-lg leading-relaxed mb-4",
          dangerouslySetInnerHTML: {
            __html: excerpt
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
          author: author
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8098);
;// CONCATENATED MODULE: ./components/intro.js



function Intro() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",
      children: "Blog."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
      className: "text-center md:text-left text-lg mt-5 md:pl-8",
      children: ["A statically generated blog example using", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://nextjs.org/",
        className: "underline hover:text-success duration-200 transition-colors",
        children: "Next.js"
      }), ' ', "and", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: constants/* CMS_URL */.oc,
        className: "underline hover:text-success duration-200 transition-colors",
        children: constants/* CMS_NAME */.yf
      }), "."]
    })]
  });
}
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(5095);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./pages/index.js











function Index({
  allPosts: {
    edges
  },
  preview
}) {
  var _edges$, _heroPost$featuredIma, _heroPost$author;

  const heroPost = (_edges$ = edges[0]) === null || _edges$ === void 0 ? void 0 : _edges$.node;
  const morePosts = edges.slice(1);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      preview: preview,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
          children: ["Next.js Blog Example with ", constants/* CMS_NAME */.yf]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Intro, {}), heroPost && /*#__PURE__*/jsx_runtime_.jsx(HeroPost, {
          title: heroPost.title,
          coverImage: (_heroPost$featuredIma = heroPost.featuredImage) === null || _heroPost$featuredIma === void 0 ? void 0 : _heroPost$featuredIma.node,
          date: heroPost.date,
          author: (_heroPost$author = heroPost.author) === null || _heroPost$author === void 0 ? void 0 : _heroPost$author.node,
          slug: heroPost.slug,
          excerpt: heroPost.excerpt
        }), morePosts.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(more_stories/* default */.Z, {
          posts: morePosts
        })]
      })]
    })
  });
}
async function getStaticProps({
  preview = false
}) {
  const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
  return {
    props: {
      allPosts,
      preview
    }
  };
}

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,883,779], () => (__webpack_exec__(2632)));
module.exports = __webpack_exports__;

})();