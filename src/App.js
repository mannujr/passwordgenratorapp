import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassChar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [upperCase, setUpperCase] = useState(true);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passlen, setPassLen] = useState(8);
  const [Password, setPassword] = useState("");
  const [copy, setClick] = useState(true);

  let createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (upperCase || lowercase || numbers || symbol) {
      if (upperCase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < passlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setPassword(finalPass);

      toast.info(" Password Genrate hogya, Copy krlo :)");
    } else {
      toast.warning("Ek Checkbox to select kro Sahab!!");
    }
  };

  let Copy = () => {
    console.log(Password);

    if ( Password!=='' && copy === true) {
      navigator.clipboard.writeText(Password);
      toast.info("Password copy ho chuka hai!!");
      setClick(false);

      setTimeout(() => {
        setClick(true);
      }, 3000); // Delay of 2 seconds
    } else if(copy===false){
    }
    else {
      toast.warning("Password Genrate toh kr");
    }
  };

  return (
    <div>
      <ToastContainer />

      <div className="passwordBox">
        <h3>Password Genrator</h3>
        <div className="password">
          <input value={Password} readonly />
          <button onClick={Copy}>Copy</button>
        </div>

        <div className="passlength">
          <label>Password length</label>
          <input
            type="number"
            max={20}
            min={1}
            value={passlen}
            onChange={(e) => {
              if (e.target.value <= 20) {
                setPassLen(e.target.value);
              }
            }}
          />
        </div>
        <div className="passlength">
          <label>Include Uppercase</label>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
          />
        </div>
        <div className="passlength">
          <label>Include lowercase</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passlength">
          <label>Include numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>
        <div className="passlength">
          <label>Include symbol</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <button onClick={createPassword} className="genratePass">
          Genrate Password
        </button>
      </div>
    </div>
  );
}

export default App;
