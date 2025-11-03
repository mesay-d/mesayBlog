module.exports = {

"[project]/components/contact/contact-form.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "contact-form-module__LnVKca__actions",
  "contact": "contact-form-module__LnVKca__contact",
  "control": "contact-form-module__LnVKca__control",
  "controls": "contact-form-module__LnVKca__controls",
  "error": "contact-form-module__LnVKca__error",
  "form": "contact-form-module__LnVKca__form",
});
}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/components/ui/notification.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "notification-module__BhoRMG__error",
  "notification": "notification-module__BhoRMG__notification",
  "success": "notification-module__BhoRMG__success",
});
}),
"[project]/components/ui/notification.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom [external] (react-dom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$notification$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/notification.module.css [ssr] (css module)");
;
;
;
function Notification(props) {
    const { title, message, status } = props;
    let statusClasses = '';
    if (status === 'success') {
        statusClasses = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$notification$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].success;
    }
    if (status === 'error') {
        statusClasses = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$notification$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error;
    }
    const cssClasses = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$notification$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].notification} ${statusClasses}`;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom__$5b$external$5d$__$28$react$2d$dom$2c$__cjs$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: cssClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/notification.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/components/ui/notification.js",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/notification.js",
        lineNumber: 21,
        columnNumber: 5
    }, this), document.getElementById('notifications'));
}
const __TURBOPACK__default__export__ = Notification;
}),
"[project]/components/contact/contact-form.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/contact/contact-form.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$notification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/notification.js [ssr] (ecmascript)");
;
;
;
;
async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }
}
function ContactForm() {
    const [enteredEmail, setEnteredEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [enteredName, setEnteredName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [enteredMessage, setEnteredMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [requestStatus, setRequestStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(); // 'pending', 'success', 'error'
    const [requestError, setRequestError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(()=>{
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        requestStatus
    ]);
    async function sendMessageHandler(event) {
        event.preventDefault();
        // client-side validation
        const newErrors = {};
        if (!enteredEmail || !/^\S+@\S+\.\S+$/.test(enteredEmail)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!enteredName || enteredName.trim().length < 2) {
            newErrors.name = 'Please enter your name (2+ characters).';
        }
        if (!enteredMessage || enteredMessage.trim().length < 10) {
            newErrors.message = 'Please enter a message (10+ characters).';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setRequestStatus('error');
            setRequestError('Please fix the highlighted errors.');
            return;
        }
        setErrors({});
        setRequestStatus('pending');
        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            });
            setRequestStatus('success');
            setEnteredMessage('');
            setEnteredEmail('');
            setEnteredName('');
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
        }
    }
    let notification;
    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        };
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        };
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].contact,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "How can I help you?"
            }, void 0, false, {
                fileName: "[project]/components/contact/contact-form.js",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].form,
                onSubmit: sendMessageHandler,
                "aria-busy": requestStatus === 'pending',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].control,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        children: "Your Email"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/contact-form.js",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        id: "email",
                                        required: true,
                                        value: enteredEmail,
                                        onChange: (event)=>{
                                            setEnteredEmail(event.target.value);
                                            setErrors((s)=>({
                                                    ...s,
                                                    email: undefined
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/contact-form.js",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
                                        children: errors.email
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/contact-form.js",
                                        lineNumber: 130,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact/contact-form.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].control,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        htmlFor: "name",
                                        children: "Your Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/contact-form.js",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "name",
                                        required: true,
                                        value: enteredName,
                                        onChange: (event)=>{
                                            setEnteredName(event.target.value);
                                            setErrors((s)=>({
                                                    ...s,
                                                    name: undefined
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/contact-form.js",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact/contact-form.js",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/contact/contact-form.js",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/contact-form.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].control,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                htmlFor: "message",
                                children: "Your Message"
                            }, void 0, false, {
                                fileName: "[project]/components/contact/contact-form.js",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                id: "message",
                                rows: "5",
                                required: true,
                                value: enteredMessage,
                                onChange: (event)=>{
                                    setEnteredMessage(event.target.value);
                                    setErrors((s)=>({
                                            ...s,
                                            message: undefined
                                        }));
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/contact/contact-form.js",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
                                children: errors.message
                            }, void 0, false, {
                                fileName: "[project]/components/contact/contact-form.js",
                                lineNumber: 161,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact/contact-form.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].actions,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            disabled: requestStatus === 'pending',
                            children: "Send Message"
                        }, void 0, false, {
                            fileName: "[project]/components/contact/contact-form.js",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/contact/contact-form.js",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact/contact-form.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$notification$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                status: notification.status,
                title: notification.title,
                message: notification.message
            }, void 0, false, {
                fileName: "[project]/components/contact/contact-form.js",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact/contact-form.js",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ContactForm;
}),
"[project]/pages/contact.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/contact/contact-form.js [ssr] (ecmascript)");
;
;
;
;
function ContactPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Contact Me"
                    }, void 0, false, {
                        fileName: "[project]/pages/contact.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Send me your messages!"
                    }, void 0, false, {
                        fileName: "[project]/pages/contact.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/contact.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$contact$2f$contact$2d$form$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/contact.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/contact.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ContactPage;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a1a58f52._.js.map