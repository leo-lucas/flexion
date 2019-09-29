import { validateInput, validateAll, validateOne } from "../helperInput";

describe("Helper validations input", () => {
  it("validateInput", () => {
    validateInput(true, "", []);
  });

  it("validateInput with validations undefined", () => {
    validateInput(false, "");
  });

  it("validateAll", () => {
    validateAll("", []);
  });

  it("validateAll com valor invalido", () => {
    validateAll("", [{ isValid: () => true, message: "erro" }]);
  });

  it("validateAll with validations undefined", () => {
    expect(validateAll("")).toBe("");
  });

  it("validateOne", () => {
    validateOne("", []);
  });

  it("validateOne with validations undefined", () => {
    expect(validateOne("")).toBe("");
  });
});
