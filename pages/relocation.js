import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Relocation() {
  return (
    <div>
      <Header/>
      <p className="service_head serv_hd discover_div ">RELOCATION SERVICES </p>

      <img
        className="serivce_bg"
        src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6530c82f3b1624f80f3fb134_service-main-01.jpg"
      />
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          Moving to a new city can be exciting, but it can also be overwhelming.
          Here at Amarlux, we understand the complexities of relocation and are
          dedicated to making your transition to Lagos seamless and stress-free
        </p>

        <p className="service_header">WHAT’S INCLUDE IN THE SERVICES?</p>
        <p className="service_con">
          1. Pre-Move Planning: We will help you navigate the logistics of your
          move, from creating a personalized moving timeline to connecting you
          with reliable movers and packers. We will offer guidance on budgeting,
          finding temporary housing, and navigating the local school system if
          applicable.
          <br />
          <br />
          2. Settling-In Assistance: We will help you find your bearings in Lagos,
          from identifying neighborhoods that suit your needs to discovering
          hidden gems and local resources. We will connect you with essential
          services like utilities, internet providers, and cable companies.
          <br />
          <br />
          3. Personalized Support: We understand everyone relocation needs are
          unique. Amarlux offers a dedicated relocation specialist who will be
          your point of contact throughout the process, ready to answer your
          questions and address any concerns you may have.
          <br />
          <br />
          4. Cultural Integration: Immerse yourself in the vibrant culture of
          Lagos. We can provide recommendations for local events, language
          classes, and cultural experiences to help you feel at home in your new
          community.
        </p>
        <p className="service_header">BENEFIT</p>
        <br/>
        <br/>
        <p>
          1. Reduced Stress: Focus on the excitement of your new adventure while we
          handle the logistics. 
          <br/>
          <br/>
          2.Local Expertise: Leverage our in-depth knowledge
          of Lagos to navigate the city with confidence.
          <br/>
          <br/>
          3. Time-Saving Efficiency: Eliminate the time-consuming research and legwork associated with
          relocation. 
          <br/>
          <br/>
          4.Peace of Mind: Gain the confidence that comes from having
          a trusted partner by your side every step of the way.
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
      <Footer/>
    </div>
  );
}
