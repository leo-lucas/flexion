export function validateInput(allCondition, value, validations = []) {
  return allCondition
    ? validateAll(value, validations)
    : validateOne(value, validations);
}

export function validateAll(value, validations = []) {
  return validations.reduce(
    (reduceMessage, { message, isValid }) =>
      reduceMessage || (!isValid(value) ? message : ""),
    ""
  );
}
export function validateOne(value, validations = []) {
  const errors = validations.filter(({ isValid }) => !isValid(value));

  return validations.length === errors.length && errors.length
    ? errors[0].message
    : "";
}
