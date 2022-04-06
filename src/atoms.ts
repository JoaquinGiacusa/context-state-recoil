import { atom, selector } from "recoil";

export const userState = atom({
  key: "textState",
  default: { username: "Joaquin Giacusa", id: 1234 },
});

export const idState = selector({
  key: "charCountState",
  get: async ({ get }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data.id;
  },
});

export const queryState = atom({
  key: "query",
  default: "",
});

export const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      // hago la búsqueda usando la API de mercadolibre
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );
      const data = await res.json();
      return data.results;
    } else {
      return [];
    }
  },
});
