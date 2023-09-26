import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Menu from "./components/Menu";
import WhoSection from "./Layout/WhoSection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Nav />
        <Menu />
        <WhoSection />
      </main>
    </React.Fragment>
  );
}

export default App;
