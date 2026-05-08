(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_object_spread.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_sliced_to_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_to_consumable_array.js [client] (ecmascript)");
;
;
;
function connect(param) {
    var addMessageListener = param.addMessageListener, sendMessage = param.sendMessage, _param_onUpdateError = param.onUpdateError, onUpdateError = _param_onUpdateError === void 0 ? console.error : _param_onUpdateError;
    addMessageListener(function(msg) {
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(var i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    var queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: function push(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(param, 2), chunkPath = _param[0], callback = _param[1];
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = queued[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), chunkPath = _step_value[0], callback = _step_value[1];
                subscribeToChunkUpdate(chunkPath, sendMessage, callback);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}
var updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({
        type: 'turbopack-subscribe'
    }, resource));
    return function() {
        sendJSON(sendMessage, (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({
            type: 'turbopack-unsubscribe'
        }, resource));
    };
}
function handleSocketConnected(sendMessage) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = updateCallbackSets.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            subscribeToUpdates(sendMessage, JSON.parse(key));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// we aggregate all pending updates until the issues are resolved
var chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    var key = resourceKey(msg.resource);
    var aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunkListsWithPendingUpdates.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var msg = _step.value;
            triggerUpdate(msg);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    var chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    var merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            var update = updateA.merged[0];
            for(var i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(var i1 = 0; i1 < updateB.merged.length; i1++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i1]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks: chunks,
        merged: merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    var chunks = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(chunksA)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), chunkPath = _step_value[0], chunkUpdateA = _step_value[1];
            var chunkUpdateB = chunksB[chunkPath];
            if (chunkUpdateB != null) {
                var mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
                if (mergedUpdate != null) {
                    chunks[chunkPath] = mergedUpdate;
                }
            } else {
                chunks[chunkPath] = chunkUpdateA;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = Object.entries(chunksB)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step1.value, 2), chunkPath1 = _step_value1[0], chunkUpdateB1 = _step_value1[1];
            if (chunks[chunkPath1] == null) {
                chunks[chunkPath1] = chunkUpdateB1;
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    var entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    var chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries: entries,
        chunks: chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])({}, entriesA, entriesB);
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    var chunks = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(chunksA)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), chunkPath = _step_value[0], chunkUpdateA = _step_value[1];
            var chunkUpdateB = chunksB[chunkPath];
            if (chunkUpdateB != null) {
                var mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
                if (mergedUpdate != null) {
                    chunks[chunkPath] = mergedUpdate;
                }
            } else {
                chunks[chunkPath] = chunkUpdateA;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = Object.entries(chunksB)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var _step_value1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step1.value, 2), chunkPath1 = _step_value1[0], chunkUpdateB1 = _step_value1[1];
            if (chunks[chunkPath1] == null) {
                chunks[chunkPath1] = chunkUpdateB1;
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        var _updateA_modules, _updateB_modules;
        var added = [];
        var deleted = [];
        var deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = addedModules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var moduleId = _step.value;
                if (!deletedModules.has(moduleId)) {
                    added.push(moduleId);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = deletedModules[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var moduleId1 = _step1.value;
                if (!addedModules.has(moduleId1)) {
                    deleted.push(moduleId1);
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added: added,
            deleted: deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added, _updateA_deleted, _updateB_deleted;
        var added1 = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : [])));
        var deleted1 = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : [])));
        if (updateB.added != null) {
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = updateB.added[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var moduleId2 = _step2.value;
                    deleted1.delete(moduleId2);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
        if (updateB.deleted != null) {
            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
            try {
                for(var _iterator3 = updateB.deleted[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    var moduleId3 = _step3.value;
                    added1.delete(moduleId3);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
        return {
            type: 'partial',
            added: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(added1),
            deleted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(deleted1)
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1, _updateB_deleted1;
        var modules = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : []).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : [])));
        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
        try {
            for(var _iterator4 = ((_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : [])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                var moduleId4 = _step4.value;
                modules.delete(moduleId4);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                }
            } finally{
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
        return {
            type: 'added',
            modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(modules)
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        var modules1 = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
            try {
                for(var _iterator5 = updateA.added[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                    var moduleId5 = _step5.value;
                    modules1.delete(moduleId5);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                        _iterator5.return();
                    }
                } finally{
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
        return {
            type: 'deleted',
            modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(modules1)
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
var CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    var aI = list.indexOf(a) + 1 || list.length;
    var bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
var chunksWithIssues = new Map();
function emitIssues() {
    var issues = [];
    var deduplicationSet = new Set();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chunksWithIssues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), _ = _step_value[0], chunkIssues = _step_value[1];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = chunkIssues[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var chunkIssue = _step1.value;
                    if (deduplicationSet.has(chunkIssue.formatted)) continue;
                    issues.push(chunkIssue);
                    deduplicationSet.add(chunkIssue.formatted);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    var key = resourceKey(msg.resource);
    var hasCriticalIssues = false;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = msg.issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            if (CRITICAL.includes(issue.severity)) {
                hasCriticalIssues = true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
var SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
var CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort(function(a, b) {
        var first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
var hooks = {
    beforeRefresh: function beforeRefresh() {},
    refresh: function refresh() {},
    buildOk: function buildOk() {},
    issues: function issues(_issues) {}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            var runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    var key = resourceKey(resource);
    var callbackSet;
    var existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return function() {
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    var key = resourceKey(msg.resource);
    var callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = callbackSet.callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var callback = _step.value;
            callback(msg);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/portfolio/components/Portfolio/Portfolio.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var Portfolio = function Portfolio() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "portfolio section",
            id: "portfolio",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section__title",
                    children: "Portfolio"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "section__subtitle",
                    children: "Projets recents"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portfolio__container container grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "portfolio__content portfolio__popotte",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio__data",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "portfolio__title",
                                        children: "La popotte de valou"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                        lineNumber: 16,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "portfolio__description",
                                        children: "Site web réalisé pour le restaurant la popotte de valou situé sur Alès dans le gard(30)"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                        lineNumber: 17,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/KevinMaze/la_popote_de_valou",
                                        className: "button button__flex portfolio__button",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            "Voir le code",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                                lineNumber: 20,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                        lineNumber: 18,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                lineNumber: 15,
                                columnNumber: 25
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "portfolio__content portfolio__parrot",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portfolio__data",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "portfolio__title",
                                        children: "Garage Vincent Parrot"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "portfolio__description",
                                        children: "Projet réalisé dans le cadre de mon examen de développeur web et web mobile."
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/KevinMaze/Garage-ECF-2023",
                                        className: "button button__flex portfolio__button",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            "Voir le code",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bx bx-right-arrow-alt button__icon portfolio__button portfolio__button__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                                lineNumber: 31,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
            lineNumber: 7,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/portfolio/components/Portfolio/Portfolio.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, _this);
};
_c = Portfolio;
const __TURBOPACK__default__export__ = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/Contact/Contact.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@emailjs/browser/es/index.js [client] (ecmascript) <locals>");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
var Contact = function Contact() {
    _s();
    var form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    var sendEmail = function sendEmail(e) {
        e.preventDefault();
        __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].sendForm('service_j5ota6d', 'template_n0fh5yw', form.current, {
            publicKey: 'cVxaD6990vdcczOcO'
        });
        e.target.reset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "contact section",
            id: "contact",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section__title",
                    children: "Garder le contact"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "section__subtitle",
                    children: "Contactez moi ou demandez votre devis"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact__container container grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "contact__title",
                                    children: "Parlez-moi"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact__info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact__card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bx bx-mail-send contact__card-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 29,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "contact__card-title",
                                                    children: "E-mail"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 31,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:kevinmaze0889@gmail.com",
                                                    className: "contact__button",
                                                    children: [
                                                        "Ecrivez-moi",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bx bx-right-arrow-alt contact__button-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                            lineNumber: 33,
                                                            columnNumber: 37
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact__card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bx bxl-whatsapp contact__card-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 38,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "contact__card-title",
                                                    children: "Téléphone"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 40,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://calendly.com/kevinmaze0889/30min",
                                                    className: "contact__button",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: [
                                                        "Réservez votre appel",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bx bx-right-arrow-alt contact__button-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                            lineNumber: 42,
                                                            columnNumber: 37
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                            lineNumber: 37,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "contact__title",
                                    children: "Décrivez-moi votre projet"
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    ref: form,
                                    onSubmit: sendEmail,
                                    className: "contact__form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact__form-div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "contact__form-tag",
                                                    children: "Nom"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    className: "contact__form-input",
                                                    placeholder: "Votre nom"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact__form-div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "contact__form-tag",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    className: "contact__form-input",
                                                    placeholder: "Votre Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact__form-div contact__form-area",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "contact__form-tag",
                                                    children: "Projet"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "project",
                                                    id: "",
                                                    cols: "30",
                                                    rows: "10",
                                                    className: "contact__form-input area",
                                                    placeholder: "Décrivez votre projet"
                                                }, void 0, false, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button__flex",
                                            children: [
                                                "Envoyer message",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    class: "button__icon",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                                                            fill: "var(--container-color)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 37
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                                                            fill: "var(--container-color)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                            lineNumber: 97,
                                                            columnNumber: 37
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio/components/Contact/Contact.jsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/components/Contact/Contact.jsx",
            lineNumber: 19,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/portfolio/components/Contact/Contact.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, _this);
};
_s(Contact, "dQhLC9DEDZP9Q6oVJIWRdCVKDdw=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/Home/Social.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var Social = function Social() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home__social",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.instagram.com/_kebinu_/",
                className: "home__social-icon",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    class: "uil uil-instagram"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Home/Social.jsx",
                    lineNumber: 7,
                    columnNumber: 13
                }, _this)
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Home/Social.jsx",
                lineNumber: 6,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://github.com/KevinMaze",
                className: "home__social-icon",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    class: "uil uil-github"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Home/Social.jsx",
                    lineNumber: 10,
                    columnNumber: 13
                }, _this)
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Home/Social.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.linkedin.com/in/k%C3%A9vin-maze-0556b917a/",
                className: "home__social-icon",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    class: "uil uil-linkedin"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Home/Social.jsx",
                    lineNumber: 13,
                    columnNumber: 13
                }, _this)
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Home/Social.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/components/Home/Social.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, _this);
};
_c = Social;
const __TURBOPACK__default__export__ = Social;
var _c;
__turbopack_context__.k.register(_c, "Social");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/Home/Data.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-router-dom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var Data = function Data() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home__data",
        "data-aos": "fade-right",
        "data-aos-duration": "1500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "home__title",
                children: [
                    "Kévin Mazé",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 48 48",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "home__hand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z",
                                fill: "#FFDD67"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 16,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z",
                                fill: "#EBA352"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 20,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z",
                                fill: "#FFDD67"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z",
                                fill: "#EBA352"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z",
                                fill: "#FFDD67"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 32,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z",
                                fill: "#EBA352"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z",
                                fill: "#FFDD67"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z",
                                fill: "#EBA352"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z",
                                fill: "#FFDD67"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z",
                                fill: "#EBA352"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/Home/Data.jsx",
                        lineNumber: 8,
                        columnNumber: 13
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/Home/Data.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "home__subtitle",
                children: "Développeur Web"
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Home/Data.jsx",
                lineNumber: 58,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "home__description",
                children: [
                    "Améliorez votre image de marque et votre visibilité sur la toile. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/portfolio/components/Home/Data.jsx",
                        lineNumber: 60,
                        columnNumber: 79
                    }, _this),
                    "Grâce à votre site web… Sur-mesure."
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/Home/Data.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                to: "/contact",
                className: "button button__flex",
                children: [
                    "Me Contacter",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        class: "button__icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                                fill: "var(--container-color)"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                                fill: "var(--container-color)"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/Home/Data.jsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/Home/Data.jsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/Home/Data.jsx",
                lineNumber: 65,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/components/Home/Data.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, _this);
};
_c = Data;
const __TURBOPACK__default__export__ = Data;
var _c;
__turbopack_context__.k.register(_c, "Data");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/Home/Home.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Home$2f$Social$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Home/Social.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Home$2f$Data$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Home/Data.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/aos/dist/aos.js [client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
;
;
var Home = function Home() {
    __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].init();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "home section",
            id: "home",
            "data-aos": "fade-down",
            "data-aos-duration": "1500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home__container container grid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "home__content grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Home$2f$Social$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/components/Home/Home.jsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home__img",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1500"
                        }, void 0, false, {
                            fileName: "[project]/portfolio/components/Home/Home.jsx",
                            lineNumber: 17,
                            columnNumber: 25
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Home$2f$Data$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/components/Home/Home.jsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio/components/Home/Home.jsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, _this)
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Home/Home.jsx",
                lineNumber: 13,
                columnNumber: 17
            }, _this)
        }, void 0, false, {
            fileName: "[project]/portfolio/components/Home/Home.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/portfolio/components/Home/Home.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, _this);
};
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/Services/Services.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_sliced_to_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
var Services = function Services() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), toggleState = _useState[0], setToggleState = _useState[1];
    var toggleTab = function toggleTab(index) {
        setToggleState(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "service section",
            id: "services",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section__title",
                    children: "Services"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "section__subtitle",
                    children: "Des prestations adaptées à vos besoins"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "service__container container grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-web-grid service__icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 22,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "service__title",
                                            children: "Web Design"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 23,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "service__button",
                                    onClick: function onClick() {
                                        return toggleTab(1);
                                    },
                                    children: [
                                        "Voir plus ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-arrow-right service__button-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 26,
                                            columnNumber: 98
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: toggleState === 1 ? "service__modal active__modal" : "service__modal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service__modal-content",
                                        onClick: function onClick() {
                                            return toggleTab(0);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-times service__modal-close"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 29,
                                                columnNumber: 98
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "service__modal-title",
                                                children: "Web Design"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 31,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "service__modal-description",
                                                children: "Le design de votre site est très important. Il véhicule votre identité, vos valeurs et vous démarque positivement de la concurrence."
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 32,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "service__modal-services grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 36,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Branding afin de cibler au mieux vos besoins"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 37,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 35,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 40,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Création ou utilisation de votre chartre graphique"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 41,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 44,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Création de l'UI / UX design"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 45,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 43,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 48,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Création de maquettes sur mesure"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 49,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 34,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-arrow service__icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "service__title",
                                            children: "Développement de votre site"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "service__button",
                                    onClick: function onClick() {
                                        return toggleTab(2);
                                    },
                                    children: [
                                        "Voir plus ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-arrow-right service__button-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 62,
                                            columnNumber: 98
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: toggleState === 2 ? "service__modal active__modal" : "service__modal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service__modal-content",
                                        onClick: function onClick() {
                                            return toggleTab(0);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-times service__modal-close"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 65,
                                                columnNumber: 98
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "service__modal-title",
                                                children: "Développement de votre site"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 67,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "service__modal-description",
                                                children: "Pour la création ou la mise à jour de votre site, je vous accompagne dans votre projet. Le développement de votre site web est réalisé avec soin."
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 68,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "service__modal-services grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 72,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Intégration suivant la maquette que vous avez validé."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 73,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 71,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 76,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Technologie adapté à votre demande. (HTML, React, Symfony...)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 77,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 80,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Fonctionnalités spécifiques que vous souhaitez intégrer."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 81,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 84,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Dynamisme des pages"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 85,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 88,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Responsif design, pour s'adapter sur différents supports (téléphone, ordinateur...)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 89,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 70,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-edit service__icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "service__title",
                                            children: "Référencement"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 99,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "service__button",
                                    onClick: function onClick() {
                                        return toggleTab(3);
                                    },
                                    children: [
                                        "Voir plus ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-arrow-right service__button-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 102,
                                            columnNumber: 98
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: toggleState === 3 ? "service__modal active__modal" : "service__modal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service__modal-content",
                                        onClick: function onClick() {
                                            return toggleTab(0);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-times service__modal-close"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 105,
                                                columnNumber: 98
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "service__modal-title",
                                                children: "Référencement"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 107,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "service__modal-description",
                                                children: "Votre site est développé avec pour objectif d'apparaitre dans les premières pages des moteurs de recherche. Analysons puis optimisons ensemble votre contenu."
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "service__modal-services grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 112,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Référencement naturel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 113,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 116,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Temps de chargement des pages optimisé"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 117,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 120,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Indexation automatique des pages"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 121,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 124,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Recherche des mots-clés les plus pertinants."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 125,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Intégration des différents réseaux sociaux."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 129,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 127,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 110,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service__content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-wrench service__icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "service__title",
                                            children: "Hébergement et maintenance"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "service__button",
                                    onClick: function onClick() {
                                        return toggleTab(4);
                                    },
                                    children: [
                                        "Voir plus ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "uil uil-arrow-right service__button-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                                            lineNumber: 142,
                                            columnNumber: 98
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: toggleState === 4 ? "service__modal active__modal" : "service__modal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service__modal-content",
                                        onClick: function onClick() {
                                            return toggleTab(0);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-times service__modal-close"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 145,
                                                columnNumber: 98
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "service__modal-title",
                                                children: "Hébergement et maintenance"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "service__modal-description",
                                                children: "Votre site sera hébergé sur  un serveur robuste, puissant, supportant la montée en puissance de votre trafic. Mis à jour régulièrement, votre site restera en bonne santé."
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 148,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "service__modal-services grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 152,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Hébergement sur serveur dédié respectant la technologie choisie."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 153,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 151,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 156,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Création ou récupération de votre nom de domaine."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 157,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Mise à jour de votre site internet suivant vos besoins."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 161,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Petites modifications graphiques ou de contenu."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Optimisation des performances."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 169,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "service__modal-service",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-check-circle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 172,
                                                                columnNumber: 37
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "service__modal-info",
                                                                children: "Sauvegarde en cas de piratage ou problème de serveur."
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                                lineNumber: 173,
                                                                columnNumber: 37
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Services/Services.jsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Services/Services.jsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/Services/Services.jsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio/components/Services/Services.jsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/components/Services/Services.jsx",
            lineNumber: 14,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/portfolio/components/Services/Services.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, _this);
};
_s(Services, "yB7MfedvTq2RrgRhqaESWxOGMlI=");
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/About/Info.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var Info = function Info() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "about__info grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about__box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "about__title",
                        children: "Langages"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 7,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info__span",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "HTML / CSS"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 9,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Javascript"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 10,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "PHP"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/Info.jsx",
                lineNumber: 6,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about__box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "about__title",
                        children: "Bibliothèques"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info__span",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Bootstrap"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "React"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/Info.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about__box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "about__title",
                        children: "Framework"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info__span",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Next.js"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Symfony"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/Info.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about__box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "about__title",
                        children: "Compétences graphiques"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info__span",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Photoshop"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Adobe XD"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Figma"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Première Pro"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Info.jsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/Info.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/Info.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/components/About/Info.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, _this);
};
_c = Info;
const __TURBOPACK__default__export__ = Info;
var _c;
__turbopack_context__.k.register(_c, "Info");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/Parcours/Parcours.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_sliced_to_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
var Parcours = function Parcours() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1), 2), toggleState = _useState[0], setToggleState = _useState[1];
    var toggleTab = function toggleTab(index) {
        setToggleState(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "parcours section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section__title",
                children: "Parcours"
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "section__subtitle",
                children: "Mon parcours professionnel"
            }, void 0, false, {
                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "parcours__container container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "parcours__tabs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: toggleState === 1 ? "parcours__button parcours__active button--flex" : "parcours__button button--flex",
                                onClick: function onClick() {
                                    return toggleTab(1);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "uil uil-graduation-cap parcours__icon"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 18,
                                        columnNumber: 25
                                    }, _this),
                                    "Scolaire"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: toggleState === 2 ? "parcours__button parcours__active button--flex" : "parcours__button button--flex",
                                onClick: function onClick() {
                                    return toggleTab(2);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "uil uil-briefcase-alt parcours__icon"
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, _this),
                                    "Experience"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "parcours__section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: toggleState === 1 ? "parcours__content parcours__content-active" : "parcours__content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Formation Dev Web et Web mobile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 31,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Studi Ecole en ligne"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 32,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 34,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " Janvier 2023 - Avril 2024 (Diplome obtenu le 9 avril 2024)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 30,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 38,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 37,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 44,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 46,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 45,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Baccalauréat Professionnel Hôtellerie Restauration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 50,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "CFA Avon (77)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 53,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " 2007 - 2009"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "BEP Métier de la restauration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 60,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Lycée Antonin Carême (77)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 61,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 63,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " 2005 - 2007"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 59,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 67,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 68,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 66,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: toggleState === 2 ? "parcours__content parcours__content-active" : "parcours__content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 77,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 80,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 78,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Développeur Web et Web mobile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Création micro-entreprise"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 84,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 86,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " Septembre 2024"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 82,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 76,
                                        columnNumber: 21
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Cuisinier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "La Popotte de Valou (30)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " Depuis Septembre 2023"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 100,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 107,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Directeur Général"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Création d'entreprise franchisé Le Kiosque à Pizzas (30)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 116,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " Septembre 2016 - Septembre 2023"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 112,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Chef de Parti"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Les 3 Brasseurs Sénart (77)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 126,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " 2012 - 2016"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 130,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 136,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Chef pâtissier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Le Cozy Dammarie (77)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 145,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " 2011 - 2012"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 141,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Commis cuisine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Les Pléiades * (77)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " 2011"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "parcours__data",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 165,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__rounder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 166,
                                                columnNumber: 29
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "parcours__title",
                                                        children: "Commis cuisine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "parcours__subtitle",
                                                        children: "Les 3 Brasseurs Sénart (77)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 172,
                                                        columnNumber: 33
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "parcours__calender",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "uil uil-calendar-alt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                                lineNumber: 174,
                                                                columnNumber: 37
                                                            }, _this),
                                                            " 2009 - 2011"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                        lineNumber: 173,
                                                        columnNumber: 33
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                        lineNumber: 164,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/components/Parcours/Parcours.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, _this);
};
_s(Parcours, "uvzPP7+JR8H+jf0J2/pebcrvssc=");
_c = Parcours;
const __TURBOPACK__default__export__ = Parcours;
var _c;
__turbopack_context__.k.register(_c, "Parcours");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/About/Skills.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
;
;
;
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "about__info grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about__box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "about__title",
                        children: "Aptitudes"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/Skills.jsx",
                        lineNumber: 8,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info__span",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Auto-didacte"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 10,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Capacité d'adaptation"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 11,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Polyvalent"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 12,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Rigoureux"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 13,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Autonome"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 14,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/Skills.jsx",
                        lineNumber: 9,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/Skills.jsx",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about__box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "about__title",
                        children: "Langues"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/Skills.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__info__span",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Français"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 20,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "about__subtitle",
                                children: "Anglais"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/Skills.jsx",
                                lineNumber: 21,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/Skills.jsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/Skills.jsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/components/About/Skills.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/About/About.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../assets/moi3.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// import CV from '../../assets/John-Cv.pdf'
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$About$2f$Info$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/About/Info.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Parcours$2f$Parcours$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Parcours/Parcours.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$About$2f$Skills$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/About/Skills.jsx [client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
;
;
;
var About = function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about section",
                id: "about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section__title",
                        children: " Présentation "
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/About.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "section__subtitle",
                        children: "Introduction"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/About/About.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about__container container grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: AboutImg,
                                alt: "",
                                className: "about__img"
                            }, void 0, false, {
                                fileName: "[project]/portfolio/components/About/About.jsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about__data",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "about__description",
                                        children: "Dans un monde où le numérique prend de plus en plus de place, un site internet n'est pas négligeable. Visibilité, référencement, publicité, amélioration d'image, communication au plus près du client. Un site internet est un formidable outil pour se faire connaitre. "
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/About/About.jsx",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "about__description",
                                        children: "Fort de mes 15 années d'expérience dans la restauration, une passion pour le monde numérique et un diplôme obtenu en développement Web, je souhaite amener mon expertise afin de vous apporter de la visibilité et renforcer votre entreprise."
                                    }, void 0, false, {
                                        fileName: "[project]/portfolio/components/About/About.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$About$2f$Skills$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/portfolio/components/About/About.jsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/portfolio/components/About/About.jsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/portfolio/components/About/About.jsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/components/About/About.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Parcours$2f$Parcours$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/portfolio/components/About/About.jsx",
                lineNumber: 57,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section__div__info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "div__info container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$About$2f$Info$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/portfolio/components/About/About.jsx",
                        lineNumber: 59,
                        columnNumber: 54
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/About/About.jsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/portfolio/components/About/About.jsx",
                lineNumber: 58,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/components/About/About.jsx",
        lineNumber: 12,
        columnNumber: 9
    }, _this);
};
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/components/NavBar/Navbar.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_sliced_to_array.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/styles/navbar.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../App.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/link.js [client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var Header = function Header() {
    _s();
    /* Toggle menu */ var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), Toggle = _useState[0], showMenu = _useState[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "header",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "nav container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "nav__logo",
                    children: "MAZE"
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: Toggle ? "nav__menu show-menu" : "nav__menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav__list grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav__item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "nav__link active-link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-estate nav__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, _this),
                                            " ",
                                            "Accueil"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav__item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "nav__link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-presentation nav__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                                lineNumber: 28,
                                                columnNumber: 33
                                            }, _this),
                                            " ",
                                            "Présentation"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav__item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/portfolio",
                                        className: "nav__link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-bag nav__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                                lineNumber: 35,
                                                columnNumber: 33
                                            }, _this),
                                            " ",
                                            "Portfolio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav__item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        className: "nav__link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-desktop nav__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                                lineNumber: 42,
                                                columnNumber: 33
                                            }, _this),
                                            " ",
                                            "Services"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav__item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "nav__link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "uil uil-at nav__icon"
                                            }, void 0, false, {
                                                fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, _this),
                                            " Contact"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "uil uil-times nav__close",
                            onClick: function onClick() {
                                return showMenu(!Toggle);
                            }
                        }, void 0, false, {
                            fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav__toggle",
                    onClick: function onClick() {
                        return showMenu(!Toggle);
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "uil uil-apps"
                    }, void 0, false, {
                        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, _this)
    }, void 0, false, {
        fileName: "[project]/portfolio/components/NavBar/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, _this);
};
_s(Header, "0sBPGHGWEQ/WGH8ASB73YaXUWTc=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/pages/App.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './App.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Portfolio$2f$Portfolio$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Portfolio/Portfolio.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Contact$2f$Contact$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Contact/Contact.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Home$2f$Home$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Home/Home.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Services$2f$Services$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/Services/Services.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$About$2f$About$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/About/About.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$NavBar$2f$Navbar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/components/NavBar/Navbar.tsx [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$NavBar$2f$Navbar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/portfolio/pages/App.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Routes, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Route, {
                        path: "/",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Home$2f$Home$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/pages/App.js",
                            lineNumber: 14,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/pages/App.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Route, {
                        path: "/about",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$About$2f$About$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/pages/App.js",
                            lineNumber: 15,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/pages/App.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Route, {
                        path: "/portfolio",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Portfolio$2f$Portfolio$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/pages/App.js",
                            lineNumber: 16,
                            columnNumber: 43
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/pages/App.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Route, {
                        path: "/services",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Services$2f$Services$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/pages/App.js",
                            lineNumber: 17,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/pages/App.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Route, {
                        path: "/contact",
                        element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$components$2f$Contact$2f$Contact$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/portfolio/pages/App.js",
                            lineNumber: 18,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/portfolio/pages/App.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/portfolio/pages/App.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/portfolio/pages/App.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/reportWebVitals.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_instanceof.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
;
;
var reportWebVitals = function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(onPerfEntry, Function)) {
        __turbopack_context__.A("[project]/portfolio/node_modules/web-vitals/dist/web-vitals.js [client] (ecmascript, async loader)").then(function(param) {
            var getCLS = param.getCLS, getFID = param.getFID, getFCP = param.getFCP, getLCP = param.getLCP, getTTFB = param.getTTFB;
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
const __TURBOPACK__default__export__ = reportWebVitals;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/portfolio/pages/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/@swc/helpers/esm/_type_of.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2d$dom$2f$client$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/react-dom/client.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$pages$2f$App$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/pages/App.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$reportWebVitals$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/reportWebVitals.js [client] (ecmascript)");
;
;
;
;
;
;
var root = __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2d$dom$2f$client$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].StrictMode, {
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserRouter, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$pages$2f$App$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/portfolio/pages/index.js",
            lineNumber: 10,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/portfolio/pages/index.js",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
}, void 0, false, {
    fileName: "[project]/portfolio/pages/index.js",
    lineNumber: 8,
    columnNumber: 3
}, ("TURBOPACK compile-time value", void 0)));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$reportWebVitals$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/portfolio/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    function() {
        return __turbopack_context__.r("[project]/portfolio/pages/index.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/portfolio/pages/index\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/portfolio/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0x6cahz._.js.map