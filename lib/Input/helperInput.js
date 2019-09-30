"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateInput(allCondition, value, validations) {
    if (validations === void 0) { validations = []; }
    return allCondition
        ? validateAll(value, validations)
        : validateOne(value, validations);
}
exports.validateInput = validateInput;
function validateAll(value, validations) {
    if (validations === void 0) { validations = []; }
    return validations.reduce(function (reduceMessage, _a) {
        var message = _a.message, isValid = _a.isValid;
        return reduceMessage || (!isValid(value) ? message : "");
    }, "");
}
exports.validateAll = validateAll;
function validateOne(value, validations) {
    if (validations === void 0) { validations = []; }
    var errors = validations.filter(function (_a) {
        var isValid = _a.isValid;
        return !isValid(value);
    });
    return validations.length === errors.length && errors.length
        ? errors[0].message
        : "";
}
exports.validateOne = validateOne;
