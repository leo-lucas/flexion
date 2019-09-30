export interface UncontrolledInputProps {
  controlId: string,
  label: string,
  type: string,
  name: string,
  className: string,
  placeholder: string,
  value: string|number,
  onBlur: Function,
  onChange: Function,
  error: string,
  formText: Function
}