import React, { useState } from "react";
import $ from "jquery";
import html2canvas from "html2canvas";
import "../css/Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [contentText, setContentText] = useState("");
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleNameChange = (element) => {
    const nameValue = element.target.value;
    setName(nameValue);
  };

  const handleEmailChange = (element) => {
    const emailValue = element.target.value;
    setEmail(emailValue);
  };

  const handleImageChange = (element) => {
    const selectedImage = element.target.files[0];
    setImage(selectedImage);
  };

  const handleCreate = () => {
    setContentText(`My name is ${name} and my email is ${email}`);
    setShowDownloadButton(true);
    $("#box").show(); // Show the box after button click
  };

  const handleDownload = () => {
    // Capture the content of the box as an image using html2canvas
    html2canvas(document.getElementById("box")).then((canvas) => {
      // Convert the canvas to an image data URL
      const imageDataURL = canvas.toDataURL("image/png");

      // Create a temporary link and trigger a download of the image
      const link = document.createElement("a");
      link.href = imageDataURL;
      link.download = "poster_image.png";
      link.click();
    });
  };

  return (
    <>
      <div className="center-container">
        <div className="center-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              className="form-control"
              id="exampleInputImage"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>

      {showDownloadButton && (
        <button className="btn btn-primary" onClick={handleDownload}>
          Download Poster
        </button>
      )}
      
      <div className="center-container mt-3 box">
        <div className="center-form" id="box" style={{ display: "none" }}>
          <div className="passport-photo-box">
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="passport-photo-image"
                height="200px"
                width="200px"
              />
            )}
          </div>
          <div className="content">
            <p>{contentText}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
