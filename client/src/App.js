import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Home from "./components/Home/Home";
import CodePen from "./components/CodePen/CodePen";
// import Sketch from "./components/Sketch/Sketch";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/ChatApp" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/CodePen" component={CodePen} />
      {/* <Route path="/Sketch" component={Sketch} /> */}
    </Router>
  );
};

export default App;
