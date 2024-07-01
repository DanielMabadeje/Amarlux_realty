import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import googleOneTap from "google-one-tap";
import jwt_decode from "jwt-decode";
import Header from "./components/Header";
import Link from "next/link";
import Footer from "./components/Footer";
import { fetchEntries } from "../lib/contentful";

import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Main({ entries }) {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/embed/medias/ql5ktf0le4.jsonp";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const options = {
      client_id:
        "711392695392-53glhbgfacnh3a5tatq5978oolannhk5.apps.googleusercontent.com", // required
      auto_select: false, // optional
      cancel_on_tap_outside: false, // optional
      context: "signin", // optional
    };

    googleOneTap(options, (response) => {
      // Log the response for debugging
      console.log(
        "Response from Google One Tap:",
        response,
        response.credential
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="language"
        >
          <div className="discover_div">
            <div className="flex  hero_tex">
              <p className="head_text"> DISCOVER YOUR DREAM HOME</p>

              <div className="header_div mt-10 ">
                <div className="header_div_sub">
                  <p className="hero_text">
                    We understand the stress of finding the perfect place in
                    Lagos. Between rising prices, competitive offers, and
                    endless paperwork, it can feel overwhelming.
                    <br />
                    <br />
                    it doesn't have to be that way. At Amarlux realty, We
                    believe the search for your haven shouldn't be a frantic
                    scramble, but an exciting journey filled with possibilities.
                  </p>
                  <Link href="./listings">
                    <button className="contact_prop">VIEW PROPERTIES</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <center>
            <img className="hero_img_" src="./land.jpg" />
          </center> */}
            <div className="hero_img flex justify-between">
              <img className="sky" src="./top.jpg" />
              <img className="pool" src="./poop.jpg" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.6,
                delay: 0.2,
              }}
              className=""
            >
              {" "}
              <div>
                <p className="head_text hero_subliminary">
                  LUXURIOUS HOMES AWAIT- EXPLORE AN ARRAY OF EXQUISITE
                  PROPERTIES FOR THE ULTIMATE LIVING EXPERIENCE
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className=" exclusive_listing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <p className="text-center exclusive_header mb-20">
              Exclusive Listing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <div className="house_1">
              <Link href={`/property/2VUkUPYM4WIIim6TnFbnuh`}>
                <img className="property_one" src="./land.jpg" />
                <div className=" flex justify-end">
                  <div className="price_tag">
                    <div className="price_border">
                      <center>
                        <p className="listing_price">N400,000,000</p>
                        <p className="list_des">Megamound Estates</p>
                        <p className="list_des">Ikota Lekki</p>
                        <p className="list_des_sub">View</p>
                      </center>
                    </div>
                  </div>{" "}
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <Link href="./property/LzFXpHTJ4uORGTid4NMXL">
              <div className="house_2">
                <img className="property_two" src="./chev.jpg" />
                <div className=" flex justify-start">
                  <div className="price_tag_2">
                    <div className="price_border">
                      <center>
                        <p className="listing_price lek">N400,000,00</p>
                        <p className="list_des">Chevron Lekki</p>
                        <p className="list_des_sub">View</p>
                      </center>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <Link href="./property/LzFXpHTJ4uORGTid4NMXL">
              <div className="house_1">
                <img className="property_three" src="./fine.jpg" />
                <div className=" flex justify-end">
                  <div className="price_tag">
                    <div className="price_border">
                      <center>
                        <p className="listing_price chevron_text">
                          N220,000,000
                        </p>
                        <p className="list_des">Chevron Lekki</p>
                        <p className="list_des_sub">View</p>
                      </center>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="frame_div">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <div
              className="wistia_responsive_padding"
              style={{ padding: "56.25% 0 0 0", position: "relative" }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: "100%",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "100%",
                }}
              >
                <div
                  className="wistia_embed wistia_async_ql5ktf0le4 seo=true videoFoam=true"
                  style={{
                    height: "70%",
                    position: "relative",
                    width: "70%",
                  }}
                >
                  <div
                    className="wistia_swatch"
                    style={{
                      height: "70%",
                      left: "0",
                      opacity: "0",
                      overflow: "hidden",
                      position: "absolute",
                      top: "0",
                      transition: "opacity 200ms",
                      width: "70%",
                    }}
                  >
                    <img
                      src="https://fast.wistia.com/embed/medias/ql5ktf0le4/swatch"
                      style={{
                        filter: "blur(5px)",
                        height: "70%",
                        objectFit: "contain",
                        width: "70%",
                      }}
                      alt=""
                      aria-hidden="true"
                      onLoad={(e) => {
                        e.currentTarget.parentNode.style.opacity = 1;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="landingpage_about flex justify-around gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            {" "}
            <img className="amarlux" src="./pro.jpg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            {" "}
            <div className="abt_amara">
              <p className="amarachi_header">Amarachi Odife</p>
              <p>
                Amarachi connections to the top 1% of the industry afford her
                access to the most coveted properties, many of which are never
                listed in the highly competitive Lagos luxury market.
              </p>
              <p className="mt-8">
                Amarachi attributes her success to her effective working
                relationships with her clients. Her first priority is always
                open, honest communication about her clients particular needs
                and lifestyle. Finding the right property, or selling a home has
                its rewards, but for Amarachi, a life-long relationship with a
                client brings her genuine personal satisfaction
              </p>
              <button className="contact">Let us Talk</button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.2,
          }}
          className="frame_div"
        >
          <p
            className="  blog_head
 mb-10 mt-20"
          >
            ARTICLES{" "}
          </p>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/blog/4sHrY2hrVHkydtsMH7g6Vq">
                <div>
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/tipss_8L5dMTXal.webp?updatedAt=1719833361296"
                    className="blog_thumbnail"
                  />
                  <h3 className="blog_title text-xl font-bold">
                    10 Tips for getting a fair price on a home
                  </h3>
                </div>
              </Link>
              <Link href="/blog/3iYC7eWsxZeVzd3TiiCEd">
                <div>
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/aas_quiL3GjSc.webp?updatedAt=1719833509692"
                    className="blog_thumbnail"
                  />
                  <h3 className="blog_title text-xl font-bold">
                    Is it cheaper to buy or build
                  </h3>
                </div>
              </Link>

              <Link href="/blog/5yfoXApF7xSHsBZ2B543E9">
                <div>
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/pppad_5Bbq21Jhm.webp?updatedAt=1719833508605"
                    className="blog_thumbnail"
                  />
                  <h3 className="blog_title text-xl font-bold">
                    First time home buyers face challenge in a competitive
                    market
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const entries = await fetchEntries();
    console.log("Fetched entries:", entries); // Check what `entries` contains
    return {
      props: {
        entries,
      },
    };
  } catch (error) {
    console.error("Error fetching entries:", error);
    return {
      props: {
        entries: [],
      },
    };
  }
}
