import React from "react";
import "./App.css";

type CRYPTOS = { [key: string]: any };
type DATA = {
  key: string;
  price: number;
  market_cap: number;
  circulatingSupply: number;
  name: string;
};

type Props = unknown;
type State = {
  loading: boolean;
  cryptos?: CRYPTOS;
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidMount(): void {
    this.setState({
      loading: true,
    });
    const url =
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD";

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        const data = json.RAW;

        this.setState({
          loading: false,
          cryptos: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render(): JSX.Element {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    const formattedData: DATA[] = [];

    Object.keys({ ...this.state.cryptos }).forEach((crypto) => {
      this.state.cryptos &&
        formattedData.push({
          key: String(crypto),
          price: Number(this.state.cryptos[crypto]["USD"]["PRICE"]),
          market_cap: Number(this.state.cryptos[crypto]["USD"]["MKTCAP"]),
          circulatingSupply: Number(this.state.cryptos[crypto]["USD"]["SUPPLY"]),
          name: String(this.state.cryptos[crypto]["USD"]["FROMSYMBOL"]),
        });
    });

    return (
      <div className="App">
        <div>
          <label>Filter By</label>
          <select>
            <option>Name</option>
            <option>Price</option>
            <option>Market Cap</option>
            <option>Circulating supply</option>
          </select>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Circulating supply</th>
          </tr>

          <tbody>
            {formattedData.map((data) => {
              return (
                <tr key={data.key}>
                  <td>Name: {data.name}</td>
                  <td>Price: {data.price}</td>
                  <td>Market Cap: {data.market_cap}</td>
                  <td>Circulating supply: {data.circulatingSupply}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
