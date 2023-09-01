import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Index.css";
export default function Index() {

  const [isBlinking, setIsBlinking] = useState(true);

  const mobileAffiliateLink = "https://ekaro.in/enkr20230831s33185787";
  const desktopAffiliateLink1 = "";
  const desktopAffiliateLink2 = "";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking((prevState) => !prevState);
    }, 500); // Adjust the interval as needed (milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="ad-container-320x50 mb-1 position-relative">
        <Link to={mobileAffiliateLink}>
        <span className="badge badge-danger position-absolute top-0 end-0">New</span>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/687ed4e547bd35f7.jpg?q=50"
            alt=""
            width="320px"
            height="50px"
          />
          <span className={`badge badge-danger position-absolute top-0 end-0 buy-now ${isBlinking ? "blinking-text" : ""}`}>Buy Now</span>
        </Link>
      </div>
      <div className="desktop-ad-left-container 160X600">
        <Link to={desktopAffiliateLink1}>
        <span className="badge badge-danger position-absolute top-0 end-0">New</span>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/73f62722e44898b4.jpg?q=50" alt="" />
        <span className={`badge badge-danger position-absolute top-0 end-0 buy-now ${isBlinking ? "blinking-text" : ""}`}>Buy Now</span>
        </Link>
      </div>

      <div className="container index-center-container">
        <div className="d-flex flex-column col-md-8 text-center">
          <div className="border border-dark border-2 fw-bold p-3 mb-3">
            <Link to="/besana-poster">
              બેસણા માટે પોસ્ટર બનાવવા અહી ક્લિક કરો
            </Link>
          </div>
          <div className="border border-dark border-2 fw-bold p-3 mb-3">
            <Link to="/shradhanjali-poster">
              શ્રદ્ધાંજલિ માટે પોસ્ટર બનાવવા અહી ક્લિક કરો
            </Link>
          </div>
        </div>
      </div>

      <div className="desktop-ad-right-container 160X600">
      <Link to={desktopAffiliateLink2}>
        <span className="badge badge-danger position-absolute top-0 end-0">New</span>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/bf1394b8812a22f0.jpg?q=50" alt="" />
        <span className={`badge badge-danger position-absolute top-0 end-0 buy-now ${isBlinking ? "blinking-text" : ""}`}>Buy Now</span>
        </Link>
      </div>
    </>
  );
}
