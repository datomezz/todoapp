import React, {useState, useEffect} from "react";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

import "./style.scss";

const App = () => {

  return (
    <main className="container">
      <Header />
      <Body />
      <Footer />
    </main>
  )
}

export default App;
