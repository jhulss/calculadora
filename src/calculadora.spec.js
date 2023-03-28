import calculadoraCadenas from "./calculadora";

describe("Sumar", () => {
  it("deberia recicibr una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });

  it("deberia devolver un numero leido de la cadena", () => {
    expect(calculadoraCadenas("4")).toEqual(4);
  });

  it("deberia sumar dos numeros de una cadena separados por coma", () => {
    expect(calculadoraCadenas("1,3")).toEqual(4);
  });

  it("deberia sumar 4 numeros de una cadena separados por coma", () => {
    expect(calculadoraCadenas("1,3,4,2")).toEqual(10);
  });

  it("deberia sumar 4 numeros de una cadena separados por coma y guion", () => {
    expect(calculadoraCadenas("1-3,2-5")).toEqual(11);
  });

  it("deberia sumar 4 numeros de una cadena separados por coma y guion", () => {
    expect(calculadoraCadenas("1,3,2-6")).toEqual(12);
  });
});