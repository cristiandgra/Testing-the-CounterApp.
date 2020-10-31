import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import React from "react";
const { render } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");

describe("Pruebas en <PrimeraApp />", () => {
  /*test("debe de mostrar el mesaje Hola soy Papu", () => {
    const saludo = "Hola, soy Papu";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  });*/
  //Pruebas ahora con ENZYME (esto sería ya una prueba mas real):
  test("debe de mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, soy Papu";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola,soy Papu";
    const subtitulo = "Soy un subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper
      .find("p")
      .text(); /* (aqui el find funciona igual que el document queryselector)*/
    expect(textoParrafo).toBe(subtitulo);
  });
});
