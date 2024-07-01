import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function interior() {
  return (
    <div>
      <Header />
      <p className="service_head serv_hd discover_div ">INTERIOR DESIGN </p>

      <img
        className="serivce_bg"
        src="https://assets-global.website-files.com/65127446160a3ff5b1e6186c/6530c83e8fb38929ccd8e400_service-main-04.jpg"
      />
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          At Amarlux, we believe your living space should reflect your unique
          style and story. Our interior decoration services are designed to
          transform your house into a beautiful and functional haven you'll
          love.
        </p>
        <p className="service_header">WHAT’S INCLUDE IN THE SERVICES?</p>
        <p className="service_con">
          <br />
          <br />
          1. Personalized Design Consultation: We'll get to know your vision,
          preferences, and budget. What inspires you? How do you envision using
          your space?
          <br />
          <br />
          2.Expert Space Planning: From maximizing small spaces to creating open
          floor plans, Amarlux optimizes your space's functionality and flow.
          <br />
          <br />
          3.Curated Design Aesthetic: We'll collaborate with you to develop a
          design style that reflects your personality. Whether it's modern
          minimalism, cozy farmhouse chic, or eclectic boho, we'll bring your
          vision to life.
          <br />
          <br />
          4.Furniture Selection & Sourcing: We'll help you find the perfect
          pieces, from statement furniture to functional accessories, ensuring
          both style and comfort.
          <br />
          <br />
          5.Color & Material Expertise: We'll guide you in selecting color
          palettes and materials that create a cohesive and visually appealing
          space.
          <br />
          <br />
          6. Stress-Free Execution: From furniture placement to décor
          installation, Amarlux takes care of the details, ensuring a smooth and
          seamless transformation.
        </p>

        <p className="service_header">BENEFIT?</p>
        <p>
          <br />
          <br />
          1. Effortless Style: Elevate your space without the hassle of sourcing
          décor or navigating design trends.
          <br />
          <br />
          2.Functional & Beautiful: Create a space that reflects your taste
          while maximizing functionality for your lifestyle.
          <br />
          <br />
          3.Expert Guidance: Benefit from Amarachi's expertise in design
          principles, color theory, and space optimization.
          <br />
          <br />
          4.Stress-Free Transformation: Focus on enjoying your beautiful new
          space while Amarlux handles the project management.
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
