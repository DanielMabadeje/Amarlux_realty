import Link from "next/link";
import React, { useState, useEffect } from "react";
import googleOneTap from "google-one-tap";
import Header from "./components/Header";
import Footer from "./components/Footer";


async function fetchData() {
 
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/properties?populate=*",
      options
    );
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      return null;
    }
    const response = await res.json();
    console.log(response);
    return response;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default function Page() {
  const option = {
    client_id:
      "711392695392-53glhbgfacnh3a5tatq5978oolannhk5.apps.googleusercontent.com", // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: "signin", // optional
  };

 

  useEffect(() => {
    googleOneTap(option, (response) => {
      // Log the response for debugging
      console.log("Response from Google One Tap:", response, response.credential);
    
    
    });
  }, []);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      if (data) {
        setProperty(data);
      }
    }
    getData();
  }, []);

  if (!property) {
    return<div className="loading_image">
    <center>
      <img className="logo_height" src="../../lg.png" alt="logo" />
    </center></div>
  }

  const listings = property.data;

  return (
    <div>
      <Header/>
      <p className="exclusive_listings text-center">
        Exclusive <br /> Listing
      </p>
      <div className="grid frame_div grid-cols-1 lg:grid-cols-3 ">
        {listings.map((property) => {
          const {
            title,
            description,
            price,
            location,
            bedroom,
            bathroom,
            thumbnail,
            squareMeter,
          } = property.attributes;
          const imageUrl =
            "http://127.0.0.1:1337" +
            property.attributes.thumbnail.data.attributes.url;
          const formattedPrice = new Intl.NumberFormat().format(price);

          return (
            <div key={property.id}>
              <Link href={`/property/${property.id}`}>
                <div>
                  <img
                    preload="true"
                    className="listing_property"
                    src={imageUrl}
                    alt={title}
                  />
                 <div className="prop_det_info">
                 <p className="property_price">N{formattedPrice}</p>
                  <p  className="property_location">{location}</p>
                  <p className="prop_deb mb-10">
                  {bedroom}Bed | {bathroom}bath |{" "}
                  {squareMeter} SQR ft
                </p>
                 </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="cta_div flex ">
        <div className="">
          <p className="amralux_text_head text-center">Amarlux Realty</p>
          <p className="amralux_text text-center">
            We make home buying and selling, easy and stress free. Ensuring you
            <br /> get the best deal FAST{" "}
          </p>
          <center>
            <button className="contact">Let's Talk</button>
          </center>
        </div>
      </div>
      <Footer/>
    </div>
  );
}