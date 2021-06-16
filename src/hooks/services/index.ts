import { useEffect, useState } from "react";
import useSWR, { SWRResponse } from "swr";
import { API_URL, API_KEY, API_DEFAULT_TSYMS, API_DEFAULT_FSYMS } from "../../consts";
import { COINS_RAW_DATA, CRYPTO_COIN, MULTICOIN_DATA } from "../../types";
import { formatMultiCoinData } from "../../utils";

interface IMultiSymbolsPriceProps {
  fsyms?: string; // Comma separated cryptocurrency symbols list [ Min length - 1] [ Max length - 300]
  tsyms?: string; // Comma separated cryptocurrency symbols list to convert into [ Min length - 1] [ Max length - 100]
}

const useMultiCoinPrice = ({
  fsyms = API_DEFAULT_FSYMS,
  tsyms = API_DEFAULT_TSYMS,
}: IMultiSymbolsPriceProps): SWRResponse<CRYPTO_COIN[], Error> => {
  const [cryptos, setCryptos] = useState<CRYPTO_COIN[]>([]);
  const { data, ...rest } = useSWR<MULTICOIN_DATA, Error>(
    `${API_URL}?fsyms=${fsyms}&tsyms=${tsyms}&api_key=${API_KEY}`,
  );

  useEffect(() => {
    if (data) setCryptos(formatMultiCoinData<COINS_RAW_DATA, CRYPTO_COIN[]>(data.RAW));
  }, [data]);

  return { data: cryptos, ...rest } as SWRResponse<CRYPTO_COIN[], Error>;
};

export default useMultiCoinPrice;
