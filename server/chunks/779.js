exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 6838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Avatar({
  author
}) {
  const name = author ? author.firstName && author.lastName ? `${author.firstName} ${author.lastName}` : author.name : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "w-12 h-12 relative mr-4",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
        src: author.avatar.url,
        layout: "fill",
        className: "rounded-full",
        alt: name
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "text-xl font-bold",
      children: name
    })]
  });
}

/***/ }),

/***/ 6742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mx-auto px-5",
    children: children
  });
}

/***/ }),

/***/ 3763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoverImage)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function CoverImage({
  title,
  coverImage,
  slug
}) {
  const image = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
    width: 2000,
    height: 1000,
    alt: `Cover Image for ${title}`,
    src: coverImage === null || coverImage === void 0 ? void 0 : coverImage.sourceUrl,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': slug
    })
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "sm:mx-0",
    children: slug ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: `/posts/${slug}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        "aria-label": title,
        children: image
      })
    }) : image
  });
}

/***/ }),

/***/ 1297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3879);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Date({
  dateString
}) {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(dateString);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("time", {
    dateTime: dateString,
    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, 'LLLL	d, yyyy')
  });
}

/***/ }),

/***/ 5095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(6742);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__(8098);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/alert.js






function Alert({
  preview
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview
    }),
    children: /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-2 text-center text-sm",
        children: preview ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: ["This is a page preview.", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/api/exit-preview",
            className: "underline hover:text-cyan duration-200 transition-colors",
            children: "Click here"
          }), ' ', "to exit preview mode."]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: ["The source code for this blog is", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `https://github.com/vercel/next.js/tree/canary/examples/${constants/* EXAMPLE_PATH */.Ys}`,
            className: "underline hover:text-success duration-200 transition-colors",
            children: "available on GitHub"
          }), "."]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/footer.js




function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-accent-1 border-t border-accent-2",
    children: /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "py-28 flex flex-col lg:flex-row items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
          children: "Statically Generated with Next.js."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://nextjs.org/docs/basic-features/pages",
            className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
            children: "Read Documentation"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `https://github.com/vercel/next.js/tree/canary/examples/${constants/* EXAMPLE_PATH */.Ys}`,
            className: "mx-3 font-bold hover:underline",
            children: "View on GitHub"
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/meta.js




function Meta() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "theme-color",
      content: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "alternate",
      type: "application/rss+xml",
      href: "/feed.xml"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: `A statically generated blog example using Next.js and ${constants/* CMS_NAME */.yf}.`
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: constants/* HOME_OG_IMAGE_URL */.vC
    })]
  });
}
;// CONCATENATED MODULE: ./components/layout.js






function Layout({
  preview,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Meta, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "min-h-screen",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Alert, {
        preview: preview
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: children
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 7929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MoreStories)
});

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
;// CONCATENATED MODULE: ./components/post-preview.js






function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-5",
      children: coverImage && /*#__PURE__*/jsx_runtime_.jsx(cover_image/* default */.Z, {
        title: title,
        coverImage: coverImage,
        slug: slug
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-3xl mb-3 leading-snug",
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
      className: "text-lg mb-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_date/* default */.Z, {
        dateString: date
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-lg leading-relaxed mb-4",
      dangerouslySetInnerHTML: {
        __html: excerpt
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(avatar/* default */.Z, {
      author: author
    })]
  });
}
;// CONCATENATED MODULE: ./components/more-stories.js



function MoreStories({
  posts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
      children: "More Stories"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32",
      children: posts.map(({
        node
      }) => {
        var _node$featuredImage, _node$author;

        return /*#__PURE__*/jsx_runtime_.jsx(PostPreview, {
          title: node.title,
          coverImage: (_node$featuredImage = node.featuredImage) === null || _node$featuredImage === void 0 ? void 0 : _node$featuredImage.node,
          date: node.date,
          author: (_node$author = node.author) === null || _node$author === void 0 ? void 0 : _node$author.node,
          slug: node.slug,
          excerpt: node.excerpt
        }, node.slug);
      })
    })]
  });
}

/***/ }),

/***/ 8098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ys": () => (/* binding */ EXAMPLE_PATH),
/* harmony export */   "yf": () => (/* binding */ CMS_NAME),
/* harmony export */   "oc": () => (/* binding */ CMS_URL),
/* harmony export */   "vC": () => (/* binding */ HOME_OG_IMAGE_URL)
/* harmony export */ });
const EXAMPLE_PATH = 'cms-wordpress';
const CMS_NAME = 'WordPress';
const CMS_URL = 'https://wordpress.org';
const HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E';

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;