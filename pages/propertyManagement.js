import React from "react";

export default function propertyManagement() {
  return (
    <div>
      <p className="service_head serv_hd discover_div ">PROPERTY MANAGEMENT </p>
      <div className="discover_div">
        <p className="service_header">ABOUT THE SERVICE</p>
        <p className="service_con">
          Owning an investment property in Lagos can be lucrative, but it also
          comes with responsibilities. Here at Amarlux, we understand the
          complexities of property management and are dedicated to taking the
          weight off your shoulders.
        </p>

        <p className="service_header">WHAT’S INCLUDE IN THE SERVICES?</p>
        <p className="service_con">
          1. Effortless Tenant Acquisition: We will handle the entire process,
          from marketing your property to screening and selecting qualified
          tenants.
          <br />
          <br />
          2.Seamless Rent Collection: Say goodbye to late payments. Amarlux
          ensures timely rent collection and manages all financial transactions.
          <br />
          <br />
          3.Comprehensive Property Maintenance: We will maintain your property in
          top condition, scheduling routine maintenance and repairs as needed.
          We also manage tenant requests and provide 24/7 emergency response.
          <br />
          <br />
          4.Legal Compliance: We will ensure your property adheres to all local
          regulations and handle any lease negotiations or tenant disputes.
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
    </div>
  );
}
