"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var helperInput_1 = require("./helperInput");
/**
 * @description Props do Input
 * @typedef InputProps
 * @property {string} formText
 * @property {string} name
 * @property {string} className
 * @property {boolean} onValidate
 * @property {string} error
 * @property {string} value
 * @property {string} type
 * @property {boolean} allCondition
 * @property {function} mask
 * @property {array} validations
 * @property {function} onChange
 * @property {string} placeholder
 * @property {string} controlId
 * @property {string} label
 */
/**
 * @description Componente de Input genérico
 * @author Leonardo Lucas dos Santos
 * @copyright 09/2019
 * @param {InputProps} props
 * @returns {JSX.Element}
 */
function Input(_a) {
    var label = _a.label, controlId = _a.controlId, placeholder = _a.placeholder, onChange = _a.onChange, validations = _a.validations, mask = _a.mask, allCondition = _a.allCondition, type = _a.type, value = _a.value, error = _a.error, onValidate = _a.onValidate, onBlurValidate = _a.onBlurValidate, className = _a.className, name = _a.name, formText = _a.formText;
    var _b = react_1.useState(toMaskValue(value, mask)), localValue = _b[0], setValue = _b[1];
    var _c = react_1.useState(""), localError = _c[0], setError = _c[1];
    var _d = react_1.useState(error), errorProps = _d[0], setErrorProps = _d[1];
    react_1.useEffect(function () {
        setErrorProps(error);
    }, [error]);
    react_1.useEffect(function () {
        onChange && !localError && onChange(localValue);
    }, [localError, localValue, onChange]);
    react_1.useEffect(function () {
        var localError = errorProps;
        if (onValidate)
            localError = helperInput_1.validateInput(allCondition, localValue, validations);
        setError(localError);
    }, [allCondition, errorProps, localValue, onValidate, validations]);
    function handleBlurValidate() {
        setError(helperInput_1.validateInput(allCondition, localValue, validations));
    }
    function handleChange(_a) {
        var value = _a.target.value;
        setValue(toMaskValue(value, mask));
        setErrorProps("");
    }
    return controlId = { controlId: controlId };
    label = { label: label };
    type = { type: type };
    name = { name: name };
    className = { className: className };
    placeholder = { placeholder: placeholder };
    value = { localValue: localValue };
    onBlur = { onBlurValidate: onBlurValidate } && handleBlurValidate;
}
exports.default = Input;
onChange = { handleChange: handleChange };
error = { localError: localError };
formText = { formText: formText }
    /  >
;
;
Input.propTypes = {
    label: prop_types_1.default.string,
    controlId: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    type: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    error: prop_types_1.default.string,
    onValidate: prop_types_1.default.bool,
    onBlurValidate: prop_types_1.default.bool,
    validations: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        message: prop_types_1.default.string,
        isValid: prop_types_1.default.func
    })),
    className: prop_types_1.default.string,
    mask: prop_types_1.default.func,
    allCondition: prop_types_1.default.bool,
    name: prop_types_1.default.string,
    formText: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType])
};
Input.defaultProps = {
    allCondition: true,
    type: "text",
    value: ""
};
function toMaskValue(value, mask) {
    return mask ? mask(value) : value;
}
