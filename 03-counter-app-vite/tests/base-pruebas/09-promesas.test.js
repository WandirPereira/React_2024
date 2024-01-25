import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Testes em 09-promesas", () => {
  test("getHeroeByIdAsync deve  retorna um herói", async () => {
    const id = 1;
    const hero = await getHeroeByIdAsync(id);
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
    //done();
  });

  //esta parte eu não entendi.
  test("getHeroeByIdAsync deve  retorna um herói", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });
});
