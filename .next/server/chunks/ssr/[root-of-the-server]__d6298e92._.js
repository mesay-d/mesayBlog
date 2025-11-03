module.exports = {

"[project]/pages/about/about.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "about": "about-module__JRQUFq__about",
  "intro": "about-module__JRQUFq__intro",
  "profileImage": "about-module__JRQUFq__profileImage",
  "section": "about-module__JRQUFq__section",
});
}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/components/about/company-profile.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnContinue": "company-profile-module__gbVcRa__btnContinue",
  "company": "company-profile-module__gbVcRa__company",
  "float": "company-profile-module__gbVcRa__float",
  "logoItem": "company-profile-module__gbVcRa__logoItem",
  "logos": "company-profile-module__gbVcRa__logos",
  "notice": "company-profile-module__gbVcRa__notice",
  "quickForm": "company-profile-module__gbVcRa__quickForm",
  "scroll": "company-profile-module__gbVcRa__scroll",
  "tagline": "company-profile-module__gbVcRa__tagline",
  "track": "company-profile-module__gbVcRa__track",
});
}),
"[project]/components/about/company-profile.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CompanyProfile
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/about/company-profile.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
;
function CompanyProfile() {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const logos = [
        '/images/site/mesayp.png',
        '/images/site/mesayp.png',
        '/images/site/mesayp.png',
        '/images/site/mesayp.png'
    ];
    async function submitQuickMessage(e) {
        e.preventDefault();
        if (!text || text.trim().length < 3) {
            setStatus({
                ok: false,
                msg: 'Please enter a short message.'
            });
            return;
        }
        try {
            setStatus({
                ok: null,
                msg: 'Sending...'
            });
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: '',
                    name: 'Website Visitor',
                    message: text
                })
            });
            if (res.ok) {
                setStatus({
                    ok: true,
                    msg: 'Message sent — thank you!'
                });
                setText('');
            } else {
                const data = await res.json().catch(()=>({}));
                setStatus({
                    ok: false,
                    msg: data.message || 'Failed to send. Try again later.'
                });
            }
        } catch  {
            setStatus({
                ok: false,
                msg: 'Network error. Try again later.'
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].company,
        "aria-labelledby": "company-profile",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].logos,
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].track,
                    children: logos.concat(logos).map((src, idx)=>{
                        const delay = `${idx % logos.length * 0.9}s`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].logoItem,
                            style: {
                                animationDelay: delay
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: "partner logo",
                                width: 68,
                                height: 68
                            }, void 0, false, {
                                fileName: "[project]/components/about/company-profile.js",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/components/about/company-profile.js",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/about/company-profile.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/about/company-profile.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tagline,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        id: "company-profile",
                        children: "Company & Profile"
                    }, void 0, false, {
                        fileName: "[project]/components/about/company-profile.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Selected partners, collaborations, and a quick line to contact me directly from this page."
                    }, void 0, false, {
                        fileName: "[project]/components/about/company-profile.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].quickForm,
                        onSubmit: submitQuickMessage,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                "aria-label": "Your message",
                                placeholder: "Write a short message...",
                                value: text,
                                onChange: (e)=>setText(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/about/company-profile.js",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/components/about/company-profile.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/about/company-profile.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].notice,
                        role: status.ok ? 'status' : 'alert',
                        children: status.msg
                    }, void 0, false, {
                        fileName: "[project]/components/about/company-profile.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/about/company-profile.js",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/about/company-profile.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/about/index.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/pages/about/about.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/about/company-profile.js [ssr] (ecmascript)");
;
;
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].about,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "About Me"
            }, void 0, false, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].intro,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/site/mesayp.png",
                        alt: "Mesay Erbeto",
                        width: 190,
                        height: 200,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileImage
                    }, void 0, false, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Hi, I’m ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Mesay Erbeto"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 20,
                                columnNumber: 19
                            }, this),
                            ", a Full-Stack Developer based in Dallas, Texas, with 5+ years of experience building scalable web applications using",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: " Angular, React.js, React Native, Node.js"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            ", and cloud platforms like ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "AWS"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 22,
                                columnNumber: 96
                            }, this),
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Azure"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 22,
                                columnNumber: 121
                            }, this),
                            ". I also work extensively with databases such as ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "MongoDB, SQL Server, MySQL"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 23,
                                columnNumber: 58
                            }, this),
                            " and handle large datasets (Big Data). For state management and data fetching, I use ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Redux"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 24,
                                columnNumber: 57
                            }, this),
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "React Query"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 24,
                                columnNumber: 84
                            }, this),
                            ", along with modern tools and libraries including ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "TypeScript, RxJS, Express, REST & GraphQL APIs"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 24,
                                columnNumber: 162
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$about$2f$company$2d$profile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 28,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "My Journey"
                    }, void 0, false, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "I completed my Master’s in Software Development from Maharishi International University. Since then, I’ve contributed to modern web applications at ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Home Depot (USA)"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 34,
                                columnNumber: 70
                            }, this),
                            " and",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: " Simbo Software"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            ", gaining expertise in full-stack development, mobile apps, databases, and cloud solutions."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Expertise & Technologies"
                    }, void 0, false, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Frontend: Angular, React.js, React Native, TypeScript, RxJS, HTML5, CSS3, TailwindCSS"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "State Management & Data: Redux, React Query"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Backend: Node.js, Express, REST & GraphQL APIs"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Databases: MongoDB, SQL Server, MySQL, Big Data"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Cloud & DevOps: AWS, Azure, Docker, CI/CD Pipelines"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Testing & Tools: Jest, Cypress, Git, Agile Practices, Jira"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Projects & Achievements"
                    }, void 0, false, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Developed scalable e-commerce platforms for Home Depot using Angular and Node.js."
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Built mobile apps and enterprise-grade cloud applications using React Native, AWS, and Azure."
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: "Worked on database-driven projects using MongoDB, SQL Server, and MySQL, including Big Data handling."
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: [
                                    "Open-source contributions: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/mesay-d/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/about/index.js",
                                        lineNumber: 57,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Approach & Philosophy"
                    }, void 0, false, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "I focus on writing ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "clean, maintainable code"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 64,
                                columnNumber: 30
                            }, this),
                            " and building applications that",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: " scale efficiently"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            ". I enjoy solving complex problems, mentoring teams, and delivering high-quality software."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$about$2f$about$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Connect With Me"
                    }, void 0, false, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Explore my ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/posts",
                                children: "posts"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 72,
                                columnNumber: 22
                            }, this),
                            ", connect on ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/mesayerbeto",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 72,
                                columnNumber: 67
                            }, this),
                            ", or send me an ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "mailto:mesayerbeto2@gmail.com",
                                children: "email"
                            }, void 0, false, {
                                fileName: "[project]/pages/about/index.js",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this),
                            " to discuss opportunities."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/about/index.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/about/index.js",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/about/index.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = About;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d6298e92._.js.map