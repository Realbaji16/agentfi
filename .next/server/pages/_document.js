const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_ab6a4d._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__03c53a._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
