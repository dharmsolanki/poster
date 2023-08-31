import React from "react";
import { Link } from "react-router-dom";
import "../css/Index.css";
export default function Index() {

  const affiliateLink = "https://ekaro.in/enkr20230831s33185787";

  return (
    <>
      <div className="ad-container-320x50 mb-1 position-relative">
        <Link to={affiliateLink}>
        <span className="badge badge-danger position-absolute top-0 end-0">New</span>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/687ed4e547bd35f7.jpg?q=50"
            alt=""
            width="320px"
            height="50px"
          />
        </Link>
      </div>
      <div className="desktop-ad-left-container 160X600">
        <p>160X600</p>
      </div>
      <div className="desktop-ad-right-container 160X600">
        <p>160X600</p>
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
    </>
  );
}
