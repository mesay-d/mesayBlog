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
"[project]/components/messages/message-stats.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "chartContainer": "message-stats-module__Du-pKG__chartContainer",
  "container": "message-stats-module__Du-pKG__container",
  "statCard": "message-stats-module__Du-pKG__statCard",
  "stats": "message-stats-module__Du-pKG__stats",
});
}),
"[project]/components/messages/message-stats.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dynamic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/messages/message-stats.module.css [ssr] (css module)");
;
;
;
;
;
// Dynamically import the Pie component to avoid SSR issues
const Pie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[externals]/react-chartjs-2 [external] (react-chartjs-2, esm_import, async loader)")(__turbopack_context__.i).then((mod)=>mod.Pie), {
    loadableGenerated: {
        modules: [
            "[externals]/react-chartjs-2 [external] (react-chartjs-2, esm_import)"
        ]
    },
    ssr: false
});
// Register Chart.js components on client only
function registerChart() {
    // Import chart.js dynamically so this only runs in the browser
    return __turbopack_context__.r("[externals]/chart.js [external] (chart.js, esm_import, async loader)")(__turbopack_context__.i).then((module)=>{
        const { Chart: ChartJS, ArcElement, Title, Tooltip, Legend } = module;
        ChartJS.register(ArcElement, Title, Tooltip, Legend);
    });
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#fff'
            }
        },
        title: {
            display: true,
            text: 'Messages by Month (Last 4 Months)',
            color: '#fff'
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const dataset = context.dataset || {};
                    const value = dataset.data ? dataset.data[context.dataIndex] : 0;
                    const total = dataset.data ? dataset.data.reduce((a, b)=>a + b, 0) : 0;
                    const pct = total ? (value / total * 100).toFixed(1) : '0.0';
                    return `${value} messages (${pct}%)`;
                }
            }
        }
    }
};
function MessageStats({ stats = [] }) {
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        registerChart().then(()=>setReady(true)).catch((err)=>{
            console.error('Chart registration failed', err);
            setReady(false);
        });
    }, []);
    // Aggregate stats by month (YYYY-MM)
    const monthlyMap = stats.reduce((map, item)=>{
        const month = item.date.slice(0, 7); // "YYYY-MM"
        map.set(month, (map.get(month) || 0) + item.count);
        return map;
    }, new Map());
    // Build last N months list (ensure we always show the last 4 months)
    const monthsToShow = 4;
    const monthsList = [];
    const now = new Date();
    for(let i = monthsToShow - 1; i >= 0; i--){
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        // YYYY-MM
        const key = d.toISOString().slice(0, 7);
        monthsList.push(key);
    }
    const labels = monthsList;
    const dataValues = labels.map((m)=>monthlyMap.get(m) || 0);
    // Friendly month labels
    const labelNames = labels.map((m)=>{
        const [y, mm] = m.split('-');
        const d = new Date(Number(y), Number(mm) - 1, 1);
        return d.toLocaleString('default', {
            month: 'short',
            year: 'numeric'
        });
    });
    const colors = [
        '#4CAF50',
        '#2196F3',
        '#FF9800',
        '#9C27B0',
        '#F44336'
    ];
    const data = {
        labels: labelNames,
        datasets: [
            {
                data: dataValues,
                backgroundColor: colors.slice(0, labelNames.length),
                hoverOffset: 6,
                // small border for contrast on dark background
                borderColor: '#111',
                borderWidth: 1
            }
        ]
    };
    const totalMessages = stats.reduce((sum, stat)=>sum + stat.count, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].stats,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: "Total Messages"
                            }, void 0, false, {
                                fileName: "[project]/components/messages/message-stats.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: totalMessages
                            }, void 0, false, {
                                fileName: "[project]/components/messages/message-stats.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/messages/message-stats.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: "Period"
                            }, void 0, false, {
                                fileName: "[project]/components/messages/message-stats.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: labelNames.length ? `${labelNames[0]} — ${labelNames[labelNames.length - 1]}` : '—'
                            }, void 0, false, {
                                fileName: "[project]/components/messages/message-stats.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/messages/message-stats.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/messages/message-stats.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].chartContainer,
                children: ready ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Pie, {
                    options: options,
                    data: data
                }, void 0, false, {
                    fileName: "[project]/components/messages/message-stats.js",
                    lineNumber: 118,
                    columnNumber: 18
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    style: {
                        color: '#999'
                    },
                    children: "Chart loading..."
                }, void 0, false, {
                    fileName: "[project]/components/messages/message-stats.js",
                    lineNumber: 118,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/messages/message-stats.js",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/messages/message-stats.js",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MessageStats;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/messages/message-stats.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db-utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
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
function AuthorizePage({ user, messages = [], error, stats = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Authorized Page"
                }, void 0, false, {
                    fileName: "[project]/pages/authorize.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/authorize.js",
                lineNumber: 22,
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
                        lineNumber: 26,
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
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "To sign out, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/api/logout",
                                children: "click here to logout"
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 30,
                                columnNumber: 24
                            }, this),
                            " and then refresh."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 20,
                            alignItems: 'flex-start',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 300
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$list$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    messages: messages,
                                    error: error
                                }, void 0, false, {
                                    fileName: "[project]/pages/authorize.js",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 420,
                                    minWidth: 280
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$messages$2f$message$2d$stats$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    stats: stats
                                }, void 0, false, {
                                    fileName: "[project]/pages/authorize.js",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/authorize.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/authorize.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/authorize.js",
                lineNumber: 25,
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
    let stats = [];
    try {
        messages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getLatestMessages"])(10);
        // fetch per-day stats for last 4 months
        stats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getMessageStats"])(4);
    } catch  {
        error = 'Could not load messages.';
    }
    return {
        props: {
            user: 'Authorized User',
            messages,
            error,
            // pass stats
            stats
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

//# sourceMappingURL=%5Broot-of-the-server%5D__b3834c61._.js.map