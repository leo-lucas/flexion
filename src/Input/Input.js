import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { validateInput } from "./helperInput";
import UncontrolledInput from "./UncontrolledInput";

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
export default function Input({
  label,
  controlId,
  placeholder,
  onChange,
  validations,
  mask,
  allCondition,
  type,
  value,
  error,
  onValidate,
  onBlurValidate,
  className,
  name,
  formText
}) {
  const [localValue, setValue] = useState(toMaskValue(value, mask));
  const [localError, setError] = useState("");
  const [errorProps, setErrorProps] = useState(error);

  useEffect(() => {
    setErrorProps(error);
  }, [error]);

  useEffect(() => {
    onChange && !localError && onChange(localValue);
  }, [localError, localValue, onChange]);

  useEffect(() => {
    let localError = errorProps;
    if (onValidate)
      localError = validateInput(allCondition, localValue, validations);
    setError(localError);
  }, [allCondition, errorProps, localValue, onValidate, validations]);

  function handleBlurValidate() {
    setError(validateInput(allCondition, localValue, validations));
  }

  function handleChange({ target: { value } }) {
    setValue(toMaskValue(value, mask));
    setErrorProps("");
  }

  return (
    <UncontrolledInput
      controlId={controlId}
      label={label}
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={localValue}
      onBlur={onBlurValidate && handleBlurValidate}
      onChange={handleChange}
      error={localError}
      formText={formText}
    />
  );
}

Input.propTypes = {
  label: PropTypes.string,
  controlId: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  onValidate: PropTypes.bool,
  onBlurValidate: PropTypes.bool,
  validations: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      isValid: PropTypes.func
    })
  ),
  className: PropTypes.string,
  mask: PropTypes.func,
  allCondition: PropTypes.bool,
  name: PropTypes.string,
  formText: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
};

Input.defaultProps = {
  allCondition: true,
  type: "text",
  value: ""
};

function toMaskValue(value, mask) {
  return mask ? mask(value) : value;
}
