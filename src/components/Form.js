import React, { useState } from "react";
import $ from "jquery";
import html2canvas from "html2canvas";
import "../css/Form.css";
import { format, parse } from "date-fns";
import { gu } from "date-fns/locale";

export default function Form() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [besanaDate, setbesanaDate] = useState("");
  const [besanaTime, setbesanaTime] = useState("");
  const [moNo, setmoNo] = useState("");
  const [familyMembers, setFamilyMembers] = useState([]);
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

  const handleBesanaDateChange = (element) => {
    const dateValue = element.target.value;
    setbesanaDate(dateValue);
  };

  const handleBesanaTimeChange = (element) => {
    const dateValue = element.target.value;
    setbesanaTime(dateValue);
  };

  const handleNumberChange = (element) => {
    const numberValue = element.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setmoNo(numberValue);
  };

  const handleImageChange = (element) => {
    const selectedImage = element.target.files[0];
    setImage(selectedImage);
  };
  const handleCreate = () => {
    if (name && date && familyMembers && image) {
      const parsedDate = new Date(date); // Parse the selected date string
      // const day = parsedDate.getDate().toString().padStart(2, "0");
      // const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
      // const year = parsedDate.getFullYear();
      // const formattedDate = `${day}-${month}-${year}`;
      const gujaratiFormattedDate = format(parsedDate, "dd-MM-yyyy", {
        locale: gu,
      });

      setContentText(
        <div className="container set-content">
          <h3>દુ:ખદ અવસાન</h3>
          <h4>સ્વ: {name}</h4>
          <p>
            દિલગીરી સાથ જણાવવાનુ કે {name}, તારીખ: {gujaratiFormattedDate} ના
            રોજ દેવલોક પામ્યા છે, તો ભગવાન તેમાના દિવ્ય આત્માને શાંતિ અર્પે એવી
            પ્રાર્થના.
          </p>
        </div>
      );
      setShowDownloadButton(true);
      $("#box").show(); // Show the box after button click
    }
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

  const handleAddMember = () => {
    setFamilyMembers([...familyMembers, ""]);
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedMembers);
  };

  let gujaratiFormattedBesanaDate = "";

  const isValidBesanaDate = !isNaN(Date.parse(besanaDate));

  if (isValidBesanaDate) {
    gujaratiFormattedBesanaDate = format(new Date(besanaDate), "dd-MM-yyyy", {
      locale: gu,
    });
  } else {
    // Handle the case where besanaDate is not a valid date
    // For example, display an error message or take appropriate action
  }

  let formattedBesanaTime = "";
  if (besanaTime) {
    // Parse the time input as a date object (this is necessary to format it)
    const parsedTime = parse(besanaTime, "HH:mm", new Date());

    // Format the parsed time as 12-hour format with AM/PM
    formattedBesanaTime = format(parsedTime, "hh:mm a", { locale: gu });
  }

  return (
    <>
      <div className="center-container">
        <div className="center-form">
          <div className="form-group">
            <label htmlFor="name">નામ</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              // placeholder="Enter Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">મરણ ની તારીખ</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputDate"
              name="dateofDeath"
              // placeholder="Enter Date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">બેસણા ની તારીખ</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputDate"
              name="dateofSiting"
              // placeholder="Enter Date"
              value={besanaDate}
              onChange={handleBesanaDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">બેસણા નો સમય</label>
            <input
              type="time"
              className="form-control"
              id="exampleInputTime"
              name="date"
              // placeholder="Enter Time"
              value={besanaTime}
              onChange={handleBesanaTimeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">મોબાઇલ નંબર</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputNumber"
              name="number"
              value={moNo}
              onChange={handleNumberChange}
              maxLength="10"
            />
          </div>

          <div className="form-group" id="div_family_member">
            <label htmlFor="name">Family Member Name</label>
            {familyMembers.map((member, index) => (
              <div className="input-group mb-2" key={index}>
                <input
                  type="text"
                  className="form-control"
                  name="member"
                  value={member}
                  onChange={(e) => {
                    const updatedMembers = [...familyMembers];
                    updatedMembers[index] = e.target.value;
                    setFamilyMembers(updatedMembers);
                  }}
                />
                <button
                  className="btn btn-danger btn-sm"
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={handleAddMember}
            >
              Add More
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="image">મૃત્યુ પામનારનો ફોટો</label>
            <input
              type="file"
              className="form-control"
              id="exampleInputImage"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <button
            className="btn btn-success"
            style={{ width: "100%" }}
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>

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
                width="150px"
              />
            )}
          </div>
          <div className="content">
            <p>{contentText}</p>
          </div>
          <div className="besanu">
            <h2>
              <u>-:બેસણું:-</u>
            </h2>
            <h3 className="besna-date">
              તા: <span>{gujaratiFormattedBesanaDate}</span>
            </h3>
            <h3 className="besna-time">
              સમય: <span>{formattedBesanaTime}</span>
            </h3>
          </div>
          <div className="family-members">
            <h4>.... લી ....</h4>
            <ol>
              {familyMembers.map((familyMember, index) => (
                <li key={index}>{familyMember}</li>
              ))}
            </ol>
          </div>
          <div className="contact-details">
            <div className="text-center">
              <h3>
                મોબાઇલ નંબર : <span>{moNo}</span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {showDownloadButton && (
        <div className="text-center">
          <button
            className="btn btn-primary btn-download"
            onClick={handleDownload}
          >
            Download Image
          </button>
        </div>
      )}
    </>
  );
}
