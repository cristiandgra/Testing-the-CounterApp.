import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("Pruebas en funciones de Héroes", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe de retornar undefined si Héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);

    const owners = heroes.filter((h) => h.owner === owner);

    expect(heroe).toEqual(owners);
  });

  test("debe de retornar un arreglo con heroes de marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toBe(2);
  });
});
