import Esbisiesto from "./Esbisiesto.js";

describe("Es bisisesto", () => {
  it("deberia devolver true si es divisible entre 400", () => {
    expect(Esbisiesto(400)).toEqual(true);
  });
  it("deberia devolver false si el año es divisible por 100 pero no por 400", () => {
    expect(Esbisiesto(1700)).toEqual(false);
  });
});