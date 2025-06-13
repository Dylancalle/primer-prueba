import Esbisiesto from "./Esbisiesto.js";

describe("Es bisisesto", () => {
  it("deberia devolver true si es divisible entre 400", () => {
    expect(Esbisiesto(400)).toEqual(true);
  });
});