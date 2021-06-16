import React, { useMemo, useState } from "react";
import { sortHashMapsByKey } from "../utils";
import { CRYPTO_COIN } from "../types";

type FILTER = "name" | "price" | "marketCap" | "circulatingSupply";

interface ITableProps {
  data: CRYPTO_COIN[];
}

const Table = ({ data }: ITableProps): JSX.Element => {
  const [filter, setFilter] = useState<FILTER>("name");
  const filteredCryptos = useMemo(() => sortHashMapsByKey(data, filter), [filter, data]);

  return (
    <div>
      <div>
        <label>Filter By</label>
        <select defaultValue={filter} onChange={(e) => setFilter(e.currentTarget.value as FILTER)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="marketCap">Market Cap</option>
          <option value="circulatingSupply">Circulating supply</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name {filter === "name" && "^"}</th>
            <th>Price {filter === "price" && "^"}</th>
            <th>Market Cap {filter === "marketCap" && "^"}</th>
            <th>Circulating supply {filter === "circulatingSupply" && "^"}</th>
          </tr>
        </thead>

        <tbody>
          {filteredCryptos.map((data) => {
            return (
              <tr key={data.key}>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.marketCap}</td>
                <td>{data.circulatingSupply}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
