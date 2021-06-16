import React from "react";
import { SWRConfig } from "swr";
import Table from "./components/Table";
import useMultiCoinPrice from "./hooks/services";

const App = (): JSX.Element => {
  const { data, isValidating: loading, error } = useMultiCoinPrice({ tsyms: "USD" });

  if (error) return <div>Ups! There is some error at load the data</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        revalidateOnFocus: false,
        refreshInterval: 60000,
      }}
    >
      <Table data={data || []} />
    </SWRConfig>
  );
};

export default App;
