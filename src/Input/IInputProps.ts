export interface Input {
  (props: InputProps): JSX.Element;
}

export interface InputProps {
  label: string;
  controlId: string;
  placeholder: string;
  onChange: Function;
  validations: Array<Function>;
  mask: string;
  allCondition: boolean;
  type: string;
  value: string | number;
  error: string;
  onValidate: boolean;
  onBlurValidate: boolean;
  className: string;
  name: string;
  formText: Function;
}
