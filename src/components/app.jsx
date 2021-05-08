import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

import styles from "./style.scss";

const App = () => {

  return (
    <main className="container">
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    </main>
  )
}

export default App;
