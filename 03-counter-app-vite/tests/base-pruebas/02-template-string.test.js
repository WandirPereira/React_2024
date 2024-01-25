// const { getSaludo } = require("../../src/base-pruebas/02-template-string");
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Testes em 02-template-string", () => {
  test('getSaludo deve retornar "Hola Wandir"', () => {
    const name = "Wandir";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
