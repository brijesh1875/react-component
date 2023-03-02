import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import "./assets/css/App.css";
import React, { useState } from "react";
import Container from "./components/UI/Container";
import BlogContent from "./components/Blog/BlogContent";
import SideContent from "./components/SideContent/SideContent";
import Footer from "./components/UI/Footer";
import About from "./components/About/About";
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
  const content = {
    blog: <BlogContent mode={mode} />,
    about: <About mode={mode} />,
  };

  return (
    <Router>
      <Header mode={mode} switchMode={switchMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container
              left={content.blog}
              right={<SideContent mode={mode} />}
            />
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Container
              left={content.about}
              right={<SideContent mode={mode} />}
            />
          }
        />
      </Routes>
      <Footer mode={mode} />
    </Router>
  );
}

export default App;
