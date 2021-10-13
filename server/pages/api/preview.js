"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preview)
/* harmony export */ });
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883);

async function preview(req, res) {
  const {
    secret,
    id,
    slug
  } = req.query; // Check the secret and next parameters
  // This secret should only be known by this API route

  if (!process.env.WORDPRESS_PREVIEW_SECRET || secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id && !slug) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  } // Fetch WordPress to check if the provided `id` or `slug` exists


  const post = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__/* .getPreviewPost */ .M)(id || slug, id ? 'DATABASE_ID' : 'SLUG'); // If the post doesn't exist prevent preview mode from being enabled

  if (!post) {
    return res.status(401).json({
      message: 'Post not found'
    });
  } // Enable Preview Mode by setting the cookies


  res.setPreviewData({
    post: {
      id: post.databaseId,
      slug: post.slug,
      status: post.status
    }
  }); // Redirect to the path from the fetched post
  // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities

  res.writeHead(307, {
    Location: `/posts/${post.slug || post.databaseId}`
  });
  res.end();
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [883], () => (__webpack_exec__(797)));
module.exports = __webpack_exports__;

})();