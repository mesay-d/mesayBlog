module.exports = {

"[project]/components/posts/all-posts.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "posts": "all-posts-module__jj5gjW__posts",
});
}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/components/posts/post-item.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "post-item-module__HlOVta__content",
  "image": "post-item-module__HlOVta__image",
  "link": "post-item-module__HlOVta__link",
  "post": "post-item-module__HlOVta__post",
});
}),
"[project]/components/posts/post-item.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/posts/post-item.module.css [ssr] (css module)");
;
;
;
;
function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].post,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: linkPath,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].link,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].image,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: imagePath,
                        alt: title,
                        width: 300,
                        height: 200,
                        style: {
                            width: '100%',
                            height: 'auto'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/posts/post-item.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/posts/post-item.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/posts/post-item.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("time", {
                            children: formattedDate
                        }, void 0, false, {
                            fileName: "[project]/components/posts/post-item.js",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: excerpt
                        }, void 0, false, {
                            fileName: "[project]/components/posts/post-item.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/posts/post-item.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/posts/post-item.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/posts/post-item.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PostItem;
}),
"[project]/components/posts/posts-grid.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "posts-grid-module__5zXqpW__grid",
});
}),
"[project]/components/posts/posts-grid.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/posts/post-item.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$posts$2d$grid$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/posts/posts-grid.module.css [ssr] (css module)");
;
;
;
function PostsGrid(props) {
    const { posts } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$posts$2d$grid$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].grid,
        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$post$2d$item$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                post: post
            }, post.slug, false, {
                fileName: "[project]/components/posts/posts-grid.js",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/posts/posts-grid.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PostsGrid;
}),
"[project]/components/posts/all-posts.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$all$2d$posts$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/posts/all-posts.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$posts$2d$grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/posts/posts-grid.js [ssr] (ecmascript)");
;
;
;
function AllPosts(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$all$2d$posts$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].posts,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "All Posts"
            }, void 0, false, {
                fileName: "[project]/components/posts/all-posts.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$posts$2d$grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                posts: props.posts
            }, void 0, false, {
                fileName: "[project]/components/posts/all-posts.js",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/posts/all-posts.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AllPosts;
}),
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
"[project]/pages/posts/index.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getStaticProps": ()=>getStaticProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$all$2d$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/posts/all-posts.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts-util.js [ssr] (ecmascript)");
;
;
;
;
;
function AllPostsPage(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "All Posts"
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/index.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "A list of all programming-related tutorials and posts!"
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/index.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/posts/index.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$posts$2f$all$2d$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                posts: props.posts
            }, void 0, false, {
                fileName: "[project]/pages/posts/index.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/posts/index.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function getStaticProps() {
    const allPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$util$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])();
    return {
        props: {
            posts: allPosts
        }
    };
}
const __TURBOPACK__default__export__ = AllPostsPage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__38ddb640._.js.map