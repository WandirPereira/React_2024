const { getUser } = require("../../src/base-pruebas/05-funciones");

describe("Testes em 05-funciones", () => {
  test("getUser deve retornar um objeto ", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // expect(testUser).toEqual(user);
    expect(testUser).toMatchObject(user);
  });
});
