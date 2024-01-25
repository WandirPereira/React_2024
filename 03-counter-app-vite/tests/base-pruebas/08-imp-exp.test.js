import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Testes em 08-imp-exp", () => {
  test("getHeroesById deve retornar um herói por id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    console.log(hero);
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroesById deve retornar heroes da DC", () => {
    console.log(getHeroesByOwner("DC").length);
    expect(getHeroesByOwner("DC").length).toEqual(3);
    expect(getHeroesByOwner("DC").length).toBe(3);
  });

  test("getHeroesById deve retornar heroes da Marvel", () => {
    console.log(getHeroesByOwner("Marvel").length);
    //expect(getHeroesByOwner("Marvel").length).toEqual(2);
    expect(getHeroesByOwner("Marvel").length).toBe(2);
  });
});
