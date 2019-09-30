import * as React from "react";
import PropTypes from "prop-types";
import { UncontrolledInputProps } from "./IUncontrolledInputProps";

export default function UncontrolledInput({
  controlId,
  label,
  type,
  name,
  className,
  placeholder,
  value,
  onBlur,
  onChange,
  error,
  formText
}: UncontrolledInputProps) {
  // function renderError(error) {
  //   return <div type="invalid">{error}</div>;
  // }
  // function renderLabel(label) {
  //   return label &&  <span>{label}</span>
  // }
  // return (
  //   <div type="text" controlId={controlId}>
  //     {renderLabel(label)}
  //     <input
  //       type={type}
  //       name={name}
  //       className={className}
  //       placeholder={placeholder}
  //       value={value}
  //       onBlur={onBlur}
  //       onChange={onChange}
  //       isInvalid={!!error}
  //     />
  //     {renderError(error)}
  //     {formText}
  //   </div>
  // );
}

UncontrolledInput.propTypes = {
  controlId: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.string,
  formText: PropTypes.string
};
