module.exports = {

"[externals]/react-chartjs-2 [external] (react-chartjs-2, esm_import, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_react-chartjs-2_2d952891._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/react-chartjs-2 [external] (react-chartjs-2, esm_import)");
    });
});
}),
"[externals]/chart.js [external] (chart.js, esm_import, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_chart_7083d664.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/chart.js [external] (chart.js, esm_import)");
    });
});
}),

};