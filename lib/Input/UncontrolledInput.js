"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
var prop_types_1 = __importDefault(require("prop-types"));
function UncontroledInput(_a) {
    var controlId = _a.controlId, label = _a.label, type = _a.type, name = _a.name, className = _a.className, placeholder = _a.placeholder, value = _a.value, onBlur = _a.onBlur, onChange = _a.onChange, error = _a.error, formText = _a.formText;
    return controlId = { controlId: controlId };
    className = "input" >
        {}
        < react_bootstrap_1.Form.Control;
    type = { type: type };
    name = { name: name };
    className = { className: className };
    placeholder = { placeholder: placeholder };
    value = { value: value };
    onBlur = { onBlur: onBlur };
    onChange = { onChange: onChange };
    isInvalid = {};
    error;
}
exports.default = UncontroledInput;
/>;
{
    renderError(error);
}
{
    formText;
}
/Form.Group>;
;
UncontroledInput.propTypes = {
    controlId: prop_types_1.default.string,
    label: prop_types_1.default.string,
    type: prop_types_1.default.string,
    name: prop_types_1.default.string,
    className: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    value: prop_types_1.default.string,
    onBlur: prop_types_1.default.func,
    onChange: prop_types_1.default.func,
    error: prop_types_1.default.string,
    formText: prop_types_1.default.string
};
function renderLabel(label) {
    return label ? className = "mb-0" >
        { label: label } < /small>
        < /Form.Label>
        :
    ;
    />;
}
function renderError(error) {
    return type;
    "invalid" > { error: error } < /Form.Control.Feedback>;;
}
