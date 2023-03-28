import calculadoraCadenas from "./calculadora";

describe("Sumar", () => {
  it("deberia recicibr una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });

  it("deberia devolver un numero leido de la cadena", () => {
    expect(calculadoraCadenas("4")).toEqual(4);
  });
});