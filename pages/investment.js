import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function investment() {
  return (
    <div>
      <Header />
      <p className="service_head serv_hd discover_div ">
        INVESTMENT PROPERTIES
      </p>

      <img
        className="serivce_bg"
        src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6530cc96d96e15a8a2fafe9c_service-main-02.jpg"
      />
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          At Amarlux, we understand the power of real estate investment. Our
          comprehensive investment property services empower you to make
          informed decisions and maximize your returns on Lagos thriving
          property market.
        </p>

        <p className="service_header">WHAT’S INCLUDE IN THE SERVICES?</p>
        <p className="service_con">
          1.Strategic Property Acquisition: We leverage our extensive market
          knowledge to identify properties with high rental potential and
          long-term growth prospects.
          <br />
          <br />
          2.Investment Analysis & Due Diligence: Our team conducts thorough
          analyses, considering factors like rental income, property value,
          vacancy rates, and maintenance costs, ensuring a sound investment.
          <br />
          <br />
          3.Expert Negotiation & Acquisition: We will handle negotiations on your
          behalf, securing the best possible price and terms for your investment
          property.
          <br />
          <br />
          4.Tenant Management & Rent Collection: Say goodbye to the hassle of
          managing tenants. Amarlux will handle tenant screening, lease
          agreements, rent collection, and eviction procedures if necessary.
          <br />
          <br />
          5.Ongoing Property Maintenance: We will manage routine maintenance and
          repairs, ensuring your property remains in excellent condition and
          attracts high-quality tenants.
        </p>
      </div>
      <div className="cta_div flex ">
        <div className="">
          <p className="amralux_text_head text-center">Amarlux Realty</p>
          <p className="amralux_text text-center">
            We make home buying and selling, easy and stress free. Ensuring you
            <br /> get the best deal FAST{" "}
          </p>
          <center>
          <button className="contact">          <a href="tel:+2349154373644">Let us Talk</a>
          </button>          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
}
