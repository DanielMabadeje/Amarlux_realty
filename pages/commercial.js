import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function commercial() {
  return (
    <div>
      <Header />
      <p className="service_head serv_hd discover_div ">
        COMMERCIAL REAL ESTATE
      </p>

      <img
        className="serivce_bg"
        src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6530c80eca92fcfa2076e391_service-main-05.jpg"
      />
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          Does your business dream big? At AMARLUX REALTY, we understand that
          finding the ideal commercial space is crucial for your company's
          success in Lagos' dynamic and ever-evolving market. We are your
          trusted partner in navigating the world of commercial real estate.
          Leverage Amarachi's expertise to:
        </p>

        <p className="service_header">WHAT’S INCLUDE IN THE SERVICES?</p>
        <p className="service_con">
          We are your trusted partner in navigating the world of commercial real
          estate. Leverage Amarachi's expertise to:
          <br />
          <br />
          1. Unlock a Network of Properties: Gain access to a comprehensive
          portfolio of commercial spaces, from bustling office buildings and
          retail storefronts to prime industrial locations and co-working
          havens.
          <br />
          <br />
          2. Expert Market Knowledge: Benefit from Amarachi's deep understanding of
          Lagos commercial landscape, including insights into key areas, rental
          trends, and future growth projections.
          <br />
          <br />
          3. Tailored Search Strategy: We don't believe in a one-size-fits-all
          approach. We'll work closely with you to understand your specific
          business needs, budget, and desired location, crafting a personalized
          search strategy.
          <br />
          <br />
          4. Expert Negotiation: Leverage Amarachi's strong negotiation skills to
          secure the most favorable lease terms and pricing for your business.
          <br />
          <br />
          5. Seamless Transaction Management: Our team will handle the nitty-gritty
          details, from lease agreements to inspections, ensuring a smooth and
          stress-free process.
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
            <button className="contact">Let us Talk</button>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
}
