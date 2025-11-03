module.exports = {

"[externals]/react-markdown [external] (react-markdown, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-markdown");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[externals]/react-syntax-highlighter [external] (react-syntax-highlighter, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-syntax-highlighter", () => require("react-syntax-highlighter"));

module.exports = mod;
}}),
"[externals]/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js [external] (react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js", () => require("react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js"));

module.exports = mod;
}}),
"[externals]/react-syntax-highlighter/dist/cjs/languages/prism/javascript.js [external] (react-syntax-highlighter/dist/cjs/languages/prism/javascript.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-syntax-highlighter/dist/cjs/languages/prism/javascript.js", () => require("react-syntax-highlighter/dist/cjs/languages/prism/javascript.js"));

module.exports = mod;
}}),
"[externals]/react-syntax-highlighter/dist/cjs/languages/prism/css.js [external] (react-syntax-highlighter/dist/cjs/languages/prism/css.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-syntax-highlighter/dist/cjs/languages/prism/css.js", () => require("react-syntax-highlighter/dist/cjs/languages/prism/css.js"));

module.exports = mod;
}}),
"[project]/components/posts/post-detail/post-header.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "header": "post-header-module__x8u8bq__header",
});
}),
"[project]/components/posts/post-detail/post-header.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/posts/post-detail/post-header.module.css [ssr] (css module)");
;
;
;
function PostHeader(props) {
    const { title, image } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$header$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-header.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: title,
                width: 200,
                height: 150
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-header.js",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/posts/post-detail/post-header.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PostHeader;
}),
"[project]/components/posts/post-detail/post-content.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "post-content-module__KyPeWq__content",
  "image": "post-content-module__KyPeWq__image",
});
}),
"[project]/components/posts/post-detail/post-content.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-markdown [external] (react-markdown, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-syntax-highlighter [external] (react-syntax-highlighter, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$atom$2d$dark$2e$js__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$atom$2d$dark$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js [external] (react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$javascript$2e$js__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$javascript$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-syntax-highlighter/dist/cjs/languages/prism/javascript.js [external] (react-syntax-highlighter/dist/cjs/languages/prism/javascript.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$css$2e$js__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$css$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-syntax-highlighter/dist/cjs/languages/prism/css.js [external] (react-syntax-highlighter/dist/cjs/languages/prism/css.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/posts/post-detail/post-header.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/posts/post-detail/post-content.module.css [ssr] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2c$__cjs$29$__["PrismLight"].registerLanguage('js', __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$javascript$2e$js__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$javascript$2e$js$2c$__cjs$29$__["default"]);
__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2c$__cjs$29$__["PrismLight"].registerLanguage('css', __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$css$2e$js__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$css$2e$js$2c$__cjs$29$__["default"]);
function PostContent({ post }) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customComponents = {
        p ({ node, children }) {
            // Check if first child is an image
            if (node.children[0]?.type === 'image') {
                const image = node.children[0];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].image,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: `/images/posts/${post.slug}/${image.url}`,
                        alt: image.alt,
                        width: 600,
                        height: 300
                    }, void 0, false, {
                        fileName: "[project]/components/posts/post-detail/post-content.js",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/posts/post-detail/post-content.js",
                    lineNumber: 23,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-content.js",
                lineNumber: 33,
                columnNumber: 14
            }, this);
        },
        code ({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2c$__cjs$29$__["PrismLight"], {
                style: __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$atom$2d$dark$2e$js__$5b$external$5d$__$28$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$atom$2d$dark$2e$js$2c$__cjs$29$__["default"],
                language: match[1],
                ...props,
                children: String(children).replace(/\n$/, '')
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-content.js",
                lineNumber: 39,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("code", {
                className: className,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-content.js",
                lineNumber: 43,
                columnNumber: 9
            }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].content,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$header$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: post.title,
                image: imagePath
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-content.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$markdown__$5b$external$5d$__$28$react$2d$markdown$2c$__esm_import$29$__["default"], {
                components: customComponents,
                children: post.content
            }, void 0, false, {
                fileName: "[project]/components/posts/post-detail/post-content.js",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/posts/post-detail/post-content.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PostContent;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/gray-matter [external] (gray-matter, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("gray-matter", () => require("gray-matter"));

module.exports = mod;
}}),
"[project]/lib/posts-util.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getAllPosts": ()=>getAllPosts,
    "getFeaturedPosts": ()=>getFeaturedPosts,
    "getPostData": ()=>getPostData,
    "getPostsFiles": ()=>getPostsFiles
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/gray-matter [external] (gray-matter, cjs)");
;
;
;
const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'posts');
function getPostsFiles() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
}
function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${postSlug}.md`);
    const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$29$__["default"])(fileContent);
    const postData = {
        slug: postSlug,
        ...data,
        content
    };
    return postData;
}
function getAllPosts() {
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map((postFile)=>{
        return getPostData(postFile);
    });
    const sortedPosts = allPosts.sort((postA, postB)=>postA.date > postB.date ? -1 : 1);
    return sortedPosts;
}
function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post)=>post.isFeatured);
    return featuredPosts;
}
}),
"[project]/pages/posts/[slug].js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getStaticPaths": ()=>getStaticPaths,
    "getStaticProps": ()=>getStaticProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/posts/post-detail/post-content.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts-util.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function PostDetailPage(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: props.post.title
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[slug].js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: props.post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[slug].js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/posts/[slug].js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$detail$2f$post$2d$content$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                post: props.post
            }, void 0, false, {
                fileName: "[project]/pages/posts/[slug].js",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/posts/[slug].js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPostData"])(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    };
}
function getStaticPaths() {
    const postFilenames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPostsFiles"])();
    const slugs = postFilenames.map((fileName)=>fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map((slug)=>({
                params: {
                    slug: slug
                }
            })),
        fallback: false
    };
}
const __TURBOPACK__default__export__ = PostDetailPage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d5d07ba0._.js.map