import React from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
import { cpfValid, cpfFormat } from "Helpers";
import { shallow, mount } from "enzyme";

describe("Input test", () => {
  it("Render", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Render with props", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        error="teste"
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Input events", () => {
  it("Render events", () => {
    const input = shallow(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        name="input"
        allCondition={true}
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />
    );
    const event = { target: { name: "input", value: "spam" } };
    input.find({ name: "input" }).simulate("change", event);
  });
  it("Render events with mask", () => {
    const input = shallow(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        name="input"
        mask={cpfFormat}
        onValidate={true}
        allCondition={false}
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />
    );
    input
      .find({ name: "input" })
      .simulate("change", { target: { value: "1544" } });
  });
  it("Render events with mask and allCOnditions", () => {
    const input = mount(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        id="input"
        name="input"
        mask={cpfFormat}
        onValidate={true}
        allCondition={true}
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />
    );
    input
      .find({ id: "input" })
      .simulate("change", { target: { value: "1544" } });
  });
});
describe("Input onblur events", () => {
  it("Render with onblur allCondition", () => {
    const input = shallow(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        name="input"
        mask={cpfFormat}
        onBlurValidate={true}
        allCondition={true}
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />
    );
    input
      .find({ name: "input" })
      .simulate("blur", { target: { value: "1544" } });
  });
  it("Render with onblur", () => {
    const input = shallow(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        name="input"
        mask={cpfFormat}
        onBlurValidate={true}
        allCondition={false}
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />
    );
    input
      .find({ name: "input" })
      .simulate("blur", { target: { value: "1544" } });
  });
});
describe("Render events onChange", () => {
  it("evento de onChange", () => {
    const input = mount(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        id="input"
        onChange={() => {}}
        name="input"
        mask={cpfFormat}
        onValidate={true}
        allCondition={true}
        validations={[{ isValid: cpfValid, message: "Erro cpf" }]}
      />
    );
    input
      .find({ id: "input" })
      .simulate("change", { target: { value: "1544" } });
  });

  it("evento de sem validações", () => {
    const input = mount(
      <Input
        label="Cartão dotz, CPF ou email"
        placeholder="Digite"
        id="input"
        onChange={() => {}}
        name="input"
        mask={cpfFormat}
        onValidate={true}
        allCondition={true}
      />
    );
    input
      .find({ id: "input" })
      .simulate("change", { target: { value: "1544" } });
  });
});
