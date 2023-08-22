import React, { useState } from "react";
import $ from "jquery";
import html2canvas from "html2canvas";
import "../css/Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [contentText, setContentText] = useState("");
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleNameChange = (element) => {
    const nameValue = element.target.value;
    setName(nameValue);
  };

  const handleDateChange = (element) => {
    const dateValue = element.target.value;
    setDate(dateValue);
  };

  const handleImageChange = (element) => {
    const selectedImage = element.target.files[0];
    setImage(selectedImage);
  };
  const handleCreate = () => {
      if (name && date && image) {
      const parsedDate = new Date(date); // Parse the selected date string
      const day = parsedDate.getDate().toString().padStart(2, "0");
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
      const year = parsedDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;

      setContentText(

        <div className="container set-content">
          {/* <h1>બેસણું</h1> */}
          <h1>દુ:ખદ અવસાન</h1>
          <h4>સ્વ: {name}</h4>
          <p>દિલગીરી સાથ જણાવવાનુ કે અમારા માતાશ્રી {name} તારીખ: {formattedDate} ના રોજ દેવલોક પામ્યા છે, તો ભગવાન તેમાના દિવ્ય આત્માને શાંતિ અર્પે એવી પ્રાર્થના.</p>
          
        </div>
      );
      setShowDownloadButton(true);
      $("#box").show(); // Show the box after button click
    };
  }

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
            <label htmlFor="name">Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputDate"
              name="date"
              value={date}
              onChange={handleDateChange}
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
          <div className="top-header">
            <h3 className="first">|| ॐ ||</h3>
            <h3 className="center">|| શાંતિ ||</h3>
            <h3 className="last">|| ॐ ||</h3>
          </div>
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
