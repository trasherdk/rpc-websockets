"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = exports.DefaultDataPack = void 0;
const errors = new Map([
    [-32000, "Event not provided"],
    [-32600, "Invalid Request"],
    [-32601, "Method not found"],
    [-32602, "Invalid params"],
    [-32603, "Internal error"],
    [-32604, "Params not found"],
    [-32605, "Method forbidden"],
    [-32606, "Event forbidden"],
    [-32700, "Parse error"]
]);
class DefaultDataPack {
    encode(value) {
        return JSON.stringify(value);
    }
    decode(value) {
        return JSON.parse(value);
    }
}
exports.DefaultDataPack = DefaultDataPack;
/**
 * Creates a JSON-RPC 2.0-compliant error.
 * @param {Number} code - error code
 * @param {String} details - error details
 * @return {Object}
 */
function createError(code, details) {
    const error = {
        code: code,
        message: errors.get(code) || "Internal Server Error"
    };
    if (details)
        error["data"] = details;
    return error;
}
exports.createError = createError;
