import React from "react";
import { SWRConfig } from "swr";
import Table from "./components/Table";
import useMultiCoinPrice from "./hooks/services";
import { ContainerStyles, WrapperStyles } from "./styles";

const App = (): JSX.Element => {
  const { data, isValidating: loading, error } = useMultiCoinPrice({ tsyms: "USD" });

  if (error) return <div>Ups! There is some error at load the data</div>;

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        revalidateOnFocus: false,
        refreshInterval: 60000,
        dedupingInterval: 60000,
      }}
    >
      <div className={WrapperStyles}>
        <div className={ContainerStyles}>
          <Table data={data || []} loading={loading} />
        </div>
      </div>
    </SWRConfig>
  );
};

export default App;
