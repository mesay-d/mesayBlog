module.exports = {

"[project]/components/messages/message-list.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "message-list-module__h-F07G__container",
  "emptyMessage": "message-list-module__h-F07G__emptyMessage",
  "error": "message-list-module__h-F07G__error",
  "heading": "message-list-module__h-F07G__heading",
  "messageCell": "message-list-module__h-F07G__messageCell",
  "row": "message-list-module__h-F07G__row",
  "table": "message-list-module__h-F07G__table",
  "tableWrapper": "message-list-module__h-F07G__tableWrapper",
  "td": "message-list-module__h-F07G__td",
  "th": "message-list-module__h-F07G__th",
});
}),
"[project]/components/messages/message-list.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/messages/message-list.module.css [ssr] (css module)");
;
;
;
function MessageList({ messages = [], error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                id: "messages-heading",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heading,
                children: "Latest messages"
            }, void 0, false, {
                fileName: "[project]/components/messages/message-list.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/messages/message-list.js",
                lineNumber: 9,
                columnNumber: 9
            }, this),
            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].emptyMessage,
                children: "No messages yet."
            }, void 0, false, {
                fileName: "[project]/components/messages/message-list.js",
                lineNumber: 13,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].table,
                    "aria-labelledby": "messages-heading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].th,
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/messages/message-list.js",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].th,
                                        children: "email"
                                    }, void 0, false, {
                                        fileName: "[project]/components/messages/message-list.js",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].th,
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/components/messages/message-list.js",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/messages/message-list.js",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/messages/message-list.js",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                            children: messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].row,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].td,
                                            children: m.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/messages/message-list.js",
                                            lineNumber: 31,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].td,
                                            children: m.email
                                        }, void 0, false, {
                                            fileName: "[project]/components/messages/message-list.js",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].td} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].messageCell}`,
                                            children: m.message
                                        }, void 0, false, {
                                            fileName: "[project]/components/messages/message-list.js",
                                            lineNumber: 33,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, m.id, true, {
                                    fileName: "[project]/components/messages/message-list.js",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/messages/message-list.js",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/messages/message-list.js",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/messages/message-list.js",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/messages/message-list.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MessageList;
}),
"[externals]/mongodb [external] (mongodb, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}}),
"[project]/lib/db-utils.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "connectToDatabase": ()=>connectToDatabase,
    "getLatestMessages": ()=>getLatestMessages,
    "getMessageStats": ()=>getMessageStats
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
async function connectToDatabase() {
    const connectionString = `mongodb+srv://${("TURBOPACK compile-time value", "mesayezekiel")}:${("TURBOPACK compile-time value", "mesayezekiel")}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"].connect(connectionString);
    return client;
}
async function getLatestMessages(limit = 10) {
    let client;
    try {
        client = await connectToDatabase();
        const db = client.db();
        const docs = await db.collection('messages').find().sort({
            _id: -1
        }).limit(limit).toArray();
        return docs.map((d)=>({
                id: d._id.toString(),
                name: d.name,
                email: d.email,
                message: d.message
            }));
    } catch  {
        throw new Error('Could not load messages.');
    } finally{
        if (client) {
            client.close();
        }
    }
}
async function getMessageStats(months = 4) {
    let client;
    try {
        client = await connectToDatabase();
        const db = client.db();
        const collection = db.collection('messages');
        const start = new Date();
        start.setMonth(start.getMonth() - months);
        const stats = await collection.aggregate([
            {
                $match: {
                    $expr: {
                        $gt: [
                            {
                                $toDate: '$_id'
                            },
                            start
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: {
                                $toDate: '$_id'
                            }
                        }
                    },
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ]).toArray();
        // Fill missing dates
        const result = [];
        const map = new Map(stats.map((s)=>[
                s._id,
                s.count
            ]));
        const cur = new Date(start);
        const today = new Date();
        while(cur <= today){
            const dateStr = cur.toISOString().split('T')[0];
            result.push({
                date: dateStr,
                count: map.get(dateStr) || 0
            });
            cur.setDate(cur.getDate() + 1);
        }
        return result;
    } catch  {
        throw new Error('Could not load stats.');
    } finally{
        if (client) client.close();
    }
}
}),
"[project]/pages/authorize.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/messages/message-list.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db-utils.js [ssr] (ecmascript)");
;
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
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/authorize.js",
                lineNumber: 20,
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
                        lineNumber: 24,
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
                        lineNumber: 25,
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
                                lineNumber: 28,
                                columnNumber: 24
                            }, this),
                            " and then refresh."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        messages: messages,
                        error: error
                    }, void 0, false, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/authorize.js",
                lineNumber: 23,
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
    let messages = [];
    let error = null;
    try {
        messages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getLatestMessages"])(10);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__edf4b593._.js.map