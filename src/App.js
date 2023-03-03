import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import "./assets/css/App.css";
import React, { useState } from "react";
import Container from "./components/UI/Container";
import BlogContent from "./components/Blog/BlogContent";
import SideContent from "./components/SideContent/SideContent";
import Footer from "./components/UI/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact";
import BlogDescription from "./components/Blog/BlogDescription";
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
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. Lorem
  Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. - John Doe It was
  popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of
  Lorem Ipsum. Lorem Ipsum has been the industry's The generated
  Lorem Ipsum is therefore always Making this the first true
  generator It is a long established fact that a reader will be
  distracted by the readable content of a page when looking at its
  layout. The point of using Lorem Ipsum is that it has a
  more-or-less normal distribution of letters, as opposed to using
  'Content here, content here', making it look like readable
  English. It uses a dictionary of over 200 Latin words, combined
  with a handful of model sentence structures, to generate Lorem
  Ipsum which looks reasonable. The generated Lorem Ipsum is
  therefore always free from repetition, injected humour, or
  non-characteristic words etc. There are many variations of
  passages of Lorem Ipsum available, but the majority have
  suffered alteration in some form, by injected humour, or
  randomised words which don't look even slightly believable. If
  you are going to use a passage of Lorem Ipsum, you need to be
  sure there isn't anything embarrassing hidden in the middle of
  text.`;
  const content = {
    blog: <BlogContent mode={mode} />,
    about: <About mode={mode} />,
    contact: <Contact mode={mode} />,
    post: (
      <BlogDescription
        mode={mode}
        heading="Google Correlate: The Best SEO Research Tool You Aren’t Using"
        addedOn="July 12, 2021"
        author="John Doe"
        description={text}
      />
    ),
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
        <Route
          exact
          path="/contact"
          element={
            <Container
              left={content.contact}
              right={<SideContent mode={mode} />}
            />
          }
        />
        <Route
          exact
          path="/post"
          element={
            <Container
              left={content.post}
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
