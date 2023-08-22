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
        <p>
          શ્રદ્ધાંજલિ આદર્શ આત્મા {name}, આપના આત્માની શ્રદ્ધા અને યાદેલા વચનો
          યાદ રહેશે. તમારી દયા, મમતા અને આદરને યાદીને રહેશે. તમારી અદ્વિતીય
          વ્યક્તિગતા અને સમર્પણ અમને માર્ગદર્શન આપ્યો છે. તમે જીવનમાં પરંતુ
          જીવનથી પરેશાન છીએ, તમારી આત્મા અમને હંમેશાં માર્ગદર્શન આપશે. તમે
          હંમેશાં અમારી સ્મૃતિઓમાં જીવંત રહીશો. આત્માની શાંતિ માટે આપના પ્રિય{" "}
          {name} ને ભગવાન સુખ-શાંતિ આપે અને તમારી પરિપત્રનામાં તમારી આત્માનો શોક
          સહાય કરે. તમે હંમેશાં આમને પ્રેમ, આદર અને માર્ગદર્શન આપી છે, તમારી
          યાદેલી વચનો અમને હંમેશાં માર્ગદર્શિત રહેશે.
        </p>
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
