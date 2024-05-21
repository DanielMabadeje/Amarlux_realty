import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

async function fetchData(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/properties/${id}?populate=*`,
      options
    );
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      return null;
    }
    const response = await res.json();
    console.log('Fetched data:', response);
    return response;
  } catch (err) {
    console.error('Fetch error:', err);
    return null;
  }
}

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      async function getData() {
        const data = await fetchData(id);
        if (data) {
          setProperty(data);
        }
      }
      getData();
    }
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const {bq,smartHome
,    popCeiling, pool, stories, title, squareMeter,status,  description, price, location, bedroom, bathroom, images, thumbnail } = property.data.attributes;
  const formattedPrice = new Intl.NumberFormat().format(price);
  const thumbnailUrl = `http://127.0.0.1:1337${thumbnail.data.attributes.url}`;

  console.log('Thumbnail URL:', thumbnailUrl);

  return (
    <div>
     
      <div className="carousel">
        <div
          className="listing_details darken-background"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <center>
            <p className="prop_name">{title}</p>
        </center>
        </div>
        <div className="propert_gallery">
        <p className="gallery">PROPERTY GALLERY</p>
        <div className="grid-cols-3 grid gap-4 ">
        {images.data.map((image) => {
          const imageUrl = `http://127.0.0.1:1337${image.attributes.url}`;
          return (
            <div
              key={image.id}
              className="listing_details darken-background"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              {/* Add any other content or overlay for the background image here */}
            </div>
          );
        })}
        </div>

        <div className="flex justify-between gap-10">
          <div className="prop_information">
            <center>
              <p className="property_price mt-14">N{formattedPrice}</p>
              <p className="property_list_name">{title}</p>
              <p className="property_information">
                <span className="mr-4">{bedroom} Beds |</span>{" "}
                <span className="mr-4">{bathroom} Baths | </span>
                {squareMeter} SQRft
              </p>
              <Link href='../../contact'>
              <button className="inq_btn">INQUIRE NOW</button>

              </Link>
            </center>
            <div className="propertt_detali">
              <div>
                <hr className="line" />
                <div className="flex prop_de lg:gap-10">
                  <p className="properties_des_header">DESCRIPTION</p>
                  <p className="properties_des">{description}</p>
                </div>
                <hr className="line" />
             

                <div className="flex lg:gap-32 md:gap-32 gap-20">
                  <p className="properties_des_header">LOCATION</p>
                  <p className="properties_des">{location}</p>
                </div>
                <hr className="line" />
                <div className="flex lg:gap-32 md:gap-32 gap-20">
                  <p className="properties_des_header">STATUS</p>
                  <p className="properties_des">{status}</p>
                </div>
              </div>
              <hr className="line " />

              <div className=" flex lg:gap-32 md:gap-20 ">
                  <p className="properties_des_header">
                    SHARE <br /> PROPERTY
                  </p>
                  <div className="flex gap-6">
                    <img
                      className="share_icon"
                      width="40"
                      height="50"
                      src="https://img.icons8.com/ios/50/facebook-new.png"
                      alt="facebook-new"
                    />
                    <img
                      className="share_icon"
                      width="40"
                      height="50"
                      src="https://img.icons8.com/ios-filled/50/new-post.png"
                      alt="new-post"
                    />
                    <img
                      className="share_icon"
                      width="40"
                      height="20"
                      src="https://img.icons8.com/ios/50/twitter--v1.png"
                      alt="twitter--v1"
                    />
                  </div>
                </div>
           
              <div>
                <hr className="line" />
                <div className=" gap-20">
                  <p className="properties_des_header text-center">
                    OTHER AMENITIES
                  </p>
                  
                  <div className="flex other gap-32">
                    <p>Stories</p>
                    <p>
                      {" "}
                      {stories
}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>POOL</p>
                    <p>
                      {" "}
                      {pool
                        ? "True"
                        : "false"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>POP CEILING</p>
                    <p>
                      {" "}
                      {popCeiling
                        ? "True"
                        : "false"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>smartHome
</p>
<p>
  {smartHome ? "True" : "false"}
</p>
                  </div>

                  <div className="flex other gap-32">
                    <p>Boy's QUater</p>
                    <p>
                      {" "}
                      {bq
                        ? "True"
                        : "false"}
                    </p>
                  </div>
                  <div className="flex other gap-32">
                    <p>Year Built</p>
                    <p>
                      {" "}
                      {property.yearBuilt
                        ? property.yearBuilt
                        : "false"}
                    </p>
                  </div>

                  <div className="flex other gap-32">
                    <p>Status</p>
                    <p>
                      {" "}
                      {status
                        ? "True"
                        : "false"}
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="flex agent_info gap-4 mt-14 justify-around">
                <img className="kum_banner" src="./../lapp.jpg" />
                <div>
                <p className='amarachi '>Amarachi Odife</p>
                  <p className="kum_bio">
                    Broker Associate, #1 Realtor in Austin (2020 & 2021), #3
                    Realtor in Texas, #35 Realtor in the Country, Member of
                    Elite25, Member of Luxury League Austin, Member of Sotheby’s
                    International Realty Market Leaders
                  </p>
                  <Link href='../../contact'>
                                    <button className="inq_btn">CONTACT AGENT</button>

                  </Link>
                </div>
                {/* <div className="flex gap-10 kum_contact_info">
            <div>
              <p className="phone_number">PHONE</p>
              <p className="cell">838392839</p>
            </div>
            <div>
              <p className="phone_number">EMAIL</p>
              <p className="cell">kumara@sothebyrealty.com</p>
            </div>
          </div> */}
              </div>
            </div>
            {/* Display other property details */}
         
          </div>
        </div>
      </div>

      </div>


    </div>
  );
}
