(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a4a3d5._.js", {

"[project]/app/(app)/chat/_hooks/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_hooks/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$enter$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_hooks/use-enter-submit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$scroll$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_hooks/use-scroll-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_hooks/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/_components/chat/model-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/select.tsx [app-client] (ecmascript)");
;
;
;
;
const modelLogos = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Models"].OpenAI]: "/logos/openai.png",
    [__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Models"].Anthropic]: "/logos/anthropic.png",
    [__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Models"].XAI]: "/logos/xai.png",
    [__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Models"].Gemini]: "/logos/google.png",
    [__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Models"].Deepseek]: "/logos/deepseek.png"
};
const ModelSelector = ({ model, onModelChange, disabled })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        value: model,
        onValueChange: (value)=>onModelChange(value),
        disabled: disabled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: "w-fit h-8 text-xs border-0 bg-transparent hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 shadow-none gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Select a model"
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Models"]).map((modelValue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: modelValue,
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: modelLogos[modelValue],
                                    alt: modelValue,
                                    width: 16,
                                    height: 16,
                                    className: "rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
                                    lineNumber: 49,
                                    columnNumber: 29
                                }, this),
                                modelValue.charAt(0).toUpperCase() + modelValue.slice(1)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, this)
                    }, modelValue, false, {
                        fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/_components/chat/model-selector.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
};
_c = ModelSelector;
const __TURBOPACK__default__export__ = ModelSelector;
var _c;
__turbopack_refresh__.register(_c, "ModelSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/follow-up-suggestions/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const generateFollowUpSuggestions = async (messages, model)=>{
    try {
        const response = await fetch('/api/follow-up-suggestions', {
            method: 'POST',
            body: JSON.stringify({
                messages,
                modelName: model,
                timestamp: Date.now()
            }),
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        return await response.json();
    } catch (error) {
        console.error("Error generating suggestions:", error);
        return [];
    }
};
const FollowUpSuggestions = ()=>{
    _s();
    const { model, sendMessage, isResponseLoading, messages, chatId, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const requestTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowUpSuggestions.useEffect": ()=>{
            const generateSuggestions = {
                "FollowUpSuggestions.useEffect.generateSuggestions": async ()=>{
                    if (isResponseLoading || isLoading || !messages.length) return;
                    if (requestTimeoutRef.current) {
                        clearTimeout(requestTimeoutRef.current);
                    }
                    setIsGenerating(true);
                    try {
                        const newSuggestions = await generateFollowUpSuggestions(messages, model);
                        if (newSuggestions?.length > 0) {
                            setSuggestions(newSuggestions);
                        }
                    } catch (error) {
                        console.error('Error generating suggestions:', error);
                    } finally{
                        setIsGenerating(false);
                    }
                }
            }["FollowUpSuggestions.useEffect.generateSuggestions"];
            generateSuggestions();
            return ({
                "FollowUpSuggestions.useEffect": ()=>{
                    if (requestTimeoutRef.current) {
                        clearTimeout(requestTimeoutRef.current);
                    }
                }
            })["FollowUpSuggestions.useEffect"];
        }
    }["FollowUpSuggestions.useEffect"], [
        messages,
        chatId,
        model,
        isResponseLoading,
        isLoading
    ]);
    if (isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 gap-2 mt-4",
        children: isGenerating ? Array.from({
            length: 3
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "w-full h-[22px]"
            }, index, false, {
                fileName: "[project]/app/(app)/chat/_components/follow-up-suggestions/index.tsx",
                lineNumber: 81,
                columnNumber: 25
            }, this)) : suggestions.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "w-full text-xs h-fit py-0.5",
                onClick: ()=>{
                    sendMessage(suggestion.prompt);
                    setSuggestions([]);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "Plus",
                        className: "w-3 h-3"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/follow-up-suggestions/index.tsx",
                        lineNumber: 97,
                        columnNumber: 29
                    }, this),
                    suggestion.title
                ]
            }, `${chatId}-${suggestion.title}`, true, {
                fileName: "[project]/app/(app)/chat/_components/follow-up-suggestions/index.tsx",
                lineNumber: 88,
                columnNumber: 25
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/follow-up-suggestions/index.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
};
_s(FollowUpSuggestions, "JEM7vOBCthGgh46iF/F3q//OALE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = FollowUpSuggestions;
const __TURBOPACK__default__export__ = FollowUpSuggestions;
var _c;
__turbopack_refresh__.register(_c, "FollowUpSuggestions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_hooks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$model$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/model-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$follow$2d$up$2d$suggestions$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/follow-up-suggestions/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@privy-io/react-auth/dist/esm/hooks/usePrivy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$enter$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_hooks/use-enter-submit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$textarea$2d$autosize$2f$dist$2f$react$2d$textarea$2d$autosize$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-right.js [app-client] (ecmascript) <export default as CornerDownRight>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const ChatInput = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"])();
    const { input, setInput, onSubmit, isLoading, model, setModel, inputDisabledMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { onKeyDown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$enter$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnterSubmit"])({
        onSubmit: onSubmit
    });
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (!isLoading && inputRef.current) {
                inputRef.current.focus();
            }
        }
    }["ChatInput.useEffect"], [
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$follow$2d$up$2d$suggestions$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/input.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    onSubmit();
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base styles
                "w-full rounded-md flex flex-col overflow-hidden transition-colors duration-200 ease-in-out border border-transparent shadow-none", // Light mode styles
                "bg-neutral-100 focus-within:border-brand-600", // Dark mode styles
                "dark:bg-neutral-800/50 dark:focus-within:border-brand-600", isLoading && "opacity-50 cursor-not-allowed"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionalTooltip, {
                        text: inputDisabledMessage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$textarea$2d$autosize$2f$dist$2f$react$2d$textarea$2d$autosize$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ref: inputRef,
                            tabIndex: 0,
                            onKeyDown: onKeyDown,
                            placeholder: "Ask the hive anything...",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-h-60 resize-none bg-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 dark:placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:outline-none", "dark:placeholder:text-neutral-400"),
                            value: input,
                            onChange: (e)=>{
                                setInput(e.target.value);
                            },
                            disabled: isLoading || !user || inputDisabledMessage !== '',
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/input.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/input.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$model$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                model: model,
                                onModelChange: setModel,
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    delayDuration: 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                size: "icon",
                                                disabled: input.trim() === '' || isLoading || !user,
                                                variant: "ghost",
                                                className: "h-8 w-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownRight$3e$__["CornerDownRight"], {
                                                        className: "w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: "Send message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                            children: "Send message"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/input.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/input.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/input.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/input.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
};
_s(ChatInput, "j4C3fd/X9Py5uaHfRunnfFqCiQE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$enter$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnterSubmit"]
    ];
});
_c = ChatInput;
const OptionalTooltip = ({ children, text })=>{
    if (text === '') return children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            delayDuration: 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/input.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    side: "top",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/input.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/input.tsx",
            lineNumber: 109,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/input.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
};
_c1 = OptionalTooltip;
const __TURBOPACK__default__export__ = ChatInput;
var _c, _c1;
__turbopack_refresh__.register(_c, "ChatInput");
__turbopack_refresh__.register(_c1, "OptionalTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const StarterButton = ({ icon, title, description, prompt, className })=>{
    _s();
    const { sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 h-fit justify-start', className),
        variant: "outline",
        onClick: ()=>sendMessage(prompt),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: icon,
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-md font-bold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-neutral-600 dark:text-neutral-400 hidden md:block",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_s(StarterButton, "zjhnOAmLxeJplNUGJZvSAPy4zw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = StarterButton;
const __TURBOPACK__default__export__ = StarterButton;
var _c;
__turbopack_refresh__.register(_c, "StarterButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/starter-buttons/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$starter$2d$buttons$2f$starter$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/starter-buttons/starter-button.tsx [app-client] (ecmascript)");
;
;
const starterButtons = [
    {
        title: "Trending",
        description: "Search the trending tokens",
        icon: "Coins",
        prompt: "Show me the trending tokens"
    },
    {
        title: "Stake",
        description: "Stake Sol",
        icon: "Coins",
        prompt: "Find me the best staking yields"
    },
    {
        title: "Trade",
        description: "Swap on Jupiter",
        icon: "ChartCandlestick",
        prompt: "Let's trade some tokens"
    },
    {
        title: "Knowledge",
        description: "Get developer docs for protocols",
        icon: "Brain",
        prompt: "Get me developer docs for Orca"
    }
];
const StarterButtons = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-2",
        children: starterButtons.map((button)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$starter$2d$buttons$2f$starter$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...button
            }, button.title, false, {
                fileName: "[project]/app/(app)/chat/_components/starter-buttons/index.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/starter-buttons/index.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
};
_c = StarterButtons;
const __TURBOPACK__default__export__ = StarterButtons;
var _c;
__turbopack_refresh__.register(_c, "StarterButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/empty.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$starter$2d$buttons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/starter-buttons/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/logo.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const EmptyChat = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base
        "flex flex-col items-center justify-center w-full h-full px-4"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center w-full max-w-2xl gap-4 md:gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-20 h-20"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-semibold text-center text-2xl",
                                    children: [
                                        "How can ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-600 font-bold inline",
                                            children: "We"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                                            lineNumber: 23,
                                            columnNumber: 37
                                        }, this),
                                        " help you?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-sm text-neutral-600 dark:text-neutral-400",
                                    children: "Orchestrate a hive mind of DeFi Agents to act on Solana"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$starter$2d$buttons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/empty.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/empty.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/empty.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
};
_c = EmptyChat;
const __TURBOPACK__default__export__ = EmptyChat;
var _c;
__turbopack_refresh__.register(_c, "EmptyChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/chat/loading-message.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$animated$2d$shiny$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/animated-shiny-text.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const LoadingMessage = ({ compressed })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// base styles
        "flex w-full px-2 py-4 max-w-full last:border-b-0", // mobile styles
        "gap-2", // desktop styles
        "md:gap-4 md:px-4", compressed && "md:gap-2 md:px-2 px-0"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 md:w-10 md:h-10")
            }, void 0, false, {
                fileName: "[project]/app/(app)/_components/chat/loading-message.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:pt-2 w-full max-w-full md:flex-1 md:w-0 overflow-hidden flex flex-col gap-2 items-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$animated$2d$shiny$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedShinyText"], {
                    className: "text-sm font-semibold text-left mx-0 w-fit",
                    shimmerWidth: 70,
                    children: "Thinking..."
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/chat/loading-message.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/_components/chat/loading-message.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/_components/chat/loading-message.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = LoadingMessage;
const __TURBOPACK__default__export__ = LoadingMessage;
var _c;
__turbopack_refresh__.register(_c, "LoadingMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/chat/link.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$knowledge$2f$use$2d$knowledge$2d$by$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/knowledge/use-knowledge-by-url.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const Link = ({ url, children })=>{
    _s();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$knowledge$2f$use$2d$knowledge$2d$by$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKnowledgeByUrl"])(url);
    if (isLoading) return children;
    if (data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-brand-600/70 rounded-md px-2 py-1 w-fit inline-flex items-center gap-2 hover:bg-brand-600/90 transition-colors text-sm",
            children: [
                data.favicon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: data.favicon,
                    alt: data.name,
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/chat/link.tsx",
                    lineNumber: 22,
                    columnNumber: 37
                }, this),
                data.name
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/_components/chat/link.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/_components/chat/link.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-brand-600 hover:underline",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(app)/_components/chat/link.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
};
_s(Link, "pnTTK8h9F/Be4cP+BXkieaY0eaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$knowledge$2f$use$2d$knowledge$2d$by$2d$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKnowledgeByUrl"]
    ];
});
_c = Link;
const __TURBOPACK__default__export__ = Link;
var _c;
__turbopack_refresh__.register(_c, "Link");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/wallet/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WALLET_AGENT_NAME": (()=>WALLET_AGENT_NAME)
});
const WALLET_AGENT_NAME = "Wallet Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/staking/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "STAKING_AGENT_NAME": (()=>STAKING_AGENT_NAME)
});
const STAKING_AGENT_NAME = "Staking Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/market/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MARKET_AGENT_NAME": (()=>MARKET_AGENT_NAME)
});
const MARKET_AGENT_NAME = "Market Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/knowledge/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "KNOWLEDGE_AGENT_NAME": (()=>KNOWLEDGE_AGENT_NAME)
});
const KNOWLEDGE_AGENT_NAME = "Knowledge Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/token-analysis/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TOKEN_ANALYSIS_AGENT_NAME": (()=>TOKEN_ANALYSIS_AGENT_NAME)
});
const TOKEN_ANALYSIS_AGENT_NAME = "Token Analysis Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/trading/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TRADING_AGENT_NAME": (()=>TRADING_AGENT_NAME)
});
const TRADING_AGENT_NAME = "Trading Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/social/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SOCIAL_AGENT_NAME": (()=>SOCIAL_AGENT_NAME)
});
const SOCIAL_AGENT_NAME = "Social Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/liquidity/name.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LIQUIDITY_AGENT_NAME": (()=>LIQUIDITY_AGENT_NAME)
});
const LIQUIDITY_AGENT_NAME = "Liquidity Agent";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/names.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/ai/agents/names.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$wallet$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/wallet/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$staking$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/staking/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$market$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/market/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$knowledge$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/knowledge/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$token$2d$analysis$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/token-analysis/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$trading$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/trading/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$social$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/social/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$liquidity$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/liquidity/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/ai/agents/names.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/tool-to-agent.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAgentIcon": (()=>getAgentIcon),
    "getAgentName": (()=>getAgentName),
    "toolToAgent": (()=>toolToAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/ai/agents/names.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$staking$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/staking/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$wallet$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/wallet/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$market$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/market/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$knowledge$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/knowledge/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$trading$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/trading/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$social$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/social/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$token$2d$analysis$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/token-analysis/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$liquidity$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/agents/liquidity/name.ts [app-client] (ecmascript)");
;
const toolToAgent = {
    "staking": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$staking$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKING_AGENT_NAME"],
    "wallet": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$wallet$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_AGENT_NAME"],
    "market": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$market$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_AGENT_NAME"],
    "knowledge": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$knowledge$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWLEDGE_AGENT_NAME"],
    "trading": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$trading$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADING_AGENT_NAME"],
    "social": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$social$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_AGENT_NAME"],
    "tokenanalysis": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$token$2d$analysis$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_ANALYSIS_AGENT_NAME"],
    "liquidity": __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$liquidity$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIQUIDITY_AGENT_NAME"]
};
const getAgentName = (tool)=>{
    const toolParts = tool.toolName.split("-");
    const agentName = toolParts[0];
    return toolToAgent[agentName] || "Unknown Agent";
};
const getAgentIcon = (agentName)=>{
    switch(agentName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$staking$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAKING_AGENT_NAME"]:
            return "Beef";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$wallet$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WALLET_AGENT_NAME"]:
            return "Wallet";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$market$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_AGENT_NAME"]:
            return "ChartLine";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$knowledge$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KNOWLEDGE_AGENT_NAME"]:
            return "Brain";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$trading$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRADING_AGENT_NAME"]:
            return "ChartCandlestick";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$social$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_AGENT_NAME"]:
            return "Twitter";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$token$2d$analysis$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN_ANALYSIS_AGENT_NAME"]:
            return "Coins";
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$agents$2f$liquidity$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIQUIDITY_AGENT_NAME"]:
            return "Droplet";
        default:
            return "Brain";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/pfp.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "pfpURL": (()=>pfpURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const pfpURL = (user, cacheBust = true)=>{
    return `${"TURBOPACK compile-time value", "your_azure_storage_account_url_here"}/images/${user.id}?sv=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AZURE_STORAGE_SAS_STRING}${cacheBust ? `&t=${Date.now()}` : ""}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/chat/message.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$to$2d$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-to-agent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pfp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/pfp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@privy-io/react-auth/dist/esm/hooks/usePrivy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/markdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const Message = ({ message, ToolComponent, className, previousMessage, nextMessage, compressed })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"])();
    const isUser = message.role === 'user';
    const nextMessageSameRole = nextMessage?.role === message.role;
    const previousMessageSameRole = previousMessage?.role === message.role;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// base styles
        "flex w-full px-2 py-4 max-w-full last:border-b-0 h-fit", // mobile styles
        "flex-col gap-2", // desktop styles
        "md:flex-row md:gap-4 md:px-4", compressed && "md:px-2 md:flex-col gap-0 md:gap-1", nextMessageSameRole && "pb-0", previousMessageSameRole && "pt-0", previousMessageSameRole && compressed && "border-b border-gray-200 dark:border-neutral-700 pt-2", !nextMessageSameRole && "border-b border-gray-200 dark:border-neutral-700", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center md:items-start gap-2 md:gap-4", previousMessageSameRole && "hidden md:block", compressed && "md:gap-2 md:flex md:items-center", previousMessageSameRole && compressed && "hidden md:hidden"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden md:flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full", compressed && "md:flex md:h-6 md:w-6", isUser && "bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700", previousMessageSameRole && "opacity-0"),
                        children: isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10", compressed && "w-6 h-6"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "User",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 md:w-6 md:h-6", compressed && "md:w-4 md:h-4")
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                                        lineNumber: 68,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/_components/chat/message.tsx",
                                    lineNumber: 67,
                                    columnNumber: 33
                                }, this),
                                user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pfp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pfpURL"])(user, false)
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/_components/chat/message.tsx",
                                    lineNumber: 72,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/_components/chat/message.tsx",
                            lineNumber: 66,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 w-10", compressed && "h-6 w-6")
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/_components/chat/message.tsx",
                            lineNumber: 78,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold md:hidden", compressed && "hidden md:block", previousMessageSameRole && "hidden md:hidden", isUser ? "text-neutral-900 dark:text-neutral-100" : "text-brand-600 dark:text-brand-600"),
                        children: message.role === 'user' ? 'You' : 'The Hive'
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/_components/chat/message.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-2 w-full max-w-full md:flex-1 md:w-0 overflow-hidden flex flex-col gap-2", compressed && "gap-0 md:w-full pt-0"),
                children: [
                    message.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageMarkdown, {
                        content: message.content,
                        compressed: compressed
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 94,
                        columnNumber: 25
                    }, this),
                    message.toolInvocations && message.toolInvocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: message.toolInvocations.map((tool, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolComponent, {
                                tool: tool,
                                prevToolAgent: index === 0 ? previousMessage?.toolInvocations?.[0] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$to$2d$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgentName"])(previousMessage?.toolInvocations?.[0]) : undefined : message.toolInvocations[index - 1] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$to$2d$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgentName"])(message.toolInvocations[index - 1]) : undefined
                            }, tool.toolCallId, false, {
                                fileName: "[project]/app/(app)/_components/chat/message.tsx",
                                lineNumber: 101,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 99,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/_components/chat/message.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/_components/chat/message.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
};
_s(Message, "bGGwkwTq+BhA8mIQLmkBDsKFTbQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"]
    ];
});
_c = Message;
const MessageMarkdown = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(({ content, compressed })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Markdown"], {
        components: {
            a: ({ href, children })=>{
                if (!href) return children;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    url: href,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/chat/message.tsx",
                    lineNumber: 131,
                    columnNumber: 28
                }, void 0);
            },
            ...compressed ? {
                h1 ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg md:text-xl font-bold"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 135,
                        columnNumber: 32
                    }, void 0);
                },
                h2 ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-md md:text-lg font-bold"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 138,
                        columnNumber: 32
                    }, void 0);
                },
                h3 ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm md:text-md font-bold"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 141,
                        columnNumber: 32
                    }, void 0);
                },
                h4 ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm md:text-sm font-bold"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 144,
                        columnNumber: 32
                    }, void 0);
                },
                h5 ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs md:text-xs font-bold"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 147,
                        columnNumber: 32
                    }, void 0);
                },
                h6 ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 150,
                        columnNumber: 32
                    }, void 0);
                },
                li ({ children }) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-xs md:text-sm",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 153,
                        columnNumber: 32
                    }, void 0);
                },
                p ({ children, node }) {
                    const hasBlockElements = node?.children?.some((child)=>child.type === 'element' && [
                            'div',
                            'p',
                            'blockquote',
                            'form'
                        ].includes(child.tagName));
                    if (hasBlockElements) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs md:text-sm",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/_components/chat/message.tsx",
                            lineNumber: 163,
                            columnNumber: 33
                        }, void 0);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs md:text-sm",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/chat/message.tsx",
                        lineNumber: 169,
                        columnNumber: 32
                    }, void 0);
                }
            } : {}
        },
        children: content
    }, void 0, false, {
        fileName: "[project]/app/(app)/_components/chat/message.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
});
_c1 = MessageMarkdown;
MessageMarkdown.displayName = 'MessageMarkdown';
const __TURBOPACK__default__export__ = Message;
var _c, _c1;
__turbopack_refresh__.register(_c, "Message");
__turbopack_refresh__.register(_c1, "MessageMarkdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/chat/index.tsx [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/chat/index.tsx [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$model$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/model-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$loading$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/loading-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/_components/chat/index.tsx [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$to$2d$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-to-agent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/collapsible.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$animated$2d$shiny$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/animated-shiny-text.tsx [app-client] (ecmascript)");
;
;
;
;
;
const ToolCard = ({ tool, loadingText, result, call, defaultOpen = true, className, prevToolAgent })=>{
    const agentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$to$2d$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgentName"])(tool);
    const agentIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$to$2d$agent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgentIcon"])(agentName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 w-fit", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", prevToolAgent === agentName && "hidden"),
                children: [
                    tool.state === "result" ? tool.result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: agentIcon,
                        className: "w-4 h-4 text-brand-600 dark:text-brand-600"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                        lineNumber: 52,
                        columnNumber: 31
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "X",
                        className: "w-4 h-4 text-red-500 dark:text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                        lineNumber: 53,
                        columnNumber: 31
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        name: agentIcon,
                        className: "w-4 h-4 text-neutral-500 dark:text-neutral-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                        lineNumber: 54,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-lg font-bold",
                        children: agentName
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: tool.state === "partial-call" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$animated$2d$shiny$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedShinyText"], {
                    className: "text-sm",
                    children: loadingText
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                    lineNumber: 61,
                    columnNumber: 25
                }, this) : tool.state === "call" ? call?.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-600 dark:text-neutral-400 font-medium",
                            children: call.heading
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                            lineNumber: 71,
                            columnNumber: 41
                        }, this),
                        call.body(tool.toolCallId, tool.args)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                    lineNumber: 70,
                    columnNumber: 37
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$animated$2d$shiny$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedShinyText"], {
                    className: "text-sm",
                    children: loadingText
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                    lineNumber: 76,
                    columnNumber: 37
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
                    defaultOpen: defaultOpen,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                            className: "flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:underline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: result.heading(tool.result)
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                                    lineNumber: 87,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                                    lineNumber: 88,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                            lineNumber: 84,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                            className: "text-sm pt-2",
                            children: result.body(tool.result)
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                            lineNumber: 90,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                    lineNumber: 83,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/tool-card.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
};
_c = ToolCard;
const __TURBOPACK__default__export__ = ToolCard;
var _c;
__turbopack_refresh__.register(_c, "ToolCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
'use client';
;
;
const TokenBalance = ({ token, balance, logoURI, name })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-row items-center gap-2 p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: logoURI,
                alt: name,
                className: "w-8 h-8 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-600 dark:text-neutral-400",
                        children: [
                            name,
                            " (",
                            token,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md font-bold",
                        children: balance.toFixed(4)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = TokenBalance;
const __TURBOPACK__default__export__ = TokenBalance;
var _c;
__turbopack_refresh__.register(_c, "TokenBalance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PoolStats": (()=>PoolStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/progress.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const timeframeButtons = [
    "m5",
    "h1",
    "h6",
    "h24"
];
const PoolStats = ({ pair, children })=>{
    _s();
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("h24");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col gap-4 p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/dexes/raydium.png",
                                        alt: "Raydium",
                                        width: 32,
                                        height: 32,
                                        className: "rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: [
                                            pair.baseToken.symbol,
                                            " / ",
                                            pair.quoteToken.symbol
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: pair.url,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    children: [
                                        "Dexscreener",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__["ArrowUpRightIcon"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Stats"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 w-full",
                                children: timeframeButtons.map((button)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: timeframe === button ? "brand" : "outline",
                                        size: "sm",
                                        onClick: ()=>setTimeframe(button),
                                        className: "flex-1",
                                        children: button
                                    }, button, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                        lineNumber: 49,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            (pair.volume || pair.txns || pair.liquidity) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-between",
                                children: [
                                    pair.volume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-md font-semibold text-neutral-600 dark:text-neutral-400",
                                                        children: "Volume"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium"),
                                                        children: [
                                                            "$",
                                                            pair.volume[timeframe].toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                lineNumber: 67,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                lineNumber: 77,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                        lineNumber: 66,
                                        columnNumber: 41
                                    }, this),
                                    pair.txns && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-md font-semibold text-neutral-600 dark:text-neutral-400",
                                                        children: "Transactions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: pair.txns[timeframe].buys / (pair.txns[timeframe].buys + pair.txns[timeframe].sells) * 100,
                                                        className: "w-full h-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-medium",
                                                                children: [
                                                                    pair.txns[timeframe].buys.toLocaleString(),
                                                                    " Buys"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-medium",
                                                                children: [
                                                                    pair.txns[timeframe].sells.toLocaleString(),
                                                                    " Sells"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                lineNumber: 84,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                lineNumber: 95,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                        lineNumber: 83,
                                        columnNumber: 41
                                    }, this),
                                    pair.liquidity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-md font-semibold text-neutral-600 dark:text-neutral-400",
                                                        children: "Liquidity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium",
                                                        children: [
                                                            "$",
                                                            pair.liquidity?.usd.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                lineNumber: 102,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                                lineNumber: 106,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                        lineNumber: 101,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                                lineNumber: 63,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
};
_s(PoolStats, "1RJq83NB74MJuFqmTlrVXmlGgho=");
_c = PoolStats;
var _c;
__turbopack_refresh__.register(_c, "PoolStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$pool$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/liquidity/pool-stats.tsx [app-client] (ecmascript)");
;
;
const timeframes = [
    "day",
    "week",
    "month"
];
const RaydiumPool = ({ pair, pool })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$pool$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolStats"], {
        pair: pair,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: [
                        "Raydium Pool (",
                        pool.type,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-md font-semibold",
                    children: "APR"
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 w-full justify-between",
                    children: timeframes.map((timeframe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    children: timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    children: [
                                        pool[timeframe].apr.toLocaleString(),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, timeframe, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = RaydiumPool;
const __TURBOPACK__default__export__ = RaydiumPool;
var _c;
__turbopack_refresh__.register(_c, "RaydiumPool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/liquidity/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/liquidity/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$raydium$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/liquidity/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/utils/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/liquidity/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx [app-client] (ecmascript) <export default as TokenBalance>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TokenBalance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/balance.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TokenBalance$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx [app-client] (ecmascript) <export default as TokenBalance>");
;
;
;
const GetBalance = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting ${tool.args.tokenAddress || "SOL"} Balance...`,
        result: {
            heading: (result)=>result.body?.token ? `Fetched ${result.body.token} Balance` : `Failed to fetch balance`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TokenBalance$3e$__["TokenBalance"], {
                    token: result.body.token,
                    balance: result.body.balance,
                    logoURI: result.body.logoURI,
                    name: result.body.name
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/balance.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, void 0) : "No balance found"
        },
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/balance.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = GetBalance;
const __TURBOPACK__default__export__ = GetBalance;
var _c;
__turbopack_refresh__.register(_c, "GetBalance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/log-in-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$suppress$2d$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/utils/suppress-console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$login$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/privy/use-login.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const LogInButton = ({ onComplete })=>{
    _s();
    const { login, user, linkWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$login$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogin"])({
        onComplete
    });
    const address = user?.wallet?.address;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: ()=>{
            if (user) {
                linkWallet();
            } else {
                login();
            }
        },
        className: "w-full !bg-[#770EFF] rounded-[40px]",
        children: [
            "Connect ",
            address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ''
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/_components/log-in-button.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
};
_s(LogInButton, "ThIoUH9Mk/vo0cyocaaQzV6O04k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$login$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogin"]
    ];
});
_c = LogInButton;
const __TURBOPACK__default__export__ = LogInButton;
var _c;
__turbopack_refresh__.register(_c, "LogInButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/log-in-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@privy-io/react-auth/dist/esm/hooks/usePrivy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const GetWalletAddress = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Wallet Address...`,
        result: {
            heading: (result)=>result.body ? `Fetched Wallet Address` : "No wallet address found",
            body: (result)=>result.body ? `${result.body.address}` : "No wallet address found"
        },
        call: {
            heading: "Connect Wallet",
            body: (toolCallId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GetWalletAddressAction, {
                    toolCallId: toolCallId
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx",
                    lineNumber: 35,
                    columnNumber: 47
                }, void 0)
        },
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
};
_c = GetWalletAddress;
const GetWalletAddressAction = ({ toolCallId })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"])();
    const { addToolResult, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GetWalletAddressAction.useEffect": ()=>{
            if (user?.wallet?.address && !isLoading) {
                addToolResult(toolCallId, {
                    message: "Wallet connected",
                    body: {
                        address: user.wallet.address
                    }
                });
            }
        }
    }["GetWalletAddressAction.useEffect"], [
        user,
        isLoading
    ]);
    const onComplete = (wallet)=>{
        addToolResult(toolCallId, {
            message: "Wallet connected",
            body: {
                address: wallet.address
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onComplete: onComplete
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx",
            lineNumber: 70,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
};
_s(GetWalletAddressAction, "iUaEeEpwkX7GlWjZ9F+D+e0wXHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c1 = GetWalletAddressAction;
const __TURBOPACK__default__export__ = GetWalletAddress;
var _c, _c1;
__turbopack_refresh__.register(_c, "GetWalletAddress");
__turbopack_refresh__.register(_c1, "GetWalletAddressAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/save-token.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
;
;
;
;
const GetTrendingTokens = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Trending Tokens...`,
        result: {
            heading: (result)=>result.body ? `Fetched Trending Tokens` : `Failed to fetch trending tokens`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendingTokens, {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                    lineNumber: 30,
                    columnNumber: 23
                }, void 0) : "No trending tokens found"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
};
_c = GetTrendingTokens;
const TrendingTokens = ({ body })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-2",
        children: body.tokens.map((token)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenCard, {
                token: token
            }, token.address, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
};
_c1 = TrendingTokens;
const TokenCard = ({ token })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/token/${token.address}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "flex flex-col gap-2 p-2 justify-center hover:border-brand-600 dark:hover:border-brand-600 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center gap-2 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: token.logoURI,
                                    alt: token.name,
                                    className: "w-10 h-10 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold",
                                            children: [
                                                token.name,
                                                " (",
                                                token.symbol,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "$",
                                                token.price.toLocaleString(undefined, {
                                                    maximumFractionDigits: 5
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: token.price24hChangePercent > 0 ? 'text-green-500' : 'text-red-500',
                                                    children: [
                                                        "(",
                                                        token.price24hChangePercent > 0 ? '+' : '',
                                                        token.price24hChangePercent.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        }),
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 144
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                                            lineNumber: 67,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            address: token.address
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            "24h Volume: $",
                            token.volume24hUSD.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
            lineNumber: 57,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
};
_c2 = TokenCard;
const __TURBOPACK__default__export__ = GetTrendingTokens;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "GetTrendingTokens");
__turbopack_refresh__.register(_c1, "TrendingTokens");
__turbopack_refresh__.register(_c2, "TokenCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/address.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const Address = ({ address, className })=>{
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            delayDuration: 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md w-fit px-1", className),
                        onClick: handleCopy,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncateAddress"])(address)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/address.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/address.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    side: "bottom",
                    children: copied ? "Copied to clipboard" : "Copy to clipboard"
                }, void 0, false, {
                    fileName: "[project]/app/_components/address.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/address.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/address.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
};
_s(Address, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = Address;
const __TURBOPACK__default__export__ = Address;
var _c;
__turbopack_refresh__.register(_c, "Address");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$optional$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/optional-link.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const SOCIAL_LINKS = [
    {
        id: 'website',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
            lineNumber: 20,
            columnNumber: 15
        }, this)
    },
    {
        id: 'twitter',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
            lineNumber: 24,
            columnNumber: 15
        }, this)
    },
    {
        id: 'coingeckoId',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/logos/coingecko.png",
            alt: "Coingecko",
            width: 16,
            height: 16,
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    },
    {
        id: 'discord',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDiscord"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
            lineNumber: 40,
            columnNumber: 15
        }, this)
    },
    {
        id: 'telegram',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTelegram"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
            lineNumber: 44,
            columnNumber: 15
        }, this)
    }
];
const Links = ({ token })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: SOCIAL_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$optional$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionalLink"], {
                href: link.id === "coingeckoId" && token?.extensions?.[link.id] ? `https://www.coingecko.com/en/coins/${token.extensions?.[link.id]}` : token?.extensions?.[link.id],
                target: "_blank",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", token?.extensions?.[link.id] ? "hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full" : "opacity-25"),
                    children: link.icon
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                }, this)
            }, link.id, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
};
_c = Links;
const __TURBOPACK__default__export__ = Links;
var _c;
__turbopack_refresh__.register(_c, "Links");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/address.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/save-token.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$links$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/links.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const GetTokenDataResultHeading = ({ token })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-2 flex flex-col md:flex-row justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: token.logoURI,
                        alt: token.name,
                        className: "w-10 h-10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center md:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold",
                                        children: [
                                            token.name,
                                            " (",
                                            token.symbol,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        address: token.address
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/token/${token.address}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "brandOutline",
                                            className: "p-1 h-6 text-xs w-fit",
                                            children: "See More"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        address: token.address
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold flex items-center gap-1",
                                children: [
                                    "$",
                                    token.price.toLocaleString(undefined, {
                                        maximumFractionDigits: 5
                                    }),
                                    token.priceChange24hPercent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", token.priceChange24hPercent > 0 ? "text-green-500" : "text-red-500"),
                                        children: token.priceChange24hPercent ? `(${token.priceChange24hPercent > 0 ? "+" : ""}${token.priceChange24hPercent.toFixed(2)}%)` : ""
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$links$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                token: token
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_c = GetTokenDataResultHeading;
const __TURBOPACK__default__export__ = GetTokenDataResultHeading;
var _c;
__turbopack_refresh__.register(_c, "GetTokenDataResultHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
const Stats = ({ token })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-2 flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold",
                children: "Market Stats"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "Market Cap"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "$",
                                    token.mc.toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "Liquidity"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "$",
                                    token.liquidity.toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "# of Holders"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: token.holder.toLocaleString(undefined, {
                                    maximumFractionDigits: 0
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "# of Markets"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: token.numberMarkets.toLocaleString(undefined, {
                                    maximumFractionDigits: 0
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
_c = Stats;
const __TURBOPACK__default__export__ = Stats;
var _c;
__turbopack_refresh__.register(_c, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const BuySell = ({ buy, sell, prefix, suffix })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500",
                        children: [
                            (sell / (buy + sell) * 100).toFixed(2),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-500",
                        children: [
                            (buy / (buy + sell) * 100).toFixed(2),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full h-1 bg-neutral-800 rounded-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-500 h-full",
                        style: {
                            width: `${sell / (buy + sell) * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-500 h-full",
                        style: {
                            width: `${buy / (buy + sell) * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500",
                        children: [
                            prefix,
                            sell.toLocaleString(undefined, {
                                maximumFractionDigits: 0
                            }),
                            suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-500",
                        children: [
                            prefix,
                            buy.toLocaleString(undefined, {
                                maximumFractionDigits: 0
                            }),
                            suffix
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
};
_c = BuySell;
const __TURBOPACK__default__export__ = BuySell;
var _c;
__turbopack_refresh__.register(_c, "BuySell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$buy$2d$sell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/buy-sell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const TwentyFourHrStats = ({ token })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-2 flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold",
                children: "Volume (24hr)"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$buy$2d$sell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                buy: token.vBuy24hUSD,
                sell: token.vSell24hUSD,
                prefix: "$"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold",
                        children: "Unique Traders"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            token.uniqueWallet24h.toLocaleString(),
                            " Traders"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
_c = TwentyFourHrStats;
const __TURBOPACK__default__export__ = TwentyFourHrStats;
var _c;
__turbopack_refresh__.register(_c, "TwentyFourHrStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/stats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$24hr$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/24hr-stats.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const GetTokenDataResult = ({ body })=>{
    const { token } = body;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                token: token
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        token: token
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$24hr$2d$stats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        token: token
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = GetTokenDataResult;
const __TURBOPACK__default__export__ = GetTokenDataResult;
var _c;
__turbopack_refresh__.register(_c, "GetTokenDataResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/result/index.tsx [app-client] (ecmascript)");
;
;
;
const GetTokenData = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Token Data...`,
        result: {
            heading: (result)=>result.body ? `Fetched ${result.body.token.name || "Token"} Data` : `Failed to fetch token data`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$result$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx",
                    lineNumber: 26,
                    columnNumber: 23
                }, void 0) : "No token data found"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = GetTokenData;
const __TURBOPACK__default__export__ = GetTokenData;
var _c;
__turbopack_refresh__.register(_c, "GetTokenData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/swap/swap-result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SwapResult = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs text-muted-foreground",
        children: "Swapped Successfully"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/swap-result.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = SwapResult;
const __TURBOPACK__default__export__ = SwapResult;
var _c;
__turbopack_refresh__.register(_c, "SwapResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/search/use-search.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useSearch": (()=>useSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
const useSearch = (input, endpoint)=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSearch.useEffect": ()=>{
            const search = {
                "useSearch.useEffect.search": async ()=>{
                    setLoading(true);
                    const res = await fetch(`${endpoint}?q=${input}`);
                    const data = await res.json();
                    setResults(data);
                    setLoading(false);
                }
            }["useSearch.useEffect.search"];
            search();
        }
    }["useSearch.useEffect"], [
        endpoint,
        input
    ]);
    return {
        loading,
        results
    };
};
_s(useSearch, "xAiHU3iYy/FKNfZxLn0Vx4HpA2g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/search/use-token-search.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTokenSearch": (()=>useTokenSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
"use client";
;
const useTokenSearch = (input)=>{
    _s();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTokenSearch.useEffect": ()=>{
            const fetchTokens = {
                "useTokenSearch.useEffect.fetchTokens": async ()=>{
                    if (!input) {
                        setResults([]);
                        return;
                    }
                    setLoading(true);
                    try {
                        const response = await fetch("/api/token/search", {
                            method: "POST",
                            body: JSON.stringify({
                                search: input
                            })
                        });
                        const data = await response.json();
                        const tokens = data[0]?.result.map({
                            "useTokenSearch.useEffect.fetchTokens": (item)=>({
                                    id: item.address,
                                    symbol: item.symbol,
                                    name: item.name,
                                    decimals: item.decimals,
                                    logoURI: item.logo_uri,
                                    tags: [],
                                    freezeAuthority: null,
                                    mintAuthority: null,
                                    permanentDelegate: null,
                                    extensions: {}
                                })
                        }["useTokenSearch.useEffect.fetchTokens"]) || [];
                        setResults(tokens);
                    } catch (error) {
                        console.error('Token search error:', error);
                        setResults([]);
                    }
                    setLoading(false);
                }
            }["useTokenSearch.useEffect.fetchTokens"];
            fetchTokens();
        }
    }["useTokenSearch.useEffect"], [
        input
    ]);
    return {
        results,
        loading
    };
};
_s(useTokenSearch, "VuTAnq2hL4HZo3dPAiLmxU/AKWE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/search/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/search/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$use$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/search/use-search.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$use$2d$token$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/search/use-token-search.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/hooks/search/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/_components/token-select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/save-token.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/search/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$use$2d$token$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/search/use-token-search.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const TokenSelect = ({ value, onChange, priorityTokens = [] })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { results, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$use$2d$token$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenSearch"])(input);
    const sortedResults = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "TokenSelect.useMemo[sortedResults]": ()=>{
            if (!results) return [];
            return results.sort({
                "TokenSelect.useMemo[sortedResults]": (a, b)=>{
                    // First check for priority tokens
                    const aIndex = priorityTokens.indexOf(a.id);
                    const bIndex = priorityTokens.indexOf(b.id);
                    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
                    if (aIndex !== -1) return -1;
                    if (bIndex !== -1) return 1;
                    // keep order
                    return 0;
                }
            }["TokenSelect.useMemo[sortedResults]"]);
        }
    }["TokenSelect.useMemo[sortedResults]"], [
        results,
        priorityTokens,
        input
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-fit shrink-0 flex items-center bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-md px-2 py-1 gap-2 cursor-pointer transition-colors duration-200",
                    children: [
                        value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: value.logoURI || '/placeholder.png',
                            alt: value.name,
                            className: "w-6 h-6 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/token-select.tsx",
                            lineNumber: 63,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-600"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/token-select.tsx",
                            lineNumber: 69,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold", value ? "opacity-100" : "opacity-50"),
                            children: value ? value.symbol : "Select"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/token-select.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                            className: "h-4 w-4 shrink-0 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/token-select.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/token-select.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/token-select.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-[200px] p-2 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "Search tokens...",
                        value: input,
                        onChange: (e)=>setInput(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/token-select.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-48 w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/token-select.tsx",
                        lineNumber: 89,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 max-h-[300px] overflow-y-scroll",
                        children: input ? sortedResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-neutral-500",
                            children: [
                                'No results for "',
                                input,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/token-select.tsx",
                            lineNumber: 95,
                            columnNumber: 41
                        }, this) : sortedResults.map((token)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "w-full justify-start px-1",
                                onClick: ()=>{
                                    setOpen(false);
                                    onChange(token);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: token.logoURI,
                                        alt: token.name,
                                        className: "w-6 h-6 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/token-select.tsx",
                                        lineNumber: 109,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold",
                                        children: token.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/token-select.tsx",
                                        lineNumber: 114,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        address: token.id
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/token-select.tsx",
                                        lineNumber: 117,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, token.id, true, {
                                fileName: "[project]/app/_components/token-select.tsx",
                                lineNumber: 100,
                                columnNumber: 45
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-neutral-500",
                            children: "Start typing to search for a token"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/token-select.tsx",
                            lineNumber: 122,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/token-select.tsx",
                        lineNumber: 91,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/token-select.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/token-select.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
};
_s(TokenSelect, "hMX3lnP7K6GsvomFfbyMv17HCu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$search$2f$use$2d$token$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenSearch"]
    ];
});
_c = TokenSelect;
const __TURBOPACK__default__export__ = TokenSelect;
var _c;
__turbopack_refresh__.register(_c, "TokenSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/solana/use-token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const TokenBalance = ({ address, tokenAddress, tokenSymbol, setAmount, digits = 2 })=>{
    _s();
    const { balance, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"])(tokenAddress, address);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "w-16 h-4"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
        lineNumber: 20,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-neutral-500 dark:text-neutral-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                children: [
                    balance.toLocaleString(undefined, {
                        maximumFractionDigits: digits
                    }),
                    " ",
                    tokenSymbol
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            setAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "text-[10px] px-1 py-0.5 h-fit w-fit",
                        onClick: ()=>setAmount((balance / 2).toString()),
                        children: "Half"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "text-[10px] px-1 py-0.5 h-fit w-fit",
                        onClick: ()=>setAmount(balance.toString()),
                        children: "Max"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
                        lineNumber: 38,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
                lineNumber: 30,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
};
_s(TokenBalance, "mpUqf2A7IoImKlSYRy7Xq3cnilI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"]
    ];
});
_c = TokenBalance;
const __TURBOPACK__default__export__ = TokenBalance;
var _c;
__turbopack_refresh__.register(_c, "TokenBalance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/token-display.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
const TokenDisplay = ({ token })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-fit shrink-0 flex items-center bg-neutral-200 dark:bg-neutral-700 rounded-md px-2 py-1 gap-2 cursor-pointer transition-colors duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: token.logoURI,
                alt: token.name,
                className: "w-6 h-6 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/_components/token-display.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold", "opacity-100"),
                children: token.symbol
            }, void 0, false, {
                fileName: "[project]/app/_components/token-display.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/token-display.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
_c = TokenDisplay;
const __TURBOPACK__default__export__ = TokenDisplay;
var _c;
__turbopack_refresh__.register(_c, "TokenDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TokenInputValue": (()=>TokenInputValue),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$token$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/token-select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/queries/price/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$token$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/token-display.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$use$2d$price$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/price/use-price.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const TokenInput = ({ label, amount, onChange, token, onChangeToken, address })=>{
    _s();
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col border border-transparent rounded-md p-2 w-full transition-colors bg-neutral-100 dark:bg-neutral-700 gap-2", isFocused && "border-brand-600"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    token && address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        address: address,
                        tokenAddress: token.id,
                        tokenSymbol: token.symbol,
                        setAmount: onChange
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center w-full"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: amount,
                                onChange: (e)=>onChange && onChange(e.target.value),
                                onFocus: ()=>setIsFocused(true),
                                onBlur: ()=>setIsFocused(false),
                                className: "w-full bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                                disabled: !onChange,
                                placeholder: "0.00"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            token && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenInputValue, {
                                amount: amount,
                                token: token
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                                lineNumber: 61,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    onChangeToken ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$token$2d$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: token,
                        onChange: onChangeToken
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                        lineNumber: 70,
                        columnNumber: 25
                    }, this) : token && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$token$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        token: token
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                        lineNumber: 76,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_s(TokenInput, "taoS6m9NZex5dx3pinefKTdpShE=");
_c = TokenInput;
const TokenInputValue = ({ amount, token })=>{
    _s1();
    const { data: price, isLoading: isPriceLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$use$2d$price$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrice"])(token.id);
    if (isPriceLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "w-16 h-4"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
        lineNumber: 88,
        columnNumber: 31
    }, this);
    if (!price) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-[10px] text-neutral-600 dark:text-neutral-400",
        children: [
            "$",
            (price.value * Number(amount)).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
};
_s1(TokenInputValue, "lL+2S1gK2XjL/EOimI/vflA9UlY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$use$2d$price$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrice"]
    ];
});
_c1 = TokenInputValue;
const __TURBOPACK__default__export__ = TokenInput;
var _c, _c1;
__turbopack_refresh__.register(_c, "TokenInput");
__turbopack_refresh__.register(_c1, "TokenInputValue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/get-price.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getPrice": (()=>getPrice),
    "getPrices": (()=>getPrices)
});
async function getPrices(tokenIds) {
    try {
        const response = await fetch(`https://api.jup.ag/price/v2?ids=${tokenIds.join(",")}`);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        if (!data.data) {
            return Object.fromEntries(tokenIds.map((tokenId)=>[
                    tokenId,
                    {
                        price: 0
                    }
                ]));
        }
        return data.data;
    } catch (error) {
        return Object.fromEntries(tokenIds.map((tokenId)=>[
                tokenId,
                {
                    price: 0
                }
            ]));
    }
}
const getPrice = async (tokenId)=>{
    const prices = await getPrices([
        tokenId
    ]);
    return prices[tokenId].price;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "jupiterQuoteApi": (()=>jupiterQuoteApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jup$2d$ag$2f$api$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jup-ag/api/dist/index.mjs [app-client] (ecmascript)");
;
const jupiterQuoteApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jup$2d$ag$2f$api$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJupiterApiClient"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/quote.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getQuote": (()=>getQuote)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/client.ts [app-client] (ecmascript)");
;
const getQuote = async (inputMint, outputMint, amount)=>{
    const params = {
        inputMint,
        outputMint,
        amount,
        maxAccounts: 20,
        slippageBps: 300
    };
    // get quote
    const quote = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jupiterQuoteApi"].quoteGet(params);
    if (!quote) {
        throw new Error("unable to quote");
    }
    return quote;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/swap.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSwapObj": (()=>getSwapObj)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/client.ts [app-client] (ecmascript)");
;
const getSwapObj = async (userPublicKey, quoteResponse)=>{
    // Get serialized transaction
    const swapObj = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jupiterQuoteApi"].swapPost({
        swapRequest: {
            quoteResponse,
            userPublicKey,
            wrapAndUnwrapSol: true
        }
    });
    return swapObj;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/jup-api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "JUP_API": (()=>JUP_API)
});
const JUP_API = "https://quote-api.jup.ag/v6";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/types.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/jupiter/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$get$2d$price$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/get-price.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$quote$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/quote.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$swap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/swap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$jup$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/jup-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/jupiter/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/decimal.js/decimal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/log-in-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/jupiter/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/privy/use-send-transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/solana/use-token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$swap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/swap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$quote$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/jupiter/quote.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
const Swap = ({ initialInputToken, initialOutputToken, inputLabel, outputLabel, initialInputAmount, swapText, swappingText, onSuccess, onError, onCancel })=>{
    _s();
    const [inputAmount, setInputAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInputAmount || "");
    const [inputToken, setInputToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInputToken);
    const [outputAmount, setOutputAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [outputToken, setOutputToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialOutputToken);
    const [isQuoteLoading, setIsQuoteLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quoteResponse, setQuoteResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSwapping, setIsSwapping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { sendTransaction, wallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const { balance: inputBalance, isLoading: inputBalanceLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"])(inputToken?.id || "", wallet?.address || "");
    const onChangeInputOutput = ()=>{
        const tempInputToken = inputToken;
        const tempInputAmount = inputAmount;
        setInputToken(outputToken);
        setInputAmount(outputAmount);
        setOutputToken(tempInputToken);
        setOutputAmount(tempInputAmount);
    };
    const onSwap = async ()=>{
        if (!wallet || !quoteResponse) return;
        setIsSwapping(true);
        try {
            const { swapTransaction } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$swap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSwapObj"])(wallet.address, quoteResponse);
            const swapTransactionBuf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(swapTransaction, "base64");
            const transaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(swapTransactionBuf);
            const txHash = await sendTransaction(transaction);
            onSuccess?.(txHash);
        } catch (error) {
            onError?.(error instanceof Error ? error.message : "Unknown error");
        } finally{
            setIsSwapping(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Swap.useEffect": ()=>{
            if (inputToken && outputToken) {
                const fetchQuoteAndUpdate = {
                    "Swap.useEffect.fetchQuoteAndUpdate": async ()=>{
                        setIsQuoteLoading(true);
                        setOutputAmount("");
                        const quote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$jupiter$2f$quote$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuote"])(inputToken.id, outputToken.id, parseFloat(inputAmount) * 10 ** inputToken.decimals);
                        setQuoteResponse(quote);
                        setOutputAmount(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](quote.outAmount).div(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](10).pow(outputToken.decimals)).toString());
                        setIsQuoteLoading(false);
                    }
                }["Swap.useEffect.fetchQuoteAndUpdate"];
                if (inputAmount && Number(inputAmount) > 0) {
                    fetchQuoteAndUpdate();
                } else {
                    setQuoteResponse(null);
                    setOutputAmount("");
                }
            }
        }
    }["Swap.useEffect"], [
        inputToken,
        outputToken,
        inputAmount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 w-96 max-w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 items-center w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: inputLabel,
                        amount: inputAmount,
                        onChange: setInputAmount,
                        token: inputToken,
                        onChangeToken: setInputToken,
                        address: wallet?.address
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "group h-fit w-fit p-1",
                        onClick: onChangeInputOutput,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "h-4 w-4 transition-transform group-hover:rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: outputLabel,
                        amount: outputAmount,
                        token: outputToken,
                        onChangeToken: setOutputToken,
                        address: wallet?.address
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    wallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "brand",
                        className: "w-full",
                        onClick: onSwap,
                        disabled: isSwapping || isQuoteLoading || !quoteResponse || !inputToken || !outputToken || !inputAmount || !outputAmount || !inputBalance || inputBalanceLoading || Number(inputAmount) > Number(inputBalance),
                        children: isQuoteLoading ? "Loading..." : Number(inputAmount) > Number(inputBalance) ? "Insufficient balance" : isSwapping ? swappingText || "Swapping..." : swapText || "Swap"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                        lineNumber: 142,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                        lineNumber: 159,
                        columnNumber: 25
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "w-full",
                        onClick: onCancel,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                        lineNumber: 164,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
};
_s(Swap, "R6TKAPL4pqwhvPEuWiLKoGprn2g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"]
    ];
});
_c = Swap;
const __TURBOPACK__default__export__ = Swap;
var _c;
__turbopack_refresh__.register(_c, "Swap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/swap/call.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/token/use-token-data-by-address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const SwapCallBody = ({ toolCallId, args })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { data: inputTokenData, isLoading: inputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(args.inputMint || "");
    const { data: outputTokenData, isLoading: outputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(args.outputMint || "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-2",
        children: inputTokenLoading || outputTokenLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-48 w-96"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/call.tsx",
            lineNumber: 31,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialInputToken: inputTokenData,
            initialOutputToken: outputTokenData,
            inputLabel: "Sell",
            outputLabel: "Buy",
            initialInputAmount: args.inputAmount?.toString(),
            swapText: "Swap",
            swappingText: "Swapping...",
            onSuccess: (tx)=>{
                addToolResult(toolCallId, {
                    message: `Swap successful!`,
                    body: {
                        transaction: tx,
                        inputAmount: args.inputAmount || 0,
                        inputToken: inputTokenData?.symbol || "",
                        outputToken: outputTokenData?.symbol || ""
                    }
                });
            },
            onError: (error)=>{
                addToolResult(toolCallId, {
                    message: `Swap failed: ${error}`
                });
            },
            onCancel: ()=>{
                addToolResult(toolCallId, {
                    message: `Swap cancelled`
                });
            }
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/call.tsx",
            lineNumber: 33,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/call.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
_s(SwapCallBody, "bMynQxwTLwUhqiMpVYWoMe1Ea4M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"]
    ];
});
_c = SwapCallBody;
const __TURBOPACK__default__export__ = SwapCallBody;
var _c;
__turbopack_refresh__.register(_c, "SwapCallBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$swap$2d$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/swap/swap-result.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$call$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/swap/call.tsx [app-client] (ecmascript)");
;
;
;
;
const Swap = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: "Completing Trade...",
        result: {
            heading: (result)=>result.body ? "Trade Complete" : "Failed to complete trade",
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$swap$2d$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx",
                    lineNumber: 27,
                    columnNumber: 23
                }, void 0) : result.message
        },
        call: {
            heading: "Swap",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$call$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx",
                    lineNumber: 33,
                    columnNumber: 21
                }, void 0)
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "max-w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = Swap;
const __TURBOPACK__default__export__ = Swap;
var _c;
__turbopack_refresh__.register(_c, "Swap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TokenBalance$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/token-balance.tsx [app-client] (ecmascript) <export default as TokenBalance>");
;
;
;
const AllBalances = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting All Balances...`,
        result: {
            heading: (result)=>result.body ? `Fetched All Balances` : `Failed to fetch balances`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2",
                    children: result.body.balances.map((balance)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TokenBalance$3e$__["TokenBalance"], {
                            token: balance.token,
                            balance: balance.balance,
                            logoURI: balance.logoURI,
                            name: balance.name
                        }, balance.token, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx",
                            lineNumber: 29,
                            columnNumber: 33
                        }, void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, void 0) : "No balance found"
        },
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = AllBalances;
const __TURBOPACK__default__export__ = AllBalances;
var _c;
__turbopack_refresh__.register(_c, "AllBalances");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/transfer/call/build-tx.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildTransferTx": (()=>buildTransferTx)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/spl-token/lib/esm/instructions/associatedTokenAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$transfer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/spl-token/lib/esm/instructions/transfer.js [app-client] (ecmascript)");
;
;
const buildTransferTx = async (from, to, amount, mint)=>{
    // Create connection
    const connection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"](("TURBOPACK compile-time value", "https://mainnet.helius-rpc.com/?api-key=5b476d89-5514-4f8c-8238-066c06008780"));
    // Convert parameters to appropriate types
    const fromPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](from);
    const toPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](to);
    const instructions = [];
    if (mint === "So11111111111111111111111111111111111111112") {
        // Transfer native SOL
        instructions.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].transfer({
            fromPubkey,
            toPubkey,
            lamports: amount * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAMPORTS_PER_SOL"]
        }));
    } else {
        // Transfer SPL token
        const mintPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](mint);
        const fromAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(mintPubkey, fromPubkey);
        const toAta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssociatedTokenAddress"])(mintPubkey, toPubkey);
        // Check if recipient's token account exists
        const toAtaInfo = await connection.getAccountInfo(toAta);
        if (!toAtaInfo) {
            instructions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$associatedTokenAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAssociatedTokenAccountInstruction"])(fromPubkey, toAta, toPubkey, mintPubkey // mint
            ));
        }
        // Get mint info to determine decimals
        const mintInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMint"])(connection, mintPubkey);
        const adjustedAmount = amount * Math.pow(10, mintInfo.decimals);
        instructions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$instructions$2f$transfer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransferInstruction"])(fromAta, toAta, fromPubkey, adjustedAmount));
    }
    // Get the latest blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    // Create a message with the latest blockhash
    const message = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMessage"]({
        payerKey: fromPubkey,
        recentBlockhash: blockhash,
        instructions
    }).compileToV0Message();
    // Simulate transaction
    const simulation = await connection.simulateTransaction(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"](message));
    // Check if simulation was successful
    if (simulation.value.err) {
        throw new Error(`Transaction simulation failed: ${JSON.stringify(simulation.value)}`);
    }
    // Return a VersionedTransaction
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"](message);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/log-in-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$call$2f$build$2d$tx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/transfer/call/build-tx.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/privy/use-send-transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/token/use-token-data-by-address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/solana/use-token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
const TransferCall = ({ args, toolCallId })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { wallet, sendTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(args.amount.toString());
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toAddress, setToAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(args.to);
    const [isTransferring, setIsTransferring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: inputTokenData, isLoading: inputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(args.mint || "So11111111111111111111111111111111111111112");
    const { balance, isLoading: balanceLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"])(args.mint || "So11111111111111111111111111111111111111112", wallet?.address || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransferCall.useEffect": ()=>{
            if (inputTokenData && !token) {
                setToken(inputTokenData);
            }
        }
    }["TransferCall.useEffect"], [
        inputTokenData
    ]);
    const onTransfer = async ()=>{
        if (!wallet || !amount || !toAddress || !token) return;
        setIsTransferring(true);
        const transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$call$2f$build$2d$tx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransferTx"])(wallet.address, toAddress, Number(amount), token.id);
        try {
            const tx = await sendTransaction(transaction);
            addToolResult(toolCallId, {
                message: `Successfully transferred ${amount} ${token.symbol} to ${toAddress}.`,
                body: {
                    amount: Number(amount),
                    recipient: toAddress,
                    token: token.symbol,
                    transaction: tx
                }
            });
        } catch (e) {
            addToolResult(toolCallId, {
                message: `Failed to transfer: ${e instanceof Error ? e.message : "Unknown error"}`
            });
        } finally{
            setIsTransferring(false);
        }
    };
    if (inputTokenLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "h-48 w-96"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
        lineNumber: 74,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col gap-2 p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        token: token,
                        label: "Transfer",
                        amount: amount,
                        onChange: (amount)=>{
                            setAmount(amount);
                        },
                        onChangeToken: (token)=>{
                            setToken(token);
                        },
                        address: wallet?.address
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: toAddress,
                        onChange: (e)=>{
                            setToAddress(e.target.value);
                        },
                        placeholder: "To address"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    wallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "brand",
                        onClick: onTransfer,
                        disabled: isTransferring || balanceLoading || !balance || !token || !amount || Number(amount) <= 0 || !toAddress || Number(amount) > balance,
                        children: balanceLoading ? "Loading..." : Number(amount) > balance ? "Insufficient funds" : isTransferring ? "Transferring..." : "Transfer"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                        lineNumber: 104,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                        lineNumber: 120,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
};
_s(TransferCall, "Q1fTWbOrNNGpp30jcGD1cr84e4I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"]
    ];
});
_c = TransferCall;
const __TURBOPACK__default__export__ = TransferCall;
var _c;
__turbopack_refresh__.register(_c, "TransferCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/transfer/result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TransferResult = ({ transferResult, amount, to })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs text-muted-foreground",
        children: [
            "Transferred ",
            amount,
            " ",
            transferResult.token,
            " to ",
            to
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/result.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
};
_c = TransferResult;
const __TURBOPACK__default__export__ = TransferResult;
var _c;
__turbopack_refresh__.register(_c, "TransferResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$call$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/transfer/call/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/transfer/result.tsx [app-client] (ecmascript)");
;
;
;
;
const Transfer = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: "Transferring...",
        result: {
            heading: (result)=>result.body ? "Transfer Complete" : "Failed to Transfer",
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    amount: tool.args.amount,
                    to: tool.args.to,
                    transferResult: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx",
                    lineNumber: 27,
                    columnNumber: 23
                }, void 0) : result.message
        },
        call: {
            heading: "Transfer",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$call$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx",
                    lineNumber: 33,
                    columnNumber: 21
                }, void 0)
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = Transfer;
const __TURBOPACK__default__export__ = Transfer;
var _c;
__turbopack_refresh__.register(_c, "Transfer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/address.tsx [app-client] (ecmascript)");
;
;
;
const GetTokenAddress = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting ${tool.args.keyword} Address...`,
        result: {
            heading: (result)=>result.body ? `Fetched ${tool.args.keyword} Address` : `Failed to fetch token address`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    address: result.body.address
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, void 0) : "No token address found"
        },
        prevToolAgent: prevToolAgent,
        defaultOpen: false
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = GetTokenAddress;
const __TURBOPACK__default__export__ = GetTokenAddress;
var _c;
__turbopack_refresh__.register(_c, "GetTokenAddress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/token-balance.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const TokenBalance = ({ symbol, balance, logoURI, name, price })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center gap-2",
        children: [
            logoURI && logoURI.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: logoURI,
                alt: name,
                className: "w-8 h-8 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/_components/token-balance.tsx",
                lineNumber: 18,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-600 dark:text-neutral-400",
                        children: [
                            name,
                            " (",
                            symbol,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/token-balance.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md font-bold",
                        children: [
                            balance.toLocaleString(undefined, {
                                maximumFractionDigits: 4
                            }),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-600 dark:text-neutral-400",
                                children: [
                                    "$",
                                    (price * balance).toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/token-balance.tsx",
                                lineNumber: 22,
                                columnNumber: 116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/token-balance.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/token-balance.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/token-balance.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = TokenBalance;
const __TURBOPACK__default__export__ = TokenBalance;
var _c;
__turbopack_refresh__.register(_c, "TokenBalance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/arkham-entity-logos.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "arkhamEntityLogos": (()=>arkhamEntityLogos)
});
const arkhamEntityLogos = {
    // Exchanges
    "gate-io": "/exchanges/gate.png",
    "bitget": "/exchanges/bitget.png",
    "bybit": "/exchanges/bybit.png",
    "coinbase": "/exchanges/coinbase.png",
    "binance": "/exchanges/binance.png",
    "okx": "/exchanges/okx.png",
    "mexc": "/exchanges/mexc.png",
    "kucoin": "/exchanges/kucoin.png",
    "kraken": "/exchanges/kraken.jpg",
    "huobi": "/exchanges/huobi.png",
    // Dexes
    "raydium": "/dexes/raydium.png",
    "jupiter": "/dexes/jupiter.png",
    "meteora": "/dexes/meteora.png",
    "orca": "/dexes/orca.png",
    "phoenix": "/dexes/phoenix.png"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/wallet-address.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arkham$2d$entity$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/arkham-entity-logos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$portfolio$2f$use$2d$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/portfolio/use-portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const WalletAddress = ({ address, className })=>{
    _s();
    const [arkhamAddress, setArkhamAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletAddress.useEffect": ()=>{
            const fetchArkhamEntity = {
                "WalletAddress.useEffect.fetchArkhamEntity": async ()=>{
                    try {
                        const entity = await fetch(`/api/arkham/address/${address}`);
                        const data = await entity.json();
                        setArkhamAddress(data);
                    } catch (error) {
                        console.error(error);
                    }
                }
            }["WalletAddress.useEffect.fetchArkhamEntity"];
            fetchArkhamEntity();
        }
    }["WalletAddress.useEffect"], [
        address
    ]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            delayDuration: 0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: arkhamAddress?.arkhamEntity && arkhamAddress?.arkhamLabel?.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center gap-2",
                        children: [
                            arkhamAddress.arkhamEntity.id && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arkham$2d$entity$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arkhamEntityLogos"][arkhamAddress.arkhamEntity.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arkham$2d$entity$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arkhamEntityLogos"][arkhamAddress.arkhamEntity.id],
                                alt: arkhamAddress.arkhamEntity.name,
                                width: 16,
                                height: 16,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/wallet-address.tsx",
                                lineNumber: 62,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md w-fit px-1", className),
                                children: `${arkhamAddress.arkhamEntity.name} (${arkhamAddress.arkhamLabel.name})`
                            }, void 0, false, {
                                fileName: "[project]/app/_components/wallet-address.tsx",
                                lineNumber: 71,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/wallet-address.tsx",
                        lineNumber: 58,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md w-fit px-1", className),
                        children: [
                            address.slice(0, 4),
                            "...$",
                            address.slice(-4)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/wallet-address.tsx",
                        lineNumber: 78,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/wallet-address.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    side: "bottom",
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletBalances, {
                            address: address
                        }, void 0, false, {
                            fileName: "[project]/app/_components/wallet-address.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `https://solscan.io/address/${address}`,
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        children: [
                                            "Solscan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/_components/wallet-address.tsx",
                                                lineNumber: 91,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/_components/wallet-address.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/wallet-address.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleCopy,
                                    children: [
                                        copied ? "Copied" : "Copy",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/wallet-address.tsx",
                                            lineNumber: 95,
                                            columnNumber: 58
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/wallet-address.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/wallet-address.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/wallet-address.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/wallet-address.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/wallet-address.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
};
_s(WalletAddress, "C2MIgTXFQUhsMUCm74NjnNG9wrY=");
_c = WalletAddress;
const WalletBalances = ({ address })=>{
    _s1();
    const { data: portfolio, isLoading: portfolioLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$portfolio$2f$use$2d$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"])(address);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold",
                        children: "Balances"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/wallet-address.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    portfolioLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-24"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/wallet-address.tsx",
                        lineNumber: 116,
                        columnNumber: 25
                    }, this) : portfolio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold",
                        children: [
                            "$",
                            portfolio.totalUsd.toLocaleString(undefined, {
                                maximumFractionDigits: 2
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/wallet-address.tsx",
                        lineNumber: 119,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/wallet-address.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            portfolioLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-16 w-full"
            }, void 0, false, {
                fileName: "[project]/app/_components/wallet-address.tsx",
                lineNumber: 128,
                columnNumber: 21
            }, this) : portfolio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 max-h-48 overflow-y-auto",
                children: portfolio.items.filter((item)=>item.valueUsd > 0.01).map((token)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        symbol: token.symbol,
                        balance: token.uiAmount,
                        logoURI: token.logoURI,
                        name: token.name,
                        price: token.priceUsd
                    }, token.address, false, {
                        fileName: "[project]/app/_components/wallet-address.tsx",
                        lineNumber: 133,
                        columnNumber: 33
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/_components/wallet-address.tsx",
                lineNumber: 131,
                columnNumber: 25
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "No balances found"
            }, void 0, false, {
                fileName: "[project]/app/_components/wallet-address.tsx",
                lineNumber: 144,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/wallet-address.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, this);
};
_s1(WalletBalances, "h7hyV1BjipfYGEEvlHc1o18krGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$portfolio$2f$use$2d$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"]
    ];
});
_c1 = WalletBalances;
const __TURBOPACK__default__export__ = WalletAddress;
var _c, _c1;
__turbopack_refresh__.register(_c, "WalletAddress");
__turbopack_refresh__.register(_c1, "WalletBalances");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/streamflow/get-streams-by-mint.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStreamsByMint": (()=>getStreamsByMint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$streamflow$2f$stream$2f$dist$2f$esm$2f$solana$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@streamflow/stream/dist/esm/solana/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$streamflow$2f$stream$2f$dist$2f$esm$2f$solana$2f$StreamClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@streamflow/stream/dist/esm/solana/StreamClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
const getStreamsByMint = async (mint)=>{
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$streamflow$2f$stream$2f$dist$2f$esm$2f$solana$2f$StreamClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaStreamClient"](("TURBOPACK compile-time value", "https://mainnet.helius-rpc.com/?api-key=5b476d89-5514-4f8c-8238-066c06008780"));
    const stream = await client.searchStreams({
        mint: mint
    });
    return stream;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/streamflow/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/streamflow/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$streamflow$2f$get$2d$streams$2d$by$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/streamflow/get-streams-by-mint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$streamflow$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/streamflow/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/wallet-address.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$streamflow$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/streamflow/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$streamflow$2f$get$2d$streams$2d$by$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/streamflow/get-streams-by-mint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const GetTopHolders = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Top Holders...`,
        result: {
            heading: (result)=>result.body ? `Fetched Top 20 Holders` : `Failed to fetch top holders`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopHolders, {
                    body: result.body,
                    mint: tool.args.tokenAddress
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                    lineNumber: 36,
                    columnNumber: 23
                }, void 0) : "No top holders found"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
_c = GetTopHolders;
const TopHolders = ({ body, mint })=>{
    _s();
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [streamflowAccounts, setStreamflowAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopHolders.useEffect": ()=>{
            const fetchStreamflowAccounts = {
                "TopHolders.useEffect.fetchStreamflowAccounts": async ()=>{
                    const accounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$streamflow$2f$get$2d$streams$2d$by$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStreamsByMint"])(mint);
                    setStreamflowAccounts(accounts);
                }
            }["TopHolders.useEffect.fetchStreamflowAccounts"];
            fetchStreamflowAccounts();
        }
    }["TopHolders.useEffect"], [
        mint
    ]);
    const knownAddressesWithStreamflow = streamflowAccounts.reduce((acc, account)=>{
        acc[account.account.escrowTokens] = {
            name: "Streamflow Vault",
            logo: "/vesting/streamflow.png"
        };
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-md",
                children: [
                    (body.percentageOwned * 100).toFixed(2),
                    "% of the total supply is owned by the top 20 holders"
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: body.topHolders.slice(0, showAll ? body.topHolders.length : 5).map((topHolder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopHolder, {
                        topHolder: topHolder,
                        index: index,
                        knownAddresses: knownAddressesWithStreamflow
                    }, topHolder.owner, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                onClick: ()=>setShowAll(!showAll),
                children: showAll ? "Show Less" : "Show All"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
};
_s(TopHolders, "1B1XZJ+PkkXZPbfJ61By4IybYF8=");
_c1 = TopHolders;
const TopHolder = ({ topHolder, index, knownAddresses })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-row items-center gap-2 p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: [
                    index + 1,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    knownAddresses[topHolder.owner] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: knownAddresses[topHolder.owner].logo,
                                alt: knownAddresses[topHolder.owner].name,
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                                lineNumber: 102,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold",
                                children: knownAddresses[topHolder.owner].name
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                                lineNumber: 108,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                        lineNumber: 101,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        address: topHolder.owner,
                        className: "text-sm font-bold"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                        lineNumber: 113,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        children: [
                            topHolder.uiAmount.toLocaleString(),
                            " (",
                            topHolder.percentageOwned.toFixed(2),
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
};
_c2 = TopHolder;
const __TURBOPACK__default__export__ = GetTopHolders;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "GetTopHolders");
__turbopack_refresh__.register(_c1, "TopHolders");
__turbopack_refresh__.register(_c2, "TopHolder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/wallet-address.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const GetTopTraders = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Top Traders...`,
        result: {
            heading: (result)=>result.body ? `Fetched Top Traders (${tool.args.timeFrame[0].toUpperCase() + tool.args.timeFrame.slice(1)})` : `Failed to fetch top traders`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopTraders, {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                    lineNumber: 28,
                    columnNumber: 23
                }, void 0) : "No top traders found"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
_c = GetTopTraders;
const TopTraders = ({ body })=>{
    _s();
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col gap-2 w-full p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "w-16 text-center",
                                    children: "Rank"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Trader"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "PNL"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Volume"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: body.traders.slice(0, showAll ? body.traders.length : 5).map((trader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "flex flex-col items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            address: trader.address,
                                            className: "font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "text-green-500",
                                        children: [
                                            "$",
                                            trader.pnl.toLocaleString(undefined, {
                                                maximumFractionDigits: 2,
                                                minimumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                        lineNumber: 62,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: [
                                            "$",
                                            trader.volume.toLocaleString(undefined, {
                                                maximumFractionDigits: 2,
                                                minimumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, trader.address, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                onClick: ()=>setShowAll(!showAll),
                children: showAll ? "Show Less" : "Show All"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
};
_s(TopTraders, "XC0nqMp5RnZIWkiCcJL//MdTvak=");
_c1 = TopTraders;
const __TURBOPACK__default__export__ = GetTopTraders;
var _c, _c1;
__turbopack_refresh__.register(_c, "GetTopTraders");
__turbopack_refresh__.register(_c1, "TopTraders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/bubble-maps/call-body.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const BubbleMapsCallBody = ({ toolCallId, args })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BubbleMapsCallBody.useEffect": ()=>{
            const checkBubbleMaps = {
                "BubbleMapsCallBody.useEffect.checkBubbleMaps": async ()=>{
                    await fetch(`https://api-legacy.bubblemaps.io/map-availability?chain=sol&token=${args.contractAddress}`).then({
                        "BubbleMapsCallBody.useEffect.checkBubbleMaps": (res)=>res.json()
                    }["BubbleMapsCallBody.useEffect.checkBubbleMaps"]).then({
                        "BubbleMapsCallBody.useEffect.checkBubbleMaps": (data)=>{
                            if (data.status === "OK") {
                                if (data.availability == true) {
                                    addToolResult(toolCallId, {
                                        message: "Bubble Maps are available and shown to the user",
                                        body: {
                                            success: true,
                                            message: "Bubble Maps are available and shown to the user"
                                        }
                                    });
                                } else {
                                    addToolResult(toolCallId, {
                                        message: "Bubble Maps are not available for this token"
                                    });
                                }
                            } else {
                                addToolResult(toolCallId, {
                                    message: data.message,
                                    body: {
                                        success: false
                                    }
                                });
                            }
                        }
                    }["BubbleMapsCallBody.useEffect.checkBubbleMaps"]).catch({
                        "BubbleMapsCallBody.useEffect.checkBubbleMaps": (err)=>{
                            console.error(err);
                            addToolResult(toolCallId, {
                                message: "Error fetching Bubble Maps",
                                body: {
                                    success: false,
                                    message: "Error fetching Bubble Maps"
                                }
                            });
                        }
                    }["BubbleMapsCallBody.useEffect.checkBubbleMaps"]);
                }
            }["BubbleMapsCallBody.useEffect.checkBubbleMaps"];
            checkBubbleMaps();
        }
    }["BubbleMapsCallBody.useEffect"], [
        args
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "h-10 w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/bubble-maps/call-body.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
};
_s(BubbleMapsCallBody, "D1YiNBi42OxM2PrJxAEcZro47gk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = BubbleMapsCallBody;
const __TURBOPACK__default__export__ = BubbleMapsCallBody;
var _c;
__turbopack_refresh__.register(_c, "BubbleMapsCallBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/bubble-maps/result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const BubbleMapsResult = ({ contractAddress })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
        className: "w-[500px] h-[500px] max-w-full rounded-md",
        src: `https://app.bubblemaps.io/sol/token/${contractAddress}`
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/bubble-maps/result.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
_c = BubbleMapsResult;
const __TURBOPACK__default__export__ = BubbleMapsResult;
var _c;
__turbopack_refresh__.register(_c, "BubbleMapsResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$call$2d$body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/bubble-maps/call-body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/bubble-maps/result.tsx [app-client] (ecmascript)");
;
;
;
;
const BubbleMaps = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: "Staking...",
        result: {
            heading: (result)=>result.body ? "Bubble Maps Complete" : "Failed to Get Bubble Maps",
            body: (result)=>result.body && result.body.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    contractAddress: tool.args.contractAddress
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx",
                    lineNumber: 28,
                    columnNumber: 23
                }, void 0) : result.message
        },
        call: {
            heading: "Get Bubble Maps",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$call$2d$body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, void 0)
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
_c = BubbleMaps;
const __TURBOPACK__default__export__ = BubbleMaps;
var _c;
__turbopack_refresh__.register(_c, "BubbleMaps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
;
;
const NumHolders = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Token Holders...`,
        result: {
            heading: (result)=>result.body ? `Fetched Token Holders` : `Failed to fetch token holders`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        result.body.numHolders.toLocaleString(),
                        " Total Holders"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx",
                    lineNumber: 26,
                    columnNumber: 25
                }, void 0) : "No token holders found"
        },
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
_c = NumHolders;
const __TURBOPACK__default__export__ = NumHolders;
var _c;
__turbopack_refresh__.register(_c, "NumHolders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const GetTrades = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: "Getting Trades...",
        result: {
            heading: (result)=>result.body ? `Recent Trades` : `Failed to fetch trades`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TradesTable, {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                    lineNumber: 25,
                    columnNumber: 23
                }, void 0) : "No trades found"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
_c = GetTrades;
const TradesTable = ({ body })=>{
    _s();
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tokens = Object.entries(body.tokensTraded).sort((a, b)=>b[1].usdChange - a[1].usdChange);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col gap-2 w-full p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Asset"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Volume"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Balance Change"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Value Change"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: tokens.slice(0, showAll ? tokens.length : 5).map(([address, trade])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: trade.token.logoURI,
                                                    alt: trade.token.symbol,
                                                    width: 24,
                                                    height: 24,
                                                    className: "rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: trade.token.symbol
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                            lineNumber: 54,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col w-full gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: [
                                                                (trade.volume.sell / (trade.volume.buy + trade.volume.sell) * 100).toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-500",
                                                            children: [
                                                                (trade.volume.buy / (trade.volume.buy + trade.volume.sell) * 100).toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex w-full h-1 bg-neutral-800 rounded-full overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-red-500 h-full",
                                                            style: {
                                                                width: `${trade.volume.sell / (trade.volume.buy + trade.volume.sell) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-green-500 h-full",
                                                            style: {
                                                                width: `${trade.volume.buy / (trade.volume.buy + trade.volume.sell) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: new Intl.NumberFormat('en-US', {
                                                                notation: 'compact',
                                                                maximumFractionDigits: 1
                                                            }).format(trade.volume.sell)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-500",
                                                            children: new Intl.NumberFormat('en-US', {
                                                                notation: 'compact',
                                                                maximumFractionDigits: 1
                                                            }).format(trade.volume.buy)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: trade.balanceChange >= 0 ? "text-green-500" : "text-red-500",
                                        children: [
                                            trade.balanceChange > 0 ? "+" : "",
                                            trade.balanceChange.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: trade.usdChange >= 0 ? "text-green-500" : "text-red-500",
                                        children: [
                                            trade.usdChange > 0 ? "+" : "-",
                                            "$",
                                            Math.abs(trade.usdChange).toLocaleString(undefined, {
                                                maximumFractionDigits: 2
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, address, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            tokens.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                onClick: ()=>setShowAll(!showAll),
                children: showAll ? "Show Less" : "Show All"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
};
_s(TradesTable, "XC0nqMp5RnZIWkiCcJL//MdTvak=");
_c1 = TradesTable;
const __TURBOPACK__default__export__ = GetTrades;
var _c, _c1;
__turbopack_refresh__.register(_c, "GetTrades");
__turbopack_refresh__.register(_c1, "TradesTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/types/known-address.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AddressType": (()=>AddressType)
});
var AddressType = /*#__PURE__*/ function(AddressType) {
    AddressType["VestingVault"] = "Vesting Vault";
    AddressType["DecentralizedExchange"] = "Decentralized Exchange";
    AddressType["CentralizedExchange"] = "Centralized Exchange";
    AddressType["EOA"] = "Externally Owned Account";
    return AddressType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/known-addresses.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "knownAddresses": (()=>knownAddresses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$known$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/known-address.ts [app-client] (ecmascript)");
;
const knownAddresses = {
    "A77HErqtfN1hLLpvZ9pCtu66FEtM8BveoaKbbMoZ4RiR": {
        name: "BitGet Exchange",
        logo: "/exchanges/bitget.png",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$known$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressType"].CentralizedExchange
    },
    "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1": {
        name: "Raydium",
        logo: "/dexes/raydium.png",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$known$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressType"].DecentralizedExchange
    },
    "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo": {
        name: "Meteora",
        logo: "/dexes/raydium.png",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$known$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressType"].DecentralizedExchange
    },
    "u6PJ8DtQuPFnfmwHbGFULQ4u4EgjDiyYKjVEsynXq2w": {
        name: "Gate.io",
        logo: "/exchanges/gate.png",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$known$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressType"].CentralizedExchange
    },
    "5PAhQiYdLBd6SVdjzBQDxUAEFyDdF5ExNPQfcscnPRj5": {
        name: "MEXC",
        logo: "/exchanges/mexc.png",
        type: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$known$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddressType"].CentralizedExchange
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/wallet-address.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$known$2d$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/known-addresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const GetTopTokenTraders = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Top Traders...`,
        result: {
            heading: (result)=>result.body ? `Fetched Top Traders (${tool.args.timeFrame[0].toUpperCase() + tool.args.timeFrame.slice(1)})` : `Failed to fetch top traders`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopTokenTraders, {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                    lineNumber: 32,
                    columnNumber: 23
                }, void 0) : "No top traders found"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
};
_c = GetTopTokenTraders;
const TopTokenTraders = ({ body })=>{
    _s();
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex flex-col gap-2 w-full p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "w-16 text-center",
                                    children: "Rank"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Trader"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Trades"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-center",
                                    children: "Volume"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: body.topTraders.slice(0, showAll ? body.topTraders.length : 5).map((trader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$known$2d$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["knownAddresses"][trader.owner] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$known$2d$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["knownAddresses"][trader.owner].logo,
                                                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$known$2d$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["knownAddresses"][trader.owner].name,
                                                    width: 16,
                                                    height: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$known$2d$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["knownAddresses"][trader.owner].name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                            lineNumber: 62,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                address: trader.owner,
                                                className: "font-medium"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                lineNumber: 75,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                            lineNumber: 74,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col w-full gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: [
                                                                (trader.tradeSell / (trader.tradeBuy + trader.tradeSell) * 100).toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-500",
                                                            children: [
                                                                (trader.tradeBuy / (trader.tradeBuy + trader.tradeSell) * 100).toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex w-full h-1 bg-neutral-800 rounded-full overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-red-500 h-full",
                                                            style: {
                                                                width: `${trader.tradeSell / (trader.tradeBuy + trader.tradeSell) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-green-500 h-full",
                                                            style: {
                                                                width: `${trader.tradeBuy / (trader.tradeBuy + trader.tradeSell) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: trader.tradeSell.toLocaleString(undefined, {
                                                                maximumFractionDigits: 0
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-500",
                                                            children: trader.tradeBuy.toLocaleString(undefined, {
                                                                maximumFractionDigits: 0
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col w-full gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-500",
                                                            children: [
                                                                (trader.volumeBuy / (trader.volumeBuy + trader.volumeSell) * 100).toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: [
                                                                (trader.volumeSell / (trader.volumeBuy + trader.volumeSell) * 100).toFixed(2),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex w-full h-1 bg-neutral-800 rounded-full overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-green-500 h-full",
                                                            style: {
                                                                width: `${trader.volumeBuy / (trader.volumeBuy + trader.volumeSell) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-red-500 h-full",
                                                            style: {
                                                                width: `${trader.volumeSell / (trader.volumeBuy + trader.volumeSell) * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-500",
                                                            children: new Intl.NumberFormat('en-US', {
                                                                notation: 'compact',
                                                                maximumFractionDigits: 1
                                                            }).format(trader.volumeBuy)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: new Intl.NumberFormat('en-US', {
                                                                notation: 'compact',
                                                                maximumFractionDigits: 1
                                                            }).format(trader.volumeSell)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, trader.owner, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                onClick: ()=>setShowAll(!showAll),
                children: showAll ? "Show Less" : "Show All"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
};
_s(TopTokenTraders, "XC0nqMp5RnZIWkiCcJL//MdTvak=");
_c1 = TopTokenTraders;
const __TURBOPACK__default__export__ = GetTopTokenTraders;
var _c, _c1;
__turbopack_refresh__.register(_c, "GetTopTokenTraders");
__turbopack_refresh__.register(_c1, "TopTokenTraders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/hellomoon/types/base-response.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/hellomoon/types/candlestick.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CandlestickGranularity": (()=>CandlestickGranularity)
});
var CandlestickGranularity = /*#__PURE__*/ function(CandlestickGranularity) {
    CandlestickGranularity["ONE_MIN"] = "ONE_MIN";
    CandlestickGranularity["FIVE_MIN"] = "FIVE_MIN";
    CandlestickGranularity["ONE_HOUR"] = "ONE_HOUR";
    CandlestickGranularity["ONE_DAY"] = "ONE_DAY";
    CandlestickGranularity["ONE_WEEK"] = "ONE_WEEK";
    return CandlestickGranularity;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/hellomoon/types/smart-money.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Granularity": (()=>Granularity)
});
var Granularity = /*#__PURE__*/ function(Granularity) {
    Granularity["THIRTY_MIN"] = "THIRTY_MIN";
    Granularity["ONE_HOUR"] = "ONE_HOUR";
    Granularity["SIX_HOUR"] = "SIX_HOUR";
    Granularity["HALF_DAY"] = "HALF_DAY";
    Granularity["ONE_DAY"] = "ONE_DAY";
    Granularity["ONE_WEEK"] = "ONE_WEEK";
    Granularity["ONE_MONTH"] = "ONE_MONTH";
    return Granularity;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/hellomoon/types/token-users-over-time.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/hellomoon/types/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/hellomoon/types/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$base$2d$response$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/hellomoon/types/base-response.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/hellomoon/types/candlestick.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$smart$2d$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/hellomoon/types/smart-money.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$token$2d$users$2d$over$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/hellomoon/types/token-users-over-time.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/hellomoon/types/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/_components/token/chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/hellomoon/types/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/hellomoon/types/candlestick.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$use$2d$price$2d$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/price/use-price-chart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$candlestick$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/candlestick-chart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const WINDOWS = [
    {
        label: '6h',
        timeframe: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].ONE_MIN,
        numDays: 1 / 4
    },
    {
        label: '12h',
        timeframe: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].ONE_MIN,
        numDays: 1 / 12
    },
    {
        label: '1d',
        timeframe: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].FIVE_MIN,
        numDays: 1
    },
    {
        label: '3d',
        timeframe: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].FIVE_MIN,
        numDays: 3
    },
    {
        label: '7d',
        timeframe: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].ONE_HOUR,
        numDays: 7
    },
    {
        label: '30d',
        timeframe: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].ONE_HOUR,
        numDays: 30
    }
];
const TokenChart = ({ mint })=>{
    _s();
    const [timeframe, setTimeframe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$hellomoon$2f$types$2f$candlestick$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickGranularity"].FIVE_MIN);
    const [numDays, setNumDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$use$2d$price$2d$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePriceChart"])(mint, timeframe, numDays);
    const price = data.length > 0 ? data[data.length - 1].close : 0;
    const open = data.length > 0 ? data[0].open : 0;
    const change = (price - open) / open * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:justify-between md:items-center gap-1 bg-neutral-100 dark:bg-neutral-700 p-2",
                children: [
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-24"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/token/chart.tsx",
                        lineNumber: 67,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md md:text-lg font-bold",
                        children: [
                            "$",
                            data[data.length - 1].close.toLocaleString(undefined, {
                                maximumFractionDigits: 5
                            }),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(change > 0 ? 'text-green-500' : 'text-red-500'),
                                children: [
                                    "(",
                                    change > 0 ? '+' : '',
                                    change.toLocaleString(undefined, {
                                        maximumFractionDigits: 2
                                    }),
                                    "%)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/_components/token/chart.tsx",
                                lineNumber: 70,
                                columnNumber: 116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/_components/token/chart.tsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-1",
                        children: WINDOWS.map((window)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    setNumDays(window.numDays);
                                    setTimeframe(window.timeframe);
                                },
                                variant: numDays === window.numDays && timeframe === window.timeframe ? 'brand' : 'ghost',
                                className: "text-sm h-fit w-fit px-1 py-0.5",
                                children: window.label
                            }, window.label, false, {
                                fileName: "[project]/app/(app)/_components/token/chart.tsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/_components/token/chart.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/_components/token/chart.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 flex-1 h-0",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/token/chart.tsx",
                    lineNumber: 95,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$candlestick$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickChart"], {
                    data: data.map((price)=>({
                            time: price.timestamp,
                            open: price.open,
                            high: price.high,
                            low: price.low,
                            close: price.close
                        }))
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/token/chart.tsx",
                    lineNumber: 97,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/_components/token/chart.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/_components/token/chart.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
};
_s(TokenChart, "uCku/baey7OgQLcmEyT5oPWFvQ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$price$2f$use$2d$price$2d$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePriceChart"]
    ];
});
_c = TokenChart;
const __TURBOPACK__default__export__ = TokenChart;
var _c;
__turbopack_refresh__.register(_c, "TokenChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$token$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/token/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/token/use-token-metadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const PriceChart = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Token Price Chart...`,
        result: {
            heading: (result)=>result.body ? `Fetched Token Price Chart` : `Failed to fetch token price chart`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceChartBody, {
                    tokenAddress: tool.args.tokenAddress
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                    lineNumber: 29,
                    columnNumber: 23
                }, void 0) : "No token price chart found"
        },
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
};
_c = PriceChart;
const PriceChartBody = ({ tokenAddress })=>{
    _s();
    const { data: tokenMetadata, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenMetadata"])(tokenAddress);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-2",
        children: [
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "w-full h-8"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                lineNumber: 46,
                columnNumber: 21
            }, this) : tokenMetadata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: tokenMetadata.logo_uri,
                        alt: tokenMetadata.name,
                        className: "rounded-full h-8 w-8"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                        lineNumber: 50,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold",
                        children: [
                            tokenMetadata.name,
                            " ($",
                            tokenMetadata.symbol,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                        lineNumber: 55,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                lineNumber: 49,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$token$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mint: tokenAddress
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
};
_s(PriceChartBody, "IMbVtJeWTyf6HRZjYtF1PkpOu1g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$metadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenMetadata"]
    ];
});
_c1 = PriceChartBody;
const __TURBOPACK__default__export__ = PriceChart;
var _c, _c1;
__turbopack_refresh__.register(_c, "PriceChart");
__turbopack_refresh__.register(_c1, "PriceChartBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/save-token.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const SmartMoneyToken = ({ inflow, token, price })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/token/${token.address}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "flex flex-col gap-2 p-2 justify-center hover:border-brand-600 dark:hover:border-brand-600 transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center gap-2 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: token.logo_uri,
                                    alt: token.name,
                                    className: "w-10 h-10 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold",
                                            children: [
                                                token.name,
                                                " (",
                                                token.symbol,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                                            lineNumber: 32,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "$",
                                                price.value.toLocaleString(undefined, {
                                                    maximumFractionDigits: 5
                                                }),
                                                " ",
                                                price.priceChange24h !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: price.priceChange24h > 0 ? 'text-green-500' : 'text-red-500',
                                                    children: [
                                                        "(",
                                                        price.priceChange24h > 0 ? '+' : '',
                                                        price.priceChange24h.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        }),
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 175
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                                            lineNumber: 33,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$save$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            address: token.address
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            "Net inflow: $",
                            inflow.smartMoneyNetInflow?.toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
};
_c = SmartMoneyToken;
const __TURBOPACK__default__export__ = SmartMoneyToken;
var _c;
__turbopack_refresh__.register(_c, "SmartMoneyToken");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$smart$2d$money$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/smart-money/smart-money-token.tsx [app-client] (ecmascript)");
;
;
;
const SmartMoneyInflows = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Smart Money Inflows...`,
        result: {
            heading: (result)=>result.body ? `Fetched Smart Money Inflows` : `Failed to fetch smart money inflows`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                    children: result.body.tokens.map((token)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$smart$2d$money$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ...token
                        }, token.inflow.mint, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx",
                            lineNumber: 30,
                            columnNumber: 33
                        }, void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx",
                    lineNumber: 28,
                    columnNumber: 25
                }, void 0) : "No balance found"
        },
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = SmartMoneyInflows;
const __TURBOPACK__default__export__ = SmartMoneyInflows;
var _c;
__turbopack_refresh__.register(_c, "SmartMoneyInflows");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx [app-client] (ecmascript) <export default as RaydiumPool>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RaydiumPool": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$raydium$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$raydium$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$raydium$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RaydiumPool$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/liquidity/raydium-pool.tsx [app-client] (ecmascript) <export default as RaydiumPool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const GetPoolsResult = ({ body })=>{
    _s();
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: body.pools.slice(0, showAll ? body.pools.length : 1).map((pool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$liquidity$2f$raydium$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RaydiumPool$3e$__["RaydiumPool"], {
                        pool: pool.pool,
                        pair: pool.pair
                    }, pool.pool.id, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/result.tsx",
                        lineNumber: 22,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/result.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            body.pools.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                onClick: ()=>setShowAll(!showAll),
                children: showAll ? "Show Less" : `Show ${body.pools.length - 1} More Pools`
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/result.tsx",
                lineNumber: 32,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/result.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_s(GetPoolsResult, "XC0nqMp5RnZIWkiCcJL//MdTvak=");
_c = GetPoolsResult;
const __TURBOPACK__default__export__ = GetPoolsResult;
var _c;
__turbopack_refresh__.register(_c, "GetPoolsResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/result.tsx [app-client] (ecmascript)");
;
;
;
const GetPools = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Liquidity Pools...`,
        result: {
            heading: (result)=>result.body?.pools ? `Fetched ${result.body.pools.length} Pools` : `Failed to fetch pools`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, void 0) : "No pools found"
        },
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = GetPools;
const __TURBOPACK__default__export__ = GetPools;
var _c;
__turbopack_refresh__.register(_c, "GetPools");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "raydiumApiClient": (()=>raydiumApiClient),
    "raydiumTransactionClient": (()=>raydiumTransactionClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@raydium-io/raydium-sdk-v2/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
const raydiumApiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raydium"].load({
    connection: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"](("TURBOPACK compile-time value", "https://mainnet.helius-rpc.com/?api-key=5b476d89-5514-4f8c-8238-066c06008780"))
});
const raydiumTransactionClient = async (address)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raydium"].load({
        connection: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"](("TURBOPACK compile-time value", "https://mainnet.helius-rpc.com/?api-key=5b476d89-5514-4f8c-8238-066c06008780"), {
            commitment: 'confirmed',
            confirmTransactionInitialTimeout: 60000
        }),
        owner: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](address),
        disableFeatureCheck: true,
        blockhashCommitment: 'confirmed'
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/get-pools.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRaydiumPoolById": (()=>getRaydiumPoolById),
    "getRaydiumPoolsByMint": (()=>getRaydiumPoolsByMint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/client.ts [app-client] (ecmascript)");
;
const getRaydiumPoolsByMint = async (mint)=>{
    const { data } = await (await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumApiClient"]).api.fetchPoolByMints({
        mint1: mint
    });
    return data;
};
const getRaydiumPoolById = async (id)=>{
    const data = await (await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumApiClient"]).api.fetchPoolById({
        ids: id
    });
    return data[0];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/open-lp-position.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "openStandardLPPosition": (()=>openStandardLPPosition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@raydium-io/raydium-sdk-v2/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/get-pools.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/decimal.js/decimal.mjs [app-client] (ecmascript)");
;
;
;
;
const openStandardLPPosition = async ({ poolId, address, inputAmount, baseIn, slippage })=>{
    try {
        const poolInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRaydiumPoolById"])(poolId);
        if (!poolInfo) {
            throw new Error("Pool not found");
        }
        if (poolInfo.type !== "Standard") {
            throw new Error("Pool is not a standard pool");
        }
        const transactionClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumTransactionClient"])(address);
        const { minAnotherAmount, maxAnotherAmount, anotherAmount } = transactionClient.liquidity.computePairAmount({
            poolInfo: poolInfo,
            amount: inputAmount,
            slippage,
            baseIn
        });
        const { execute, transaction } = await transactionClient.liquidity.addLiquidity({
            poolInfo: poolInfo,
            amountInA: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenAmount"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toToken"])(poolInfo.mintA), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](inputAmount).mul(10 ** poolInfo.mintA.decimals).toFixed(0)),
            amountInB: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenAmount"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toToken"])(poolInfo.mintB), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](anotherAmount.toExact()).mul(10 ** poolInfo.mintB.decimals).toFixed(0)),
            otherAmountMin: minAnotherAmount,
            fixedSide: "a",
            txVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TxVersion"].V0
        });
        // Optional: Execute the transaction
        // const { txId } = await execute({ sendAndConfirm: true });
        return {
            execute,
            transaction
        };
    } catch (error) {
        console.error("Error in openStandardLPPosition:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/addresses.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "raydiumAuthorityAddress": (()=>raydiumAuthorityAddress)
});
const raydiumAuthorityAddress = "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/get-pool-from-lp-mint.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getPoolFromLpMint": (()=>getPoolFromLpMint)
});
const getPoolFromLpMint = async (lpMint)=>{
    const response = await fetch(`https://api-v3.raydium.io/pools/info/lps?lps=${lpMint}`, {
        headers: {
            'accept': 'application/json'
        }
    });
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    if (data.success) {
        return data.data[0] || null;
    }
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/path.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "heliusPath": (()=>heliusPath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const heliusPath = `https://mainnet.helius-rpc.com/?api-key=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HELIUS_API_KEY}`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/queries/get-token-accounts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTokenAccountsByMint": (()=>getTokenAccountsByMint),
    "getTokenAccountsByOwner": (()=>getTokenAccountsByOwner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/path.ts [app-client] (ecmascript)");
;
const getTokenAccountsByOwner = async (address, limit)=>{
    try {
        let allTokenAccounts = [];
        let currentPage = 1;
        const PAGE_SIZE = 1000;
        while(true){
            const { result } = await (await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heliusPath"], {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": 1,
                    "method": "getTokenAccounts",
                    "params": {
                        "owner": address,
                        "page": currentPage,
                        "limit": PAGE_SIZE
                    }
                })
            })).json();
            const tokenAccounts = result.token_accounts;
            if (!tokenAccounts || tokenAccounts.length === 0) break;
            allTokenAccounts = [
                ...allTokenAccounts,
                ...tokenAccounts
            ];
            // If we have a limit and we've reached or exceeded it, slice and break
            if (limit && allTokenAccounts.length >= limit) {
                allTokenAccounts = allTokenAccounts.slice(0, limit);
                break;
            }
            // If we got less than PAGE_SIZE results, we've reached the end
            if (tokenAccounts.length < PAGE_SIZE) break;
            currentPage++;
        }
        return allTokenAccounts;
    } catch (error) {
        return [];
    }
};
const getTokenAccountsByMint = async (mint, limit)=>{
    try {
        let allTokenAccounts = [];
        let currentPage = 1;
        const PAGE_SIZE = 1000;
        while(true){
            const { result } = await (await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heliusPath"], {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": 1,
                    "method": "getTokenAccounts",
                    "params": {
                        "mint": mint,
                        "page": currentPage,
                        "limit": PAGE_SIZE
                    }
                })
            })).json();
            const tokenAccounts = result.token_accounts;
            if (!tokenAccounts || tokenAccounts.length === 0) break;
            allTokenAccounts = [
                ...allTokenAccounts,
                ...tokenAccounts
            ];
            // If we have a limit and we've reached or exceeded it, slice and break
            if (limit && allTokenAccounts.length >= limit) {
                allTokenAccounts = allTokenAccounts.slice(0, limit);
                break;
            }
            // If we got less than PAGE_SIZE results, we've reached the end
            if (tokenAccounts.length < PAGE_SIZE) break;
            currentPage++;
        }
        return allTokenAccounts;
    } catch (error) {
        return [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/queries/get-token-largest-accounts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTokenLargestAccounts": (()=>getTokenLargestAccounts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/path.ts [app-client] (ecmascript)");
;
const getTokenLargestAccounts = async (mintAddress)=>{
    try {
        const { result } = await (await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heliusPath"], {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: 1,
                method: "getTokenLargestAccounts",
                params: [
                    mintAddress
                ]
            })
        })).json();
        return result.value;
    } catch (error) {
        return [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/queries/get-transaction-history.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionHistory": (()=>getTransactionHistory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const getTransactionHistory = async (address)=>{
    const response = await fetch(`https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.HELIUS_API_KEY}`, {
        method: 'GET',
        headers: {}
    });
    const data = await response.json();
    return data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/queries/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/queries/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$get$2d$token$2d$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/queries/get-token-accounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$get$2d$token$2d$largest$2d$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/queries/get-token-largest-accounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$get$2d$transaction$2d$history$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/queries/get-transaction-history.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/helius/queries/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/services/helius/types/token-account.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/types/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/types/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$types$2f$token$2d$account$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/types/token-account.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/helius/types/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/services/helius/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/helius/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/helius/queries/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/helius/types/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/helius/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/services/raydium/get-lp-tokens-by-address.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLpTokensByAddress": (()=>getLpTokensByAddress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/addresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$pool$2d$from$2d$lp$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/get-pool-from-lp-mint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/helius/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$get$2d$token$2d$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/helius/queries/get-token-accounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/spl-token/lib/esm/state/mint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
;
;
;
const getLpTokensByAddress = async (address)=>{
    const tokenAccounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$helius$2f$queries$2f$get$2d$token$2d$accounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenAccountsByOwner"])(address);
    const mintData = await Promise.all(tokenAccounts.map(async (tokenAccount)=>{
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$spl$2d$token$2f$lib$2f$esm$2f$state$2f$mint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMint"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Connection"](("TURBOPACK compile-time value", "https://mainnet.helius-rpc.com/?api-key=5b476d89-5514-4f8c-8238-066c06008780")), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](tokenAccount.mint));
        return token;
    }));
    const lpTokens = tokenAccounts.map((tokenAccount, index)=>({
            tokenAccount,
            mintData: mintData[index]
        })).filter((token)=>token.mintData.mintAuthority?.toBase58() === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumAuthorityAddress"]);
    return (await Promise.all(lpTokens.map(async (lpToken)=>{
        const pool = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$pool$2d$from$2d$lp$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPoolFromLpMint"])(lpToken.tokenAccount.mint);
        return pool ? {
            pool,
            mint: lpToken.tokenAccount.mint,
            amount: lpToken.tokenAccount.amount,
            decimals: lpToken.mintData.decimals
        } : null;
    }))).filter((item)=>item !== null);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/services/raydium/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/get-pools.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$open$2d$lp$2d$position$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/open-lp-position.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$addresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/addresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$pool$2d$from$2d$lp$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/get-pool-from-lp-mint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$get$2d$lp$2d$tokens$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/get-lp-tokens-by-address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/services/raydium/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@raydium-io/raydium-sdk-v2/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/decimal.js/decimal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/log-in-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/token-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/raydium/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/privy/use-send-transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/token/use-token-data-by-address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/solana/use-token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const StandardPool = ({ pool, toolCallId })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const [amountA, setAmountA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amountB, setAmountB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amountsLoading, setAmountsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [baseIn, setBaseIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [otherAmountMin, setOtherAmountMin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDepositing, setIsDepositing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slippage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Percent"](100, 1000));
    const { sendTransaction, wallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const { data: mintA } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(pool.mintA.address);
    const { data: mintB } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(pool.mintB.address);
    const { balance: balanceA, isLoading: isBalanceALoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"])(pool.mintA.address, wallet?.address ?? "");
    const { balance: balanceB, isLoading: isBalanceBLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"])(pool.mintB.address, wallet?.address ?? "");
    const handleAmountAChange = async (amount)=>{
        setAmountA(amount);
        setAmountsLoading(true);
        const raydium = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumApiClient"];
        const { maxAnotherAmount, minAnotherAmount } = raydium.liquidity.computePairAmount({
            poolInfo: pool,
            amount: amount,
            slippage,
            baseIn: true
        });
        setAmountB(maxAnotherAmount.toExact());
        setOtherAmountMin(minAnotherAmount.toExact());
        setBaseIn(true);
        setAmountsLoading(false);
    };
    const handleAmountBChange = async (amount)=>{
        setAmountB(amount);
        setAmountsLoading(true);
        const raydium = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumApiClient"];
        const { maxAnotherAmount, minAnotherAmount } = raydium.liquidity.computePairAmount({
            poolInfo: pool,
            amount: amount,
            slippage,
            baseIn: false
        });
        setAmountA(maxAnotherAmount.toExact());
        setOtherAmountMin(minAnotherAmount.toExact());
        setBaseIn(false);
        setAmountsLoading(false);
    };
    const onSubmit = async ()=>{
        if (!wallet || !wallet.address) return;
        setIsDepositing(true);
        try {
            const raydium = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumTransactionClient"])(wallet.address);
            const { transaction } = await raydium.liquidity.addLiquidity({
                poolInfo: pool,
                amountInA: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenAmount"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toToken"])(pool.mintA), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](amountA).mul(10 ** pool.mintA.decimals).toFixed(0)),
                amountInB: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenAmount"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toToken"])(pool.mintB), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](amountB).mul(10 ** pool.mintB.decimals).toFixed(0)),
                otherAmountMin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenAmount"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toToken"])(baseIn ? pool.mintA : pool.mintB), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](otherAmountMin).mul(10 ** (baseIn ? pool.mintA.decimals : pool.mintB.decimals)).toFixed(0)),
                fixedSide: baseIn ? "a" : "b",
                txVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TxVersion"].V0
            });
            const transactionBuffer = transaction.serialize();
            const versionedTransaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VersionedTransaction"].deserialize(transactionBuffer);
            const txHash = await sendTransaction(versionedTransaction);
            addToolResult(toolCallId, {
                message: "Deposit liquidity successful. The user is shown the transaction hash, so you do not have to repeat it. Ask what they want to do next.",
                body: {
                    transaction: txHash
                }
            });
        } catch (error) {
            console.error(error);
            addToolResult(toolCallId, {
                message: `Failed to deposit liquidity: ${error instanceof Error ? error.message : "Unknown error"}`
            });
        }
        setIsDepositing(false);
    };
    const onCancel = ()=>{
        addToolResult(toolCallId, {
            message: "Deposit liquidity cancelled"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-bold",
                        children: [
                            pool.mintA.symbol,
                            "/",
                            pool.mintB.symbol
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs opacity-50",
                                children: "7d APR"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: [
                                    pool.week.apr,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            token: mintA,
                            label: "Token A",
                            amount: amountA,
                            onChange: handleAmountAChange,
                            address: wallet?.address ?? ""
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            token: mintB,
                            label: "Token B",
                            amount: amountB,
                            onChange: handleAmountBChange,
                            address: wallet?.address ?? ""
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            wallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "brand",
                        className: "w-full",
                        disabled: !amountA || !amountB || !otherAmountMin || isDepositing || !balanceA || !balanceB || isBalanceALoading || isBalanceBLoading || Number(amountA) > Number(balanceA) || Number(amountB) > Number(balanceB) || amountsLoading,
                        onClick: onSubmit,
                        children: isBalanceALoading || isBalanceBLoading || amountsLoading ? "Loading..." : Number(amountA) > Number(balanceA) || Number(amountB) > Number(balanceB) ? "Insufficient balance" : isDepositing ? "Depositing..." : "Deposit"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                        lineNumber: 170,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "w-full",
                        onClick: onCancel,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                        lineNumber: 186,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                lineNumber: 169,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
                lineNumber: 195,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, this);
};
_s(StandardPool, "bRto4KDlujfsY1MqGa2EfSd4tdk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"]
    ];
});
_c = StandardPool;
const __TURBOPACK__default__export__ = StandardPool;
var _c;
__turbopack_refresh__.register(_c, "StandardPool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$call$2f$standard$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/standard-pool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$raydium$2f$use$2d$raydium$2d$pool$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/raydium/use-raydium-pool.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const DepositLiquidityCall = ({ toolCallId, args })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { data: pool, isLoading: isPoolLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$raydium$2f$use$2d$raydium$2d$pool$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRaydiumPool"])(args.poolId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DepositLiquidityCall.useEffect": ()=>{
            if (pool && pool.type !== "Standard") {
                addToolResult(toolCallId, {
                    message: `The Hive does not support ${pool?.type} pools yet.`
                });
            }
        }
    }["DepositLiquidityCall.useEffect"], [
        pool
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full p-2",
        children: isPoolLoading && !pool ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-48 w-96"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
            lineNumber: 39,
            columnNumber: 21
        }, this) : pool ? pool.type === "Standard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$call$2f$standard$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pool: pool,
            toolCallId: toolCallId
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
            lineNumber: 43,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "The Hive does not support ",
                    pool.type,
                    " pools yet."
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
                lineNumber: 49,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
            lineNumber: 48,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Pool not found"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
                lineNumber: 54,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
            lineNumber: 53,
            columnNumber: 25
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
_s(DepositLiquidityCall, "X+7kDjD9qNktB+capC6mdM9K8mA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$raydium$2f$use$2d$raydium$2d$pool$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRaydiumPool"]
    ];
});
_c = DepositLiquidityCall;
const __TURBOPACK__default__export__ = DepositLiquidityCall;
var _c;
__turbopack_refresh__.register(_c, "DepositLiquidityCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/transaction-hash.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const TransactionHash = ({ hash, className, hideTransactionText })=>{
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(hash);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row gap-1 items-center",
        children: [
            !hideTransactionText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: "Transaction:"
            }, void 0, false, {
                fileName: "[project]/app/_components/transaction-hash.tsx",
                lineNumber: 34,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm cursor-pointer text-brand-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md w-fit px-1", className),
                                onClick: handleCopy,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncateAddress"])(hash)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/transaction-hash.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/transaction-hash.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            side: "bottom",
                            className: "p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: handleCopy,
                                        children: copied ? "Copied" : "Copy Hash"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/transaction-hash.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `https://solscan.io/tx/${hash}`,
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            children: [
                                                "Solscan ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/transaction-hash.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/transaction-hash.tsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/transaction-hash.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/transaction-hash.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/transaction-hash.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/transaction-hash.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/transaction-hash.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/transaction-hash.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
};
_s(TransactionHash, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = TransactionHash;
const __TURBOPACK__default__export__ = TransactionHash;
var _c;
__turbopack_refresh__.register(_c, "TransactionHash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$transaction$2d$hash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/transaction-hash.tsx [app-client] (ecmascript)");
'use client';
;
;
const DepositLiquidityResult = ({ body })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$transaction$2d$hash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        hash: body.transaction
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/result.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = DepositLiquidityResult;
const __TURBOPACK__default__export__ = DepositLiquidityResult;
var _c;
__turbopack_refresh__.register(_c, "DepositLiquidityResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$call$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/call/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/result.tsx [app-client] (ecmascript)");
;
;
;
;
const DepositLiquidity = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Liquidity Pools...`,
        result: {
            heading: (result)=>result.body ? `Deposited Liquidity` : `Failed to deposit liquidity`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx",
                    lineNumber: 28,
                    columnNumber: 25
                }, void 0) : result.message
        },
        prevToolAgent: prevToolAgent,
        call: {
            heading: "Deposit Liquidity",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$call$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, void 0)
        },
        className: "w-96 max-w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = DepositLiquidity;
const __TURBOPACK__default__export__ = DepositLiquidity;
var _c;
__turbopack_refresh__.register(_c, "DepositLiquidity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
'use client';
;
;
const LpToken = ({ lpToken, balance, decimals })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex items-center gap-2 p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-6 h-6 rounded-full",
                        src: lpToken.pool.mintA.logoURI,
                        alt: lpToken.pool.mintA.name
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-6 h-6 rounded-full",
                        src: lpToken.pool.mintB.logoURI,
                        alt: lpToken.pool.mintB.name
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-600 dark:text-neutral-400",
                        children: [
                            lpToken.pool.mintA.symbol,
                            "/",
                            lpToken.pool.mintB.symbol
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold",
                        children: (balance / 10 ** decimals).toLocaleString(undefined, {
                            maximumFractionDigits: 4
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = LpToken;
const __TURBOPACK__default__export__ = LpToken;
var _c;
__turbopack_refresh__.register(_c, "LpToken");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$lp$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/lp-token.tsx [app-client] (ecmascript)");
;
;
;
const GetLpTokens = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting All Balances...`,
        result: {
            heading: (result)=>result.body ? `Fetched LP Tokens` : `Failed to fetch LP tokens`,
            body: (result)=>result.body && result.body.lpTokens.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2",
                    children: result.body.lpTokens.map((lpToken)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$lp$2d$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            lpToken: lpToken,
                            balance: lpToken.amount,
                            decimals: lpToken.decimals
                        }, lpToken.mint, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx",
                            lineNumber: 30,
                            columnNumber: 33
                        }, void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx",
                    lineNumber: 28,
                    columnNumber: 25
                }, void 0) : "No LP tokens found"
        },
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = GetLpTokens;
const __TURBOPACK__default__export__ = GetLpTokens;
var _c;
__turbopack_refresh__.register(_c, "GetLpTokens");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const LpTokenInput = ({ label, amount, onChange, pool, lpMint, address })=>{
    _s();
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col border border-transparent rounded-md p-2 w-full transition-colors bg-neutral-100 dark:bg-neutral-700 gap-2", isFocused && "border-brand-600"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    pool && address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        address: address,
                        tokenAddress: lpMint,
                        tokenSymbol: `${pool.mintA.symbol}/${pool.mintB.symbol}`,
                        setAmount: onChange,
                        digits: 4
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                        lineNumber: 35,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center w-full"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            value: amount,
                            onChange: (e)=>onChange && onChange(e.target.value),
                            onFocus: ()=>setIsFocused(true),
                            onBlur: ()=>setIsFocused(false),
                            className: "w-full bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                            disabled: !onChange,
                            placeholder: "0.00"
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-fit shrink-0 flex items-center rounded-md px-2 py-1 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: pool.mintA.logoURI,
                                alt: pool.mintA.name,
                                className: "w-6 h-6 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: pool.mintB.logoURI,
                                alt: pool.mintB.name,
                                className: "w-6 h-6 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-bold", "opacity-100"),
                                children: `${pool.mintA.symbol}/${pool.mintB.symbol}`
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
};
_s(LpTokenInput, "taoS6m9NZex5dx3pinefKTdpShE=");
_c = LpTokenInput;
const __TURBOPACK__default__export__ = LpTokenInput;
var _c;
__turbopack_refresh__.register(_c, "LpTokenInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OutputToken": (()=>OutputToken),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$project$2d$serum$2f$anchor$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@project-serum/anchor/dist/browser/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@raydium-io/raydium-sdk-v2/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/decimal.js/decimal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/log-in-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$call$2f$lp$2d$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/lp-token-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/services/raydium/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/privy/use-send-transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/solana/use-token-balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/raydium/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__ = __turbopack_import__("[project]/node_modules/bn.js/lib/bn.js [app-client] (ecmascript) <export default as BN>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const StandardPool = ({ pool, toolCallId })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amountsLoading, setAmountsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [withdrawAmountA, setWithdrawAmountA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const [withdrawAmountB, setWithdrawAmountB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0");
    const [isWithdrawing, setIsWithdrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { sendTransaction, wallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const { balance, isLoading: isBalanceLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"])(pool.lpMint.address, wallet?.address ?? "");
    const handleAmountChange = async (amount)=>{
        setAmount(amount);
        setAmountsLoading(true);
        const [baseRatio, quoteRatio] = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](pool.mintAmountA).div(pool.lpAmount || 1),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](pool.mintAmountB).div(pool.lpAmount || 1)
        ];
        const withdrawAmountDe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](amount);
        const [withdrawAmountA, withdrawAmountB] = [
            withdrawAmountDe.mul(baseRatio).mul(10 ** (pool?.mintA.decimals || 0)),
            withdrawAmountDe.mul(quoteRatio).mul(10 ** (pool?.mintB.decimals || 0))
        ];
        setWithdrawAmountA(withdrawAmountA.toFixed(0));
        setWithdrawAmountB(withdrawAmountB.toFixed(0));
        setAmountsLoading(false);
    };
    const onSubmit = async ()=>{
        if (!wallet || !wallet.address) return;
        setIsWithdrawing(true);
        try {
            const lpSlippage = 0.1;
            const raydium = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$raydium$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raydiumTransactionClient"])(wallet.address);
            const { transaction } = await raydium.liquidity.removeLiquidity({
                poolInfo: pool,
                lpAmount: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](Number(amount) * 10 ** pool.lpMint.decimals),
                baseAmountMin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](withdrawAmountA).mul(1 - lpSlippage).toFixed(0)),
                quoteAmountMin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BN$3e$__["BN"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](withdrawAmountB).mul(1 - lpSlippage).toFixed(0)),
                txVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$raydium$2d$io$2f$raydium$2d$sdk$2d$v2$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TxVersion"].V0
            });
            const txHash = await sendTransaction(transaction);
            addToolResult(toolCallId, {
                message: "Withdraw liquidity successful. The user is shown the transaction hash, so you do not have to repeat it. Ask what they want to do next.",
                body: {
                    transaction: txHash
                }
            });
        } catch (error) {
            console.error(error);
        }
        setIsWithdrawing(false);
    };
    const onCancel = ()=>{
        addToolResult(toolCallId, {
            message: "Withdraw liquidity cancelled"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-bold",
                        children: [
                            pool.mintA.symbol,
                            "/",
                            pool.mintB.symbol
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs opacity-50",
                                children: "7d APR"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: [
                                    pool.week.apr,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$call$2f$lp$2d$token$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "LP Token",
                amount: amount,
                onChange: handleAmountChange,
                pool: pool,
                lpMint: pool.lpMint.address,
                address: wallet?.address ?? ""
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OutputToken, {
                                symbol: pool.mintA.symbol,
                                amount: withdrawAmountA,
                                logoURI: pool.mintA.logoURI,
                                decimals: pool.mintA.decimals
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OutputToken, {
                                symbol: pool.mintB.symbol,
                                amount: withdrawAmountB,
                                logoURI: pool.mintB.logoURI,
                                decimals: pool.mintB.decimals
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this),
            wallet ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "brand",
                        className: "w-full",
                        disabled: !amount || !withdrawAmountA || !withdrawAmountB || isWithdrawing || !balance || isBalanceLoading || Number(amount) > Number(balance) || amountsLoading,
                        onClick: onSubmit,
                        children: isBalanceLoading || amountsLoading ? "Loading..." : Number(amount) > Number(balance) ? "Insufficient balance" : isWithdrawing ? "Withdrawing..." : "Withdraw"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 143,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "w-full",
                        onClick: onCancel,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 159,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 142,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$log$2d$in$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 168,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, this);
};
_s(StandardPool, "NZ6hKUe4CMuwdtdNL3ky80o2K4g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$privy$2f$use$2d$send$2d$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendTransaction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$solana$2f$use$2d$token$2d$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalance"]
    ];
});
_c = StandardPool;
const OutputToken = ({ symbol, amount, logoURI, decimals })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 items-center bg-neutral-100 dark:bg-neutral-700 rounded-md p-2 flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: logoURI,
                alt: symbol,
                className: "w-6 h-6 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-neutral-600 dark:text-neutral-400",
                        children: symbol
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](amount).div(10 ** decimals).toNumber().toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx",
        lineNumber: 177,
        columnNumber: 9
    }, this);
};
_c1 = OutputToken;
const __TURBOPACK__default__export__ = StandardPool;
var _c, _c1;
__turbopack_refresh__.register(_c, "StandardPool");
__turbopack_refresh__.register(_c1, "OutputToken");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$call$2f$standard$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/standard-pool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$raydium$2f$use$2d$raydium$2d$pool$2d$by$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/raydium/use-raydium-pool-by-mint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const WithdrawLiquidityCall = ({ toolCallId, args })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { data: pool, isLoading: isPoolLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$raydium$2f$use$2d$raydium$2d$pool$2d$by$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRaydiumPoolByMint"])(args.mint);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WithdrawLiquidityCall.useEffect": ()=>{
            if (pool && pool.type !== "Standard") {
                addToolResult(toolCallId, {
                    message: `The Hive does not support ${pool?.type} pools yet.`
                });
            }
        }
    }["WithdrawLiquidityCall.useEffect"], [
        pool
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full p-2",
        children: isPoolLoading && !pool ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-48 w-96"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
            lineNumber: 39,
            columnNumber: 21
        }, this) : pool ? pool.type === "Standard" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$call$2f$standard$2d$pool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            pool: pool,
            toolCallId: toolCallId
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
            lineNumber: 43,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "The Hive does not support ",
                    pool.type,
                    " pools yet."
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
                lineNumber: 49,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
            lineNumber: 48,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Pool not found"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
                lineNumber: 54,
                columnNumber: 29
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
            lineNumber: 53,
            columnNumber: 25
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
_s(WithdrawLiquidityCall, "yCFn9pv7qB5OpFtjuLaErag2yjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$raydium$2f$use$2d$raydium$2d$pool$2d$by$2d$mint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRaydiumPoolByMint"]
    ];
});
_c = WithdrawLiquidityCall;
const __TURBOPACK__default__export__ = WithdrawLiquidityCall;
var _c;
__turbopack_refresh__.register(_c, "WithdrawLiquidityCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$transaction$2d$hash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/transaction-hash.tsx [app-client] (ecmascript)");
'use client';
;
;
const WithdrawLiquidityResult = ({ body })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$transaction$2d$hash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        hash: body.transaction
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/result.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = WithdrawLiquidityResult;
const __TURBOPACK__default__export__ = WithdrawLiquidityResult;
var _c;
__turbopack_refresh__.register(_c, "WithdrawLiquidityResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$call$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/call/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/result.tsx [app-client] (ecmascript)");
;
;
;
;
const WithdrawLiquidity = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Liquidity Pools...`,
        result: {
            heading: (result)=>result.body ? `Withdrawn Liquidity` : `Failed to withdraw liquidity`,
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx",
                    lineNumber: 28,
                    columnNumber: 25
                }, void 0) : result.message
        },
        prevToolAgent: prevToolAgent,
        call: {
            heading: "Withdraw Liquidity",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$call$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, void 0)
        },
        className: "w-96 max-w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = WithdrawLiquidity;
const __TURBOPACK__default__export__ = WithdrawLiquidity;
var _c;
__turbopack_refresh__.register(_c, "WithdrawLiquidity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const LiquidStakingYieldsTool = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Best Liquid Staking Yields...`,
        result: {
            heading: (result)=>result.body ? `Fetched Best Liquid Staking Yields` : "No staking yields found",
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidStakingYields, {
                    body: result.body
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
                    lineNumber: 24,
                    columnNumber: 23
                }, void 0) : "No staking yields found"
        },
        prevToolAgent: prevToolAgent,
        className: "w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = LiquidStakingYieldsTool;
