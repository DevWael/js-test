(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(6742);
// EXTERNAL MODULE: ./components/post-body.module.css
var post_body_module = __webpack_require__(499);
var post_body_module_default = /*#__PURE__*/__webpack_require__.n(post_body_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/post-body.js


function PostBody({
  content
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "max-w-2xl mx-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (post_body_module_default()).content,
      dangerouslySetInnerHTML: {
        __html: content
      }
    })
  });
}
// EXTERNAL MODULE: ./components/more-stories.js + 1 modules
var more_stories = __webpack_require__(7929);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/header.js



function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
    className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "hover:underline",
        children: "Blog"
      })
    }), "."]
  });
}
// EXTERNAL MODULE: ./components/avatar.js
var avatar = __webpack_require__(6838);
// EXTERNAL MODULE: ./components/date.js
var components_date = __webpack_require__(1297);
// EXTERNAL MODULE: ./components/cover-image.js
var cover_image = __webpack_require__(3763);
;// CONCATENATED MODULE: ./components/post-title.js

function PostTitle({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
}
;// CONCATENATED MODULE: ./components/categories.js


function Categories({
  categories
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
    className: "ml-1",
    children: ["under", categories.edges.length > 0 ? categories.edges.map((category, index) => /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ml-1",
      children: category.node.name
    }, index)) : /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ml-1",
      children: categories.edges.node.name
    })]
  });
}
;// CONCATENATED MODULE: ./components/post-header.js








function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostTitle, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden md:block md:mb-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
        author: author
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-8 md:mb-16 sm:mx-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(cover_image/* default */.Z, {
        title: title,
        coverImage: coverImage
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block md:hidden mb-6",
        children: /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
          author: author
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mb-6 text-lg",
        children: ["Posted ", /*#__PURE__*/jsx_runtime_.jsx(components_date/* default */.Z, {
          dateString: date
        }), /*#__PURE__*/jsx_runtime_.jsx(Categories, {
          categories: categories
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/section-separator.js

function SectionSeparator() {
  return /*#__PURE__*/jsx_runtime_.jsx("hr", {
    className: "border-accent-2 mt-28 mb-24"
  });
}
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(5095);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8098);
;// CONCATENATED MODULE: ./components/tags.js


function Tags({
  tags
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "max-w-2xl mx-auto",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "mt-8 text-lg font-bold",
      children: ["Tagged", tags.edges.map((tag, index) => /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ml-4 font-normal",
        children: tag.node.name
      }, index))]
    })
  });
}
;// CONCATENATED MODULE: ./pages/posts/[slug].js

















function Post({
  post,
  posts,
  preview
}) {
  var _post$featuredImage, _post$featuredImage$n, _post$featuredImage2, _post$author;

  const router = (0,router_namespaceObject.useRouter)();
  const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    preview: preview,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), router.isFallback ? /*#__PURE__*/jsx_runtime_.jsx(PostTitle, {
        children: "Loading\u2026"
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
              children: [post.title, " | Next.js Blog Example with ", constants/* CMS_NAME */.yf]
            }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
              property: "og:image",
              content: (_post$featuredImage = post.featuredImage) === null || _post$featuredImage === void 0 ? void 0 : (_post$featuredImage$n = _post$featuredImage.node) === null || _post$featuredImage$n === void 0 ? void 0 : _post$featuredImage$n.sourceUrl
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(PostHeader, {
            title: post.title,
            coverImage: (_post$featuredImage2 = post.featuredImage) === null || _post$featuredImage2 === void 0 ? void 0 : _post$featuredImage2.node,
            date: post.date,
            author: (_post$author = post.author) === null || _post$author === void 0 ? void 0 : _post$author.node,
            categories: post.categories
          }), /*#__PURE__*/jsx_runtime_.jsx(PostBody, {
            content: post.content
          }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
            children: post.tags.edges.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(Tags, {
              tags: post.tags
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(SectionSeparator, {}), morePosts.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(more_stories/* default */.Z, {
          posts: morePosts
        })]
      })]
    })
  });
}
async function getStaticProps({
  params,
  preview = false,
  previewData
}) {
  const data = await (0,api/* getPostAndMorePosts */.ds)(params.slug, preview, previewData);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts
    }
  };
}
async function getStaticPaths() {
  const allPosts = await (0,api/* getAllPostsWithSlug */.h9)();
  return {
    paths: allPosts.edges.map(({
      node
    }) => `/posts/${node.slug}`) || [],
    fallback: true
  };
}

/***/ }),

/***/ 499:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-body_content__Ky8yr"
};


/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3879:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,883,779], () => (__webpack_exec__(2606)));
module.exports = __webpack_exports__;

})();