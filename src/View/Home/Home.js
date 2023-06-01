import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "./Banner/Banner";
import Chart from "./Chart/Chart";
import Percent from "./Percent/Percent";
import OurFeatures from "./OurFeatures/OurFeatures";
import ServicesOur from "./ServicesOur/ServicesOur";
import OurProject from "./OurProject/OurProject";
import Customer from "./Customer/Customer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Chart />
      <Percent />
      <OurFeatures />
      <ServicesOur />
      <OurProject />
      <Customer />
      <Footer />
    </div>
  );
}
