import { heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error('Invalid publisher');
  }

  return heroes.filter(heroe => heroe.publisher === publisher);
};