const LiquidStakingYields = ({ body })=>{
    _s();
    const { sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const handleStakeClick = (symbol)=>{
        sendMessage(`I want to stake SOL using ${symbol}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-2",
        children: body.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "flex flex-row gap-2 items-center p-2 cursor-pointer hover:border-brand-600 dark:hover:border-brand-600 transition-all duration-300",
                onClick: ()=>handleStakeClick(item.tokenData.symbol),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.tokenData.logoURI,
                        alt: item.name,
                        className: "w-6 h-6 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
                        lineNumber: 49,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold",
                                children: [
                                    item.name,
                                    " (",
                                    item.tokenData.symbol,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
                                lineNumber: 55,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    item.yield.toFixed(2),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
                                lineNumber: 56,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this)
                ]
            }, item.name, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
                lineNumber: 44,
                columnNumber: 21
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
};
_s(LiquidStakingYields, "zjhnOAmLxeJplNUGJZvSAPy4zw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c1 = LiquidStakingYields;
const __TURBOPACK__default__export__ = LiquidStakingYieldsTool;
var _c, _c1;
__turbopack_refresh__.register(_c, "LiquidStakingYieldsTool");
__turbopack_refresh__.register(_c1, "LiquidStakingYields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/stake/call.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/token/use-token-data-by-address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const SwapCallBody = ({ toolCallId, args })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { data: inputTokenData, isLoading: inputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])("So11111111111111111111111111111111111111112");
    const { data: outputTokenData, isLoading: outputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(args.contractAddress);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-4 max-w-full",
        children: inputTokenLoading || outputTokenLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-48 w-96 max-w-full"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/call.tsx",
            lineNumber: 31,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialInputToken: inputTokenData,
            initialOutputToken: outputTokenData,
            inputLabel: "Stake",
            outputLabel: "Receive",
            initialInputAmount: args.amount?.toString(),
            swapText: "Stake",
            swappingText: "Staking...",
            onSuccess: (tx)=>{
                addToolResult(toolCallId, {
                    message: `Stake successful!`,
                    body: {
                        tx,
                        symbol: outputTokenData?.symbol || ""
                    }
                });
            },
            onError: (error)=>{
                addToolResult(toolCallId, {
                    message: `Stake failed: ${error}`
                });
            },
            onCancel: ()=>{
                addToolResult(toolCallId, {
                    message: `Stake cancelled`
                });
            }
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/call.tsx",
            lineNumber: 33,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/call.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
_s(SwapCallBody, "bMynQxwTLwUhqiMpVYWoMe1Ea4M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"]
    ];
});
_c = SwapCallBody;
const __TURBOPACK__default__export__ = SwapCallBody;
var _c;
__turbopack_refresh__.register(_c, "SwapCallBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/stake/stake-result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const StakeResult = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs text-muted-foreground",
        children: "Staked Successfully"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/stake-result.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = StakeResult;
const __TURBOPACK__default__export__ = StakeResult;
var _c;
__turbopack_refresh__.register(_c, "StakeResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$call$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/stake/call.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$stake$2d$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/stake/stake-result.tsx [app-client] (ecmascript)");
;
;
;
;
const Stake = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: "Staking...",
        result: {
            heading: (result)=>result.body ? "Stake Complete" : "Failed to Stake",
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$stake$2d$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx",
                    lineNumber: 26,
                    columnNumber: 23
                }, void 0) : result.message
        },
        call: {
            heading: "Stake",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$call$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx",
                    lineNumber: 32,
                    columnNumber: 21
                }, void 0)
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "max-w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = Stake;
const __TURBOPACK__default__export__ = Stake;
var _c;
__turbopack_refresh__.register(_c, "Stake");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/unstake/call.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/utils/swap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/hooks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/queries/token/use-token-data-by-address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const UnstakeCallBody = ({ toolCallId, args })=>{
    _s();
    const { addToolResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { data: inputTokenData, isLoading: inputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])(args.contractAddress);
    const { data: outputTokenData, isLoading: outputTokenLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"])("So11111111111111111111111111111111111111112");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-4 max-w-full",
        children: inputTokenLoading || outputTokenLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-48 w-96 max-w-full"
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/call.tsx",
            lineNumber: 31,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$utils$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialInputToken: inputTokenData,
            initialOutputToken: outputTokenData,
            inputLabel: "Unstake",
            outputLabel: "Receive",
            initialInputAmount: args.amount?.toString(),
            swapText: "Unstake",
            swappingText: "Unstaking...",
            onSuccess: (tx)=>{
                addToolResult(toolCallId, {
                    message: `Unstake successful!`,
                    body: {
                        tx,
                        inputAmount: args.amount || 0,
                        symbol: outputTokenData?.symbol || ""
                    }
                });
            },
            onError: (error)=>{
                addToolResult(toolCallId, {
                    message: `Unstake failed: ${error}`
                });
            },
            onCancel: ()=>{
                addToolResult(toolCallId, {
                    message: `Unstake cancelled`
                });
            }
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/call.tsx",
            lineNumber: 33,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/call.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
_s(UnstakeCallBody, "bMynQxwTLwUhqiMpVYWoMe1Ea4M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$queries$2f$token$2f$use$2d$token$2d$data$2d$by$2d$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenDataByAddress"]
    ];
});
_c = UnstakeCallBody;
const __TURBOPACK__default__export__ = UnstakeCallBody;
var _c;
__turbopack_refresh__.register(_c, "UnstakeCallBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/unstake/unstake-result.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const UnstakeResult = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs text-muted-foreground",
        children: "Unstaked Successfully"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/unstake-result.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = UnstakeResult;
const __TURBOPACK__default__export__ = UnstakeResult;
var _c;
__turbopack_refresh__.register(_c, "UnstakeResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$call$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/unstake/call.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$unstake$2d$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/unstake/unstake-result.tsx [app-client] (ecmascript)");
;
;
;
;
const Unstake = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: "Unstaking...",
        result: {
            heading: (result)=>result.body ? "Unstake Complete" : "Failed to Unstake",
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$unstake$2d$result$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx",
                    lineNumber: 27,
                    columnNumber: 23
                }, void 0) : result.message
        },
        call: {
            heading: "Unstake",
            body: (toolCallId, args)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$call$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    toolCallId: toolCallId,
                    args: args
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx",
                    lineNumber: 33,
                    columnNumber: 21
                }, void 0)
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent,
        className: "max-w-full"
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
};
_c = Unstake;
const __TURBOPACK__default__export__ = Unstake;
var _c;
__turbopack_refresh__.register(_c, "Unstake");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$liquid$2d$staking$2d$yields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/solana/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/solana/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/balance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$trending$2d$tokens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$all$2d$balances$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$num$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$recent$2d$trades$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$token$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$price$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const SearchRecentTweets = ({ tool })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Getting Recent Tweets...`,
        result: {
            heading: (result)=>result.body ? `Fetched Recent Tweets` : "Failed to fetch recent tweets",
            body: (result)=>result.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tweets, {
                    tweets: result.body.tweets
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                    lineNumber: 29,
                    columnNumber: 23
                }, void 0) : "No tweets found"
        },
        defaultOpen: true
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
};
_c = SearchRecentTweets;
const Tweets = ({ tweets })=>{
    _s();
    const [tweetsToShow, setTweetsToShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const handleShowMore = ()=>{
        setTweetsToShow(tweetsToShow + 3);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 gap-4",
        children: [
            tweets.slice(0, tweetsToShow).map((tweet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TweetCard, {
                    tweet: tweet.tweet,
                    user: tweet.user
                }, tweet.tweet.id, false, {
                    fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)),
            tweetsToShow < tweets.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleShowMore,
                className: "text-sm text-muted-foreground",
                children: "Show More"
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                lineNumber: 55,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
};
_s(Tweets, "x03fWHju2Ae3fUOPnImSTiIV7a8=");
_c1 = Tweets;
const TweetCard = ({ tweet, user })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: user.profile_image_url,
                        className: "w-6 h-6 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md font-bold truncate",
                        children: user.name
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "@",
                            user.username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-md",
                children: tweet.text
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
};
_c2 = TweetCard;
const __TURBOPACK__default__export__ = SearchRecentTweets;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "SearchRecentTweets");
__turbopack_refresh__.register(_c1, "Tweets");
__turbopack_refresh__.register(_c2, "TweetCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/twitter/index.tsx [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/twitter/index.tsx [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$search$2d$recent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/twitter/index.tsx [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/knowledge/search-knowledge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
;
;
const SearchKnowledge = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Searching Knowledge...`,
        result: {
            heading: (result)=>result.body?.knowledge ? `Searched knowledge base` : `Failed to fetch knowledge`,
            body: (result)=>result.body ? `Included the top ${result.body.knowledge.length} pages in context.` : "No knowledge found"
        },
        defaultOpen: false,
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/knowledge/search-knowledge.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
_c = SearchKnowledge;
const __TURBOPACK__default__export__ = SearchKnowledge;
var _c;
__turbopack_refresh__.register(_c, "SearchKnowledge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/knowledge/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/knowledge/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$search$2d$knowledge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/knowledge/search-knowledge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/knowledge/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/invoke/invoke-agent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/tool-card.tsx [app-client] (ecmascript)");
;
;
const InvokeAgent = ({ tool, prevToolAgent })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$tool$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        tool: tool,
        loadingText: `Invoking Agent...`,
        result: {
            heading: (result)=>result.body ? `Invoked ${tool.args.agent}` : `Failed to invoke agent`,
            body: (result)=>result.body ? result.body.message : "Failed to invoke agent"
        },
        defaultOpen: true,
        prevToolAgent: prevToolAgent
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/tools/invoke/invoke-agent.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_c = InvokeAgent;
const __TURBOPACK__default__export__ = InvokeAgent;
var _c;
__turbopack_refresh__.register(_c, "InvokeAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/invoke/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/tools/invoke/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$invoke$2d$agent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/invoke/invoke-agent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/invoke/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/app/(app)/chat/_components/tools/solana/balance.tsx [app-client] (ecmascript) <export default as Balance>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Balance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/balance.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx [app-client] (ecmascript) <export default as GetWalletAddress>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetWalletAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx [app-client] (ecmascript) <export default as GetTrendingTokens>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTrendingTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$trending$2d$tokens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$trending$2d$tokens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx [app-client] (ecmascript) <export default as GetTokenData>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTokenData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx [app-client] (ecmascript) <export default as Trade>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Trade": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx [app-client] (ecmascript) <export default as LiquidStakingYields>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LiquidStakingYields": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$liquid$2d$staking$2d$yields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$liquid$2d$staking$2d$yields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx [app-client] (ecmascript) <export default as Transfer>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Transfer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx [app-client] (ecmascript) <export default as SearchRecentTweets>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SearchRecentTweets": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$search$2d$recent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$search$2d$recent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx [app-client] (ecmascript) <export default as Stake>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Stake": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx [app-client] (ecmascript) <export default as Unstake>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Unstake": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx [app-client] (ecmascript) <export default as AllBalances>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AllBalances": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$all$2d$balances$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$all$2d$balances$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/knowledge/search-knowledge.tsx [app-client] (ecmascript) <export default as SearchKnowledge>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SearchKnowledge": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$search$2d$knowledge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$search$2d$knowledge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/knowledge/search-knowledge.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/invoke/invoke-agent.tsx [app-client] (ecmascript) <export default as InvokeAgent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvokeAgent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$invoke$2d$agent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$invoke$2d$agent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/invoke/invoke-agent.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx [app-client] (ecmascript) <export default as GetTokenAddress>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTokenAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx [app-client] (ecmascript) <export default as GetTopHolders>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTopHolders": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx [app-client] (ecmascript) <export default as BubbleMaps>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BubbleMaps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx [app-client] (ecmascript) <export default as NumHolders>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NumHolders": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$num$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$num$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx [app-client] (ecmascript) <export default as GetPools>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetPools": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx [app-client] (ecmascript) <export default as DepositLiquidity>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DepositLiquidity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx [app-client] (ecmascript) <export default as GetLpTokens>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetLpTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx [app-client] (ecmascript) <export default as WithdrawLiquidity>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WithdrawLiquidity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx [app-client] (ecmascript) <export default as GetTopTraders>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTopTraders": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx [app-client] (ecmascript) <export default as GetTrades>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTrades": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$recent$2d$trades$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$recent$2d$trades$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx [app-client] (ecmascript) <export default as GetTopTokenTraders>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetTopTokenTraders": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$token$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$token$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx [app-client] (ecmascript) <export default as PriceChart>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PriceChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$price$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$price$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx [app-client] (ecmascript) <export default as GetSmartMoneyInflows>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GetSmartMoneyInflows": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/tools/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/twitter/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/knowledge/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/invoke/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$action$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/ai/action-names.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$balance$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/wallet/balance/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Balance$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/balance.tsx [app-client] (ecmascript) <export default as Balance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$get$2d$wallet$2d$address$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/wallet/get-wallet-address/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetWalletAddress$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-wallet-address.tsx [app-client] (ecmascript) <export default as GetWalletAddress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$trending$2d$tokens$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/market/get-trending-tokens/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$trending$2d$tokens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTrendingTokens$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-trending-tokens.tsx [app-client] (ecmascript) <export default as GetTrendingTokens>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$get$2d$token$2d$data$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/get-token-data/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTokenData$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-data/index.tsx [app-client] (ecmascript) <export default as GetTokenData>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$trade$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/trade/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trade$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/swap/index.tsx [app-client] (ecmascript) <export default as Trade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$staking$2f$liquid$2d$staking$2d$yields$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/staking/liquid-staking-yields/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$liquid$2d$staking$2d$yields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LiquidStakingYields$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/liquid-staking-yields.tsx [app-client] (ecmascript) <export default as LiquidStakingYields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$transfer$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/wallet/transfer/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Transfer$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/transfer/index.tsx [app-client] (ecmascript) <export default as Transfer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$twitter$2f$actions$2f$search$2d$recent$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/twitter/actions/search-recent/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$search$2d$recent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchRecentTweets$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/twitter/search-recent.tsx [app-client] (ecmascript) <export default as SearchRecentTweets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$staking$2f$stake$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/staking/stake/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stake$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/stake/index.tsx [app-client] (ecmascript) <export default as Stake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$staking$2f$unstake$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/staking/unstake/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unstake$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/staking/unstake/index.tsx [app-client] (ecmascript) <export default as Unstake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$all$2d$balances$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/wallet/all-balances/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$all$2d$balances$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AllBalances$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/all-balances.tsx [app-client] (ecmascript) <export default as AllBalances>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$knowledge$2f$actions$2f$search$2d$knowledge$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/knowledge/actions/search-knowledge/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$search$2d$knowledge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchKnowledge$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/knowledge/search-knowledge.tsx [app-client] (ecmascript) <export default as SearchKnowledge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$invoke$2f$actions$2f$invoke$2d$agent$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/invoke/actions/invoke-agent/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$invoke$2d$agent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InvokeAgent$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/invoke/invoke-agent.tsx [app-client] (ecmascript) <export default as InvokeAgent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$get$2d$token$2d$address$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/get-token-address/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTokenAddress$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/get-token-address.tsx [app-client] (ecmascript) <export default as GetTokenAddress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$top$2d$holders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/top-holders/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTopHolders$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-holders.tsx [app-client] (ecmascript) <export default as GetTopHolders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$bubble$2d$maps$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/bubble-maps/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BubbleMaps$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/bubble-maps/index.tsx [app-client] (ecmascript) <export default as BubbleMaps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$token$2d$holders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/token-holders/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$num$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NumHolders$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/num-holders.tsx [app-client] (ecmascript) <export default as NumHolders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$get$2d$pools$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/raydium/get-pools/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetPools$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-pools/index.tsx [app-client] (ecmascript) <export default as GetPools>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$deposit$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/raydium/deposit/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DepositLiquidity$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/deposit-liquidity/index.tsx [app-client] (ecmascript) <export default as DepositLiquidity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$get$2d$lp$2d$tokens$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/raydium/get-lp-tokens/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetLpTokens$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/get-lp-tokens/index.tsx [app-client] (ecmascript) <export default as GetLpTokens>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$withdraw$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/raydium/withdraw/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WithdrawLiquidity$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/liquidity/withdraw-liquidity/index.tsx [app-client] (ecmascript) <export default as WithdrawLiquidity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$top$2d$traders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/market/get-top-traders/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTopTraders$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-traders.tsx [app-client] (ecmascript) <export default as GetTopTraders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$trades$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/market/get-trades/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$recent$2d$trades$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTrades$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/recent-trades.tsx [app-client] (ecmascript) <export default as GetTrades>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$top$2d$traders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/top-traders/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$token$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTopTokenTraders$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/top-token-traders.tsx [app-client] (ecmascript) <export default as GetTopTokenTraders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$price$2d$chart$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/token/price-chart/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$price$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PriceChart$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/price-chart.tsx [app-client] (ecmascript) <export default as PriceChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$smart$2d$money$2d$inflows$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/ai/solana/actions/market/get-smart-money-inflows/name.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetSmartMoneyInflows$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/solana/smart-money/index.tsx [app-client] (ecmascript) <export default as GetSmartMoneyInflows>");
'use client';
;
;
;
;
;
;
const ToolInvocation = ({ tool, prevToolAgent })=>{
    const toolParts = tool.toolName.split("-");
    const toolName = toolParts.slice(1).join("-");
    switch(toolName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$balance$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_BALANCE_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$balance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Balance$3e$__["Balance"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 77,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$get$2d$wallet$2d$address$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_WALLET_ADDRESS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$wallet$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetWalletAddress$3e$__["GetWalletAddress"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 79,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$trending$2d$tokens$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_TRENDING_TOKENS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$trending$2d$tokens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTrendingTokens$3e$__["GetTrendingTokens"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 81,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$get$2d$token$2d$data$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_TOKEN_DATA_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$data$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTokenData$3e$__["GetTokenData"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 83,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$trade$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_TRADE_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$swap$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trade$3e$__["Trade"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 85,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$staking$2f$liquid$2d$staking$2d$yields$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_LIQUID_STAKING_YIELDS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$liquid$2d$staking$2d$yields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LiquidStakingYields$3e$__["LiquidStakingYields"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 87,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$transfer$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_TRANSFER_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$transfer$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Transfer$3e$__["Transfer"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 89,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$twitter$2f$actions$2f$search$2d$recent$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TWITTER_SEARCH_RECENT_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$twitter$2f$search$2d$recent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchRecentTweets$3e$__["SearchRecentTweets"], {
                tool: tool
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 91,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$staking$2f$stake$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_STAKE_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$stake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stake$3e$__["Stake"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 93,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$staking$2f$unstake$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_UNSTAKE_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$staking$2f$unstake$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Unstake$3e$__["Unstake"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 95,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$wallet$2f$all$2d$balances$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ALL_BALANCES_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$all$2d$balances$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AllBalances$3e$__["AllBalances"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 97,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$knowledge$2f$actions$2f$search$2d$knowledge$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEARCH_KNOWLEDGE_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$knowledge$2f$search$2d$knowledge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchKnowledge$3e$__["SearchKnowledge"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 99,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$invoke$2f$actions$2f$invoke$2d$agent$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INVOKE_AGENT_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$invoke$2f$invoke$2d$agent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InvokeAgent$3e$__["InvokeAgent"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 101,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$get$2d$token$2d$address$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_TOKEN_ADDRESS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$get$2d$token$2d$address$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTokenAddress$3e$__["GetTokenAddress"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 103,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$top$2d$holders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_TOP_HOLDERS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTopHolders$3e$__["GetTopHolders"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 105,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$bubble$2d$maps$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_BUBBLE_MAPS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$bubble$2d$maps$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BubbleMaps$3e$__["BubbleMaps"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 107,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$token$2d$holders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_TOKEN_HOLDERS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$num$2d$holders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NumHolders$3e$__["NumHolders"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 109,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$get$2d$pools$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_POOLS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$pools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetPools$3e$__["GetPools"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 111,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$deposit$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_DEPOSIT_LIQUIDITY_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$deposit$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DepositLiquidity$3e$__["DepositLiquidity"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 113,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$get$2d$lp$2d$tokens$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_LP_TOKENS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$get$2d$lp$2d$tokens$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetLpTokens$3e$__["GetLpTokens"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 115,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$raydium$2f$withdraw$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_WITHDRAW_LIQUIDITY_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$liquidity$2f$withdraw$2d$liquidity$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WithdrawLiquidity$3e$__["WithdrawLiquidity"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 117,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$top$2d$traders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_TOP_TRADERS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTopTraders$3e$__["GetTopTraders"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 119,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$trades$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_TRADER_TRADES_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$recent$2d$trades$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTrades$3e$__["GetTrades"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 121,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$top$2d$traders$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_TOKEN_TOP_TRADERS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$top$2d$token$2d$traders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetTopTokenTraders$3e$__["GetTopTokenTraders"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 123,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$token$2f$price$2d$chart$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_TOKEN_PRICE_CHART_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$price$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PriceChart$3e$__["PriceChart"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 125,
                columnNumber: 20
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$ai$2f$solana$2f$actions$2f$market$2f$get$2d$smart$2d$money$2d$inflows$2f$name$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_GET_SMART_MONEY_INFLOWS_NAME"]:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$solana$2f$smart$2d$money$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GetSmartMoneyInflows$3e$__["GetSmartMoneyInflows"], {
                tool: tool,
                prevToolAgent: prevToolAgent
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 127,
                columnNumber: 20
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "whitespace-pre-wrap",
                children: JSON.stringify(tool, null, 2)
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/tools/index.tsx",
                lineNumber: 130,
                columnNumber: 17
            }, this);
    }
};
_c = ToolInvocation;
const __TURBOPACK__default__export__ = ToolInvocation;
var _c;
__turbopack_refresh__.register(_c, "ToolInvocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/_components/chat/message.tsx [app-client] (ecmascript) <export default as Message>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Message": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/message.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/_components/chat/loading-message.tsx [app-client] (ecmascript) <export default as LoadingMessage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LoadingMessage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$loading$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$loading$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_components/chat/loading-message.tsx [app-client] (ecmascript)");
}}),
"[project]/app/(app)/chat/_components/messages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/_components/chat/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/tools/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/chat/_hooks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$scroll$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_hooks/use-scroll-anchor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Message$3e$__ = __turbopack_import__("[project]/app/(app)/_components/chat/message.tsx [app-client] (ecmascript) <export default as Message>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$loading$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingMessage$3e$__ = __turbopack_import__("[project]/app/(app)/_components/chat/loading-message.tsx [app-client] (ecmascript) <export default as LoadingMessage>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const Messages = ({ messages, messageClassName })=>{
    _s();
    const { isResponseLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const { scrollRef, messagesRef, scrollToBottom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$scroll$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnchor"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Messages.useEffect": ()=>{
            scrollToBottom();
        }
    }["Messages.useEffect"], [
        messages,
        scrollToBottom
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-0 flex flex-col w-full overflow-y-auto max-w-full no-scrollbar",
        ref: scrollRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "messages-container",
            ref: messagesRef,
            children: [
                messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Message$3e$__["Message"], {
                        message: message,
                        className: messageClassName,
                        ToolComponent: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$tools$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        previousMessage: index > 0 ? messages[index - 1] : undefined,
                        nextMessage: index < messages.length - 1 ? messages[index + 1] : undefined
                    }, message.id, false, {
                        fileName: "[project]/app/(app)/chat/_components/messages.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this)),
                isResponseLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$chat$2f$loading$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoadingMessage$3e$__["LoadingMessage"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/messages.tsx",
                    lineNumber: 44,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/chat/_components/messages.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/chat/_components/messages.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
};
_s(Messages, "rlLs7FdEi/oYL9XU5hELNwB3/as=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$scroll$2d$anchor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnchor"]
    ];
});
_c = Messages;
const __TURBOPACK__default__export__ = Messages;
var _c;
__turbopack_refresh__.register(_c, "Messages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/chat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/empty.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/messages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_components/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/chat/_contexts/chat.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const Chat = ()=>{
    _s();
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    const cleanedMessages = messages.filter((message)=>message.role !== 'system');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full flex flex-col items-center relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex flex-col justify-between max-w-full md:max-w-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden h-0 flex flex-col max-w-full",
                    children: cleanedMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(app)/chat/_components/chat.tsx",
                            lineNumber: 24,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/chat.tsx",
                        lineNumber: 23,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$messages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                messages: cleanedMessages
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/chat.tsx",
                                lineNumber: 28,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(app)/chat/_components/chat.tsx",
                                lineNumber: 31,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/(app)/chat/_components/chat.tsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/chat/_components/chat.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(app)/chat/_components/chat.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
_s(Chat, "4kgj2XEFC2h8Tt8QuShW04G6kC4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$chat$2f$_contexts$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = Chat;
const __TURBOPACK__default__export__ = Chat;
var _c;
__turbopack_refresh__.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/login-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@privy-io/react-auth/dist/esm/hooks/usePrivy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$useLogin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@privy-io/react-auth/dist/esm/hooks/useLogin.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const LoginButton = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { authenticated, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"])();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$useLogin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogin"])({
        onComplete: {
            "LoginButton.useLogin": (_, __, wasAlreadyAuthenticated)=>{
                if (!wasAlreadyAuthenticated) {
                    router.replace('/chat');
                }
            }
        }["LoginButton.useLogin"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginButton.useEffect": ()=>{
            if (authenticated) {
                router.replace('/chat');
            }
        }
    }["LoginButton.useEffect"], [
        authenticated,
        router
    ]);
    if (!ready || authenticated) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
        className: "w-24 h-10"
    }, void 0, false, {
        fileName: "[project]/app/_components/login-button.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: 'brand',
        onClick: ()=>login(),
        disabled: authenticated,
        className: "w-24 h-10",
        children: "Login"
    }, void 0, false, {
        fileName: "[project]/app/_components/login-button.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
_s(LoginButton, "n7ZBKZftdwPYKoXfE6Oq7TlcH/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$useLogin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogin"]
    ];
});
_c = LoginButton;
const __TURBOPACK__default__export__ = LoginButton;
var _c;
__turbopack_refresh__.register(_c, "LoginButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/_components/not-logged-in-alert.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$utils$2f$suppress$2d$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/utils/suppress-console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/ui/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$login$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/_components/login-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/(app)/_hooks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$afilogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$afilogo$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/afilogo.png.mjs { IMAGE => "[project]/public/afilogo.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@privy-io/react-auth/dist/esm/hooks/usePrivy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$experimental$2d$confirmed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(app)/_hooks/use-experimental-confirmed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
const NotLoggedInAlert = ()=>{
    _s();
    const { ready, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"])();
    const { confirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$experimental$2d$confirmed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperimentalConfirmed"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: ready && !user && confirmed,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                className: "hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                        children: "You are not logged in"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                        children: "Please login to continue"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                className: "flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$afilogo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$afilogo$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: "logo",
                        className: "w-16 h-16"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "You are not logged in"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: "Please login to continue"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$login$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/chat/_components/not-logged-in-alert.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
};
_s(NotLoggedInAlert, "na2hftlyb1kOQ3Yf0mIZUf086RE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$hooks$2f$usePrivy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_hooks$2f$use$2d$experimental$2d$confirmed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExperimentalConfirmed"]
    ];
});
_c = NotLoggedInAlert;
const __TURBOPACK__default__export__ = NotLoggedInAlert;
var _c;
__turbopack_refresh__.register(_c, "NotLoggedInAlert");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(app)/chat/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_a4a3d5._.js.map