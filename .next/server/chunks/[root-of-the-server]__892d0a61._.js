module.exports = {

"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/mongodb [external] (mongodb, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}}),
"[project]/pages/api/contact.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
// mongodb+srv://mesayerbeto2:<db_password>@cluster0.78neqdm.mongodb.net/
async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({
                message: 'Please provide a valid name, email, and message.'
            });
            return;
        }
        const newMessage = {
            email,
            name,
            message
        };
        let client;
        const connectionString = `mongodb+srv://${("TURBOPACK compile-time value", "mesayezekiel")}:${("TURBOPACK compile-time value", "mesayezekiel")}@cluster0.78neqdm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        try {
            client = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"].connect(connectionString);
        } catch (error) {
            res.status(500).json({
                message: 'Could not connect to database.'
            });
        }
        const db = client.db();
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({
                message: 'Storing message failed!'
            });
            return;
        }
        client.close();
        res.status(201).json({
            message: 'Successfully stored message!',
            data: newMessage
        });
    }
}
const __TURBOPACK__default__export__ = handler;
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__892d0a61._.js.map