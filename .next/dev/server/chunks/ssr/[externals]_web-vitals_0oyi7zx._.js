module.exports = [
"[externals]/web-vitals [external] (web-vitals, cjs, [project]/portfolio/node_modules/web-vitals, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_web-vitals_0wo4nme._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/web-vitals [external] (web-vitals, cjs, [project]/portfolio/node_modules/web-vitals)");
    });
});
}),
];