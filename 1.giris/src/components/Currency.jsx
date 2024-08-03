import { useState } from "react";
import "../css/currency.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_mCWGensafRiiJddHfjt12Zh1b5qdDHvsrvY8tRxK";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState();

  const exchange = async () => {
    // console.log(amount); //ÇALIŞIYOR MU DİYE BAKTIK
    // console.log(fromCurrency);
    // console.log(toCurrency);
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result=((response.data.data[toCurrency])*amount).toFixed(2);//fixed noktadan sonraki değeri ayarlar!
    setResult(result);
    
  };

  return (
    <div className="currency-div">
      <div
        style={{
          color: "black",
          marginTop: "-20px",
          fontFamily: "arial",
          backgroundColor: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3>DÖVİZ UYGULAMASI</h3>
      </div>

      <div style={{ marginTop: "25px" }}>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} //ilk imputa girdiğimiz değeri alacak ve setAmount kısmınagönderecek
        ></input>

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)} //buradda eurmu tl mi  ne seçtii ona bakar
          className="from-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <FaArrowAltCircleRight
          style={{ fontSize: "25px", color: "#fff", marginRight: "10px" }}
        />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        ></input>
      </div>
      <div>
        <button onClick={exchange} className="exchange-btn">
          ÇEVİR
        </button>
      </div>
    </div>
  );
}

export default Currency;
