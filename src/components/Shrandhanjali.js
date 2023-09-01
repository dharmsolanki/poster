import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import "../css/Shrandhanjali.css";

export default function Shrandhanjali() {

  const mobileAffiliateLink = "https://ekaro.in/enkr20230831s33185787";

  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking((prevState) => !prevState);
    }, 500); // Adjust the interval as needed (milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [name, setName] = useState("");
  const [posterName, setPosterName] = useState("");
  const [image, setImage] = useState(null);
  const [posterImage, setPosterImage] = useState(null);
  const [showPoster, setShowPoster] = useState(false);
  const posterRef = useRef(null);

  const handleName = (element) => {
    const nameValue = element.target.value;
    setName(nameValue);
  };

  const handleImage = (element) => {
    const selectedImage = element.target.files[0];
    setImage(selectedImage);
  };

  const handleCreate = () => {
    setPosterName(name);
    setPosterImage(URL.createObjectURL(image));
    setShowPoster(true);
  };

  const handleDownload = async () => {
    // Scroll to the specified positions
    window.scrollTo(200, 300); // Scroll to X: 200 and Y: 300

    // Wait for a brief moment to allow the content to settle after scrolling
    await new Promise((resolve) => setTimeout(resolve, 200)); // Adjust the delay as needed

    const container = posterRef.current;

    // Use html2canvas to create an image from the container content
    const canvas = await html2canvas(container, {
      backgroundColor: "white",
    });

    // Generate the download link for the canvas image
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "shrandhanjali-poster.png";
    link.click();
  };

  const isCreateButtonDisabled = !name || !image;

  return (
    <>
      {/* start ads  */}
      <div className="ad-container-320x50 mb-1 position-relative">
        <Link to={mobileAffiliateLink}>
          <span className="badge badge-danger position-absolute top-0 end-0">
            New
          </span>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/687ed4e547bd35f7.jpg?q=50"
            alt=""
            width="320px"
            height="50px"
          />
          <span
            className={`badge badge-danger position-absolute top-0 end-0 buy-now ${
              isBlinking ? "blinking-text" : ""
            }`}
          >
            Buy Now
          </span>
        </Link>
      </div>
      {/* end ads  */}

      <div className="center-container mt-3">
        <div className="center-form">
          <marquee
            direction="left"
            scrollamount="5"
            style={{ color: "white", width: "auto", backgroundColor:"black", backgroundSize:"cover" }}
          >
            નોંધ:- ઇમેજ જનરેટ કર્યા પછી જો એ પરફેક્ટ શૉ ન થાય તો એ ઇમેજ ડાઉનલોડ
            કર્યા પછી પરફેક્ટ શૉ થશે.
          </marquee>

          <div className="form-group">
            <label htmlFor="name">નામ</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">મૃત્યુ પામનારનો ફોટો</label>
            <input
              type="file"
              className="form-control"
              id="exampleInputImage"
              name="image"
              onChange={handleImage}
            />
          </div>
          <button
            className="btn btn-success"
            style={{ width: "100%" }}
            onClick={handleCreate}
            disabled={isCreateButtonDisabled}
          >
            Create
          </button>
        </div>
      </div>

        {/* start ads  */}
        <div className="ad-container-320x50 mb-1 position-relative">
        <Link to={mobileAffiliateLink}>
          <span className="badge badge-danger position-absolute top-0 end-0">
            New
          </span>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/687ed4e547bd35f7.jpg?q=50"
            alt=""
            width="320px"
            height="50px"
          />
          <span
            className={`badge badge-danger position-absolute top-0 end-0 buy-now ${
              isBlinking ? "blinking-text" : ""
            }`}
          >
            Buy Now
          </span>
        </Link>
      </div>
      {/* end ads  */}

      {showPoster && (
        <div className="container text-center">
          <div className="poster golden-border" ref={posterRef}>
            <div className="poster-image">
              <div className="frame">
                <img
                  src={process.env.PUBLIC_URL + "/images/golden-frame.png"}
                  className="centered-image"
                  alt=""
                />

                <img src={posterImage} alt="" className="upload-image" />
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/golden-diya-stand.png"}
                alt=""
                className="left-diya-stand"
                height="auto"
                width="250px"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/golden-diya-stand.png"}
                alt=""
                className="right-diya-stand"
                height="auto"
                width="250px"
              />
            </div>
            <div className="poster-content">
              <div className="horizontal-scroll-content">
                <h3>સ્વ: {posterName}</h3>
                <h2>ભાવપૂર્ણ શ્રદ્ધાંજલિ</h2>
                <div className="lamp-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/diya.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn btn-success"
            style={{ width: "100%" }}
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      )}
    </>
  );
}
