import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer_Div lg:flex grid md:grid-cols-2 grid-cols-1  gap-10 justify-between">
      
      <div>
        <img className="white_logo" src="../../wit_pn.png" />
        <div className="flex">
          <input placeholder="Submit your email " className="footer_input" />
          <button className="submit_btn">SEND</button>
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-10 foooter_add">Address</p>
        <p className="mb-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=2972+Westheimer+Rd,+Santa+Ana,+Illinois+85486"
            target="_blank"
          >
            Victoria Island, Lagos {" "}
          </a>
        </p>
        <p className="mb-4">
          <a href="tel:+2349154373644">+234-915-437-3644</a>
        </p>
        <p>
          <a href="mailto:amarluxrealty@gmail.com">Amarluxrealty@gmail.com</a>
        </p>
      </div>
      <div className="grid mt-4">
        <p className="mb-10 foooter_add">Links</p>

        <Link className="mb-4" href="./service">
          Services
        </Link>
        <Link className="mb-4" href="./listings">
          Listing
        </Link>
        <Link className="mb-4" href="./blog">
          Blog
        </Link>
        <Link className="mb-4" href="./contact">
          Contact
        </Link>
      </div>

      <div className="grid mt-4">
        <p className="mb-10 foooter_add">Social</p>

        <Link className="mb-4" href="https://www.instagram.com/amarlux_realty/">
          Intagram
        </Link>
        <Link href="https://www.youtube.com/@Amarlux-Realty" className="mb-4" >
          Youtube
        </Link>
        <Link className="mb-4" href="./blog">
          Twitter
        </Link>
        <Link className="mb-4" href="./contact">
          Linkedin
        </Link>
      </div>
    </div>
  );
}
