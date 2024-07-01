import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function inspection() {
  return (
    <div>
      <Header/>
      <p className="service_head serv_hd discover_div ">HOME INSPECTION </p>
      <img
        className="serivce_bg"
        src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6530c823ed44cac48dbbfea0_service-main-03.jpg"
      />
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          Buying a home is a significant investment. Here at Amarlux, we
          understand the importance of making an informed decision. That is why
          we offer comprehensive home inspection services designed to give you
          the peace of mind you deserve before taking the leap.
        </p>

        <p className="service_header">
          WHY CHOOSE AMARACHI FOR YOUR HOME INSPECTION
        </p>
        <p className="service_con">
          1. Experienced and Certified: Amarachi is a licensed and certified
          home inspector with a keen eye for detail. She undergoes regular
          training to stay up-to-date on the latest building codes and
          inspection standards.<br/>
          <br/> 2. Thorough Inspection Reports: Expect a
          detailed and easy-to-understand report outlining the condition of the
          property is major systems, including: -Foundation and Structure -Roof &
          Exterior -Plumbing and Electrical - Systems Heating, Ventilation, and
          Air Conditioning (HVAC) -Interior Finishes and Appliances
          <br/>
          <br/>
           3.
          Unwavering Integrity: Amarachi prioritizes transparency and honesty.
          You will receive a clear and objective assessment of the propertys
          condition, allowing you to make informed decisions without pressure.
          <br/>
          <br/>
          4.Client-Focused Approach: Amarachi takes the time to explain her
          findings in a clear and understandable way. You will have the
          opportunity to ask questions and gain a comprehensive understanding of
          the property condition.
          <br/>
          <br/>
           5.Competitive Rates and Flexible Scheduling:
          Amarlux offers competitive rates and flexible scheduling to
          accommodate your needs.
        </p>
        <p className="service_header">
        Investing in a home inspection with Amarlux is an investment in your
        future.{" "}
      </p>
      By identifying potential issues early on, you can avoid costly repairs
      down the road and ensure your new home is a safe and sound haven for you
      and your loved ones
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
