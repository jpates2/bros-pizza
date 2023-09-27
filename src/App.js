import React from "react";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Menu from "./components/Menu";
import WhoSection from "./Layout/WhoSection";
import WhereSection from "./Layout/WhereSection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Nav />
        <Menu />
        <WhoSection />
        <WhereSection />
      </main>
    </React.Fragment>
  );
}

export default App;
