module.exports = {

"[externals]/mongodb [external] (mongodb, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}}),
"[project]/pages/authorize.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
;
;
function parseCookies(cookieHeader) {
    const list = {};
    if (!cookieHeader) return list;
    cookieHeader.split(';').forEach(function(cookie) {
        const parts = cookie.split('=');
        const key = parts.shift().trim();
        const value = decodeURI(parts.join('='));
        list[key] = value;
    });
    return list;
}
function AuthorizePage({ user, messages = [], error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Authorized Page"
                }, void 0, false, {
                    fileName: "[project]/pages/authorize.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/authorize.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                style: {
                    padding: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Authorized content"
                    }, void 0, false, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Welcome",
                            user ? `, ${user}` : '',
                            "! You have access to this protected page."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "To sign out, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/api/logout",
                                children: "click here to logout"
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 27,
                                columnNumber: 24
                            }, this),
                            " and then refresh."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        style: {
                            marginTop: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "Latest messages"
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'red'
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "No messages yet."
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 33,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                children: messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        style: {
                                            marginBottom: 12,
                                            borderBottom: '1px solid #eee',
                                            paddingBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                        children: m.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/authorize.js",
                                                        lineNumber: 37,
                                                        columnNumber: 22
                                                    }, this),
                                                    " <",
                                                    m.email,
                                                    ">"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/authorize.js",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    whiteSpace: 'pre-wrap'
                                                },
                                                children: m.message
                                            }, void 0, false, {
                                                fileName: "[project]/pages/authorize.js",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/pages/authorize.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/authorize.js",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
async function getServerSideProps(context) {
    const { req } = context;
    const cookies = parseCookies(req.headers.cookie || '');
    // Compare cookie value with server-side secret
    const authToken = process.env.AUTH_TOKEN;
    if (!authToken || !cookies.auth || cookies.auth !== authToken) {
        // Not authorized -> redirect to login page
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
    // Fetch latest messages from MongoDB (latest first), limit 10
    const connectionString = `mongodb+srv://${("TURBOPACK compile-time value", "mesayezekiel")}:${("TURBOPACK compile-time value", "mesayezekiel")}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    let messages = [];
    let error = null;
    try {
        const client = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"].connect(connectionString);
        const db = client.db();
        const docs = await db.collection('messages').find().sort({
            _id: -1
        }).limit(10).toArray();
        messages = docs.map((d)=>({
                id: d._id.toString(),
                name: d.name,
                email: d.email,
                message: d.message
            }));
        client.close();
    } catch  {
        error = 'Could not load messages.';
    }
    return {
        props: {
            user: 'Authorized User',
            messages,
            error
        }
    };
}
const __TURBOPACK__default__export__ = AuthorizePage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ba79d315._.js.map