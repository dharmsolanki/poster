import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "../css/Shrandhanjali.css";

export default function Shrandhanjali() {
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
      <div className="center-container mt-3">
        <div className="center-form">
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

      {showPoster && (
        <div className="container text-center">
          <div className="poster golden-border" ref={posterRef}>
            <div className="poster-image">
              <div className="frame">
                <img
                  src={process.env.PUBLIC_URL + "/golden-frame.png"}
                  className="centered-image"
                  alt=""
                />

                <img src={posterImage} alt="" className="upload-image" />
              </div>
                <img src={process.env.PUBLIC_URL + "/golden-diya-stand.png"} alt="" className="left-diya-stand" height="auto" width="250px" />
                <img src={process.env.PUBLIC_URL + "/golden-diya-stand.png"} alt="" className="right-diya-stand" height="auto" width="250px" />
            </div>
            <div className="poster-content">
              <div className="horizontal-scroll-content">
                <h3>સ્વ: {posterName}</h3>
                <h2>ભાવપૂર્ણ શ્રદ્ધાંજલિ</h2>
                <div className="lamp-image">
                  <img src={process.env.PUBLIC_URL + "/diya.jpg"} alt="" />
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
