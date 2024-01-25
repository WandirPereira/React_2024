const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr");

describe("Testes em 07-deses-arr", () => {
  test("Deve retornar uma string e um número", () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
