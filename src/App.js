import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/UI/Header";
import "./assets/css/App.css";
import React, { useState } from "react";
import Container from "./components/UI/Container";
import BlogContent from "./components/Blog/BlogContent";
import SideContent from "./components/SideContent/SideContent";
function App() {
  document.getElementById("body").classList.add("body-light");
  const [mode, setMode] = useState(false);
  const switchMode = () => {
    let element = document.getElementById("body");
    if (mode) {
      setMode(false);
      element.classList.remove("body-dark");
      element.classList.add("body-light");
    } else {
      setMode(true);
      element.classList.remove("body-light");
      element.classList.add("body-dark");
    }
  };
  return (
    <Router>
      <Header mode={mode} switchMode={switchMode} />
      <Container left={<BlogContent mode={mode} />} right={<SideContent />} />
    </Router>
  );
}

export default App;
