import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function construction() {
  return (
    <div>
      <Header />
      <p className="service_head serv_hd discover_div ">NEW CONSTRUCTION </p>

      <img
        className="serivce_bg"
        src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6530c80eca92fcfa2076e391_service-main-05.jpg"
      />
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          At Amarlux, we don't just help you find a property, we help you create
          it. Our comprehensive new construction services cater to every step of
          the journey, transforming your vision into a stunning reality.
        </p>

        <p className="service_header">WHAT’S INCLUDE IN THE SERVICES?</p>
        <p className="service_con">
          <br />
          <br />
          1. Pre-Construction Planning: We'll collaborate with you to define
          your vision, budget, and desired location. We'll connect you with
          reputable architects and engineers to bring your ideas to life on
          paper.
          <br />
          <br />
          2. Navigating Permits & Approvals: Let us handle the complexities of
          obtaining building permits and necessary approvals from local
          authorities.
          <br />
          <br />
          3.Expert Project Management: Our team will manage your entire
          construction project, ensuring it stays on schedule, within budget,
          and adheres to the highest quality standards.
          <br />
          <br />
          4.Vendor Selection & Coordination: We'll source skilled and reliable
          contractors, subcontractors, and material suppliers to ensure a
          seamless construction process.
          <br />
          <br />
          5.Quality Control & Inspections: Our team will conduct regular
          inspections throughout the construction process, ensuring all work
          meets industry standards and your expectations.
          <br />
          <br />
          6.Communication & Transparency: Stay informed every step of the way.
          We'll provide regular updates and progress reports, keeping you
          involved in the creation of your dream home.
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
