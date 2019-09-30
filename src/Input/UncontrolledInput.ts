import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function UncontroledInput({
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
}) {
  return (
    <Form.Group controlId={controlId} className="input">
      {renderLabel(label)}
      <Form.Control
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        isInvalid={!!error}
      />
      {renderError(error)}
      {formText}
    </Form.Group>
  );
}

UncontroledInput.propTypes = {
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

function renderLabel(label) {
  return label ? (
    <Form.Label className="mb-0">
      <small>{label}</small>
    </Form.Label>
  ) : (
    <></>
  );
}

function renderError(error) {
  return <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>;
}
