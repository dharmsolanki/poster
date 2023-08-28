import React from "react";
import "../css/Index.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="container index-center-container">
        <div className="d-flex flex-column col-md-8 text-center">
          <div className="border border-dark border-2 fw-bold p-3 mb-3">
            <Link to="/besana-poster">
            બેસણા માટે પોસ્ટર બનાવવા અહી ક્લિક કરો
            </Link>
          </div>
          <div className="border border-dark border-2 fw-bold p-3 mb-3"><Link to="/shradhanjali-poster">શ્રદ્ધાંજલિ માટે પોસ્ટર બનાવવા અહી ક્લિક કરો</Link></div>
          {/* <div className="border border-dark border-2 fw-bold p-3">Box 3</div> */}
        </div>
      </div>
    </>
  );
}
