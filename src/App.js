import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
// import About from "./components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const lightMode = {
  backgroundColor: "#d0ddf1",
  color: "#000000",
};

const darkMode = {
  backgroundColor: "#1E1E1E",
  color: "#FFFFFF",
};

function App() {
  const [mode, setMode] = useState(lightMode);
  const [modeTxt, setModeTxt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === lightMode) {
      setMode(darkMode);
      document.body.style.backgroundColor = "#224367";
      document.body.style.color = "white";
      setModeTxt("Disable Dark mode");
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === darkMode) {
      setMode(lightMode);
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "black";
      setModeTxt("Enable Dark mode");
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Initial color

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          toggleMode={toggleMode}
          mode={mode}
          modeTxt={modeTxt}
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
        />
        <Alert alert={alert} />
        <TextArea showAlert={showAlert}/>



        {/* <Routes> */}
          {/* <Route path="/" element={<TextArea showAlert={showAlert}/>}></Route> */}

          
          {/* <Route path="/About" element={<About />}></Route> */}
          
          
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
