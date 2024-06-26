import { heroes } from "../data/Heroes";

export const getHeroesByName = (name = "") => {
  name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
