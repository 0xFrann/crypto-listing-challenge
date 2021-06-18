import { SWRResponse } from "swr";

export type HASHMAP = {
  [key: string]: any;
};

type COINS_DATA = {
  [fsyms: string]: {
    [tsyms: string]: {
      [key: string]: string;
    };
  };
};

export type COINS_RAW_DATA = COINS_DATA & {
  [fsym: string]: {
    [tsyms: string]: {
      PRICE: number;
      MKTCAP: number;
      SUPPLY: number;
      FROMSYMBOL: string;
    };
  };
};

export type MULTICOIN_DATA = {
  DISPLAY: COINS_DATA;
  RAW: COINS_RAW_DATA;
};

export type CRYPTO_COIN = {
  key: string;
  price: number;
  marketCap: number;
  circulatingSupply: number;
  name: string;
};
