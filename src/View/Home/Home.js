import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "./Banner/Banner";
import Chart from "./Chart/Chart";
import Percent from "./Percent/Percent";
import OurFeatures from "./OurFeatures/OurFeatures";
import ServicesOur from "./ServicesOur/ServicesOur";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Chart />
      <Percent />
      <OurFeatures />
      <ServicesOur />
      <Footer />
    </div>
  );
}
