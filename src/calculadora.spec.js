import calculadoraCadenas from "./calculadora";

describe("Sumar", () => {
  it("deberia recicibr una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });
});