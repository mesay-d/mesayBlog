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
"[project]/pages/api/login.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Simple demo login that sets an HTTP-only cookie when the provided token
// matches the `AUTH_TOKEN` env var. This is intentionally minimal and
// not production-grade authentication.
__turbopack_context__.s({
    "default": ()=>handler
});
function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({
            message: 'Method not allowed'
        });
        return;
    }
    const { username, password } = req.body || {};
    const expectedUser = process.env.AUTH_USERNAME;
    const expectedPass = process.env.AUTH_PASSWORD;
    const authToken = process.env.AUTH_TOKEN || 'local-demo-token';
    if (!expectedUser || !expectedPass) {
        res.status(500).json({
            message: 'Server is not configured with AUTH_USERNAME/AUTH_PASSWORD'
        });
        return;
    }
    if (!username || !password || username !== expectedUser || password !== expectedPass) {
        res.status(401).json({
            message: 'Invalid credentials'
        });
        return;
    }
    // Set an HTTP-only cookie with the token (or fallback value) for demo purposes. Max-Age is 1 hour.
    // Do NOT set `Secure` here so local dev over HTTP works; in production add `Secure` and tighten SameSite.
    const cookie = `auth=${authToken}; HttpOnly; Path=/; Max-Age=${60 * 60}; SameSite=Lax`;
    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({
        message: 'Logged in'
    });
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c6595c8b._.js.map