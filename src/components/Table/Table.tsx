import React, { useMemo, useState } from "react";
import { formatCurrency, sortHashMapsByKey } from "../../utils";
import { CRYPTO_COIN } from "../../types";
import {
  TableBodyStyles,
  TableCellStyles,
  TableHeaderCellStyles,
  TableHeaderStyles,
  TableRowStyles,
  TableStyles,
  TableWrapperStyles,
  TableLoadingStyles,
} from "./styles";

type FILTER = "name" | "price" | "marketCap" | "circulatingSupply";

interface ITableProps {
  data: CRYPTO_COIN[];
  loading?: boolean;
}

const Table = ({ data, loading }: ITableProps): JSX.Element => {
  const [filter, setFilter] = useState<FILTER>("marketCap");
  const filteredCryptos = useMemo(() => sortHashMapsByKey(data, filter), [filter, data]);

  return (
    <div className={TableWrapperStyles}>
      <table className={TableStyles}>
        <thead className={TableHeaderStyles}>
          <tr className={TableRowStyles}>
            <th className={TableHeaderCellStyles(filter === "name")} onClick={() => setFilter("name" as FILTER)}>
              Name
            </th>
            <th className={TableHeaderCellStyles(filter === "price")} onClick={() => setFilter("price" as FILTER)}>
              Price
            </th>
            <th
              className={TableHeaderCellStyles(filter === "marketCap")}
              onClick={() => setFilter("marketCap" as FILTER)}
            >
              Market Cap
            </th>
            <th
              className={TableHeaderCellStyles(filter === "circulatingSupply")}
              onClick={() => setFilter("circulatingSupply" as FILTER)}
            >
              Circulating supply
            </th>
          </tr>
        </thead>
        <tbody className={`${TableBodyStyles} ${!data.length ? "h-px" : ""}`}>
          {filteredCryptos.map((data, i) => {
            return (
              <tr key={data.key} className={`${TableRowStyles} ${(i % 2) - 1 ? "bg-purple-100" : "bg-white"}`}>
                <td className={TableCellStyles}>{data.name}</td>
                <td className={TableCellStyles}>{formatCurrency(data.price)}</td>
                <td className={TableCellStyles}>{formatCurrency(data.marketCap)}</td>
                <td className={TableCellStyles}>{formatCurrency(data.circulatingSupply)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={TableLoadingStyles(!!loading)}>LOADING</div>
    </div>
  );
};

export default Table;
