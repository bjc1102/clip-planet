import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Input from "./components/Input";
import "./index.scss";

const Popup = () => {
  const [API_KEY, setAPI_Key] = useState("");

  function handleAPI_KEY(key: string) {
    setAPI_Key(key);
  }

  useEffect(() => {
    chrome.storage.local.get("API_KEY").then((response) => {
      handleAPI_KEY(response.API_KEY);
    });
  }, []);

  if (!API_KEY) return <Input handleAPI_KEY={handleAPI_KEY} />;
  return <Main handleAPI_KEY={handleAPI_KEY} API_KEY={API_KEY} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
