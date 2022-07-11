import InputCountry from "./components/InputCountry";
import DisplayCountry from "./components/DisplayCountry";

import Header from "./components/pages/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";

function App() {
  const [text, setText] = useState("");
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesaage] = useState("");

  const getApi = () => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const myApi = response.data;
        setCountry(myApi);
        setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
        setErrorMesaage(err.message);
        setLoading(false);
        setErrorMesaage("");
      });
  };

  useEffect(() => getApi(), []);

  return (
    <div className=" bg-slate-300 h-screen">
      <Header />
      <InputCountry text={text} setText={setText} />
      <div className="">
        {errorMessage && (
          <div className="font-bold text-center">{errorMessage}</div>
        )}

        {loading ? (
          <Spinner />
        ) : (
          country && <DisplayCountry country={country} text={text} />
        )}
      </div>
    </div>
  );
}

export default App;
