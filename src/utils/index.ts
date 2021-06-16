import { HASHMAP } from "../types";

export const sortHashMapsByKey = (data: HASHMAP[], by: string): HASHMAP[] =>
  [...data].sort((a, b) => String(a[by]).localeCompare(String(b[by]), undefined, { numeric: true }));

export const formatData = <Input, Output>(data: Input): Output => {
  return Object.keys(data).map((crypto) => {
    return {
      key: crypto,
      price: data[crypto]["USD"]["PRICE"],
      marketCap: data[crypto]["USD"]["MKTCAP"],
      circulatingSupply: data[crypto]["USD"]["SUPPLY"],
      name: data[crypto]["USD"]["FROMSYMBOL"],
    };
  }) as unknown as Output;
};
