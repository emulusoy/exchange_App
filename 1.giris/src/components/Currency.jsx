import "../css/currency.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Currency() {
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
        <input type="number" className="amount"></input>

        <select className="from-currency-option">
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <FaArrowAltCircleRight
          style={{ fontSize: "25px", color: "#fff", marginRight: "10px" }}
        />
        <select className="to-currency-option">
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input type="number" className="result"></input>
      </div>
      <div>
        <button className="exchange-btn">ÇEVİR</button>
      </div>
    </div>
  );
}

export default Currency;
