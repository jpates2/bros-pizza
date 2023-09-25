import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Menu from "./components/Menu";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Nav />
        <Menu />
      </main>
    </React.Fragment>
  );
}

export default App;
