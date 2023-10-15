import React from "react";
import Header from "../Layout/Header";
import Nav from "../Layout/Nav";
import Menu from "../components/Menu";
import WhoSection from "../Who/WhoSection";
import WhereSection from "../Where/WhereSection";
import BookingSection from "../Bookings/BookingSection";
import Footer from "../Layout/Footer";
import ScrollToTop from "../Layout/ScrollToTop";

function HomePage() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <main>
        <Nav />
        <Menu />
        <WhoSection />
        <WhereSection />
        <BookingSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
