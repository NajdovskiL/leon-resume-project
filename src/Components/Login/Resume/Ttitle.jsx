import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCity, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  border-bottom: 3px solid #25dac5;

  .profile-text {
  flex-basis: 40%;
  text-align: left;
  padding-left: 10px;
}

.profile-text h4 {
  font-size: 30px;
  margin-bottom: 5px;
}

.title-desc {
  color: #25dac5;
  font-weight: 700;
  margin-top: 0px;
}

.title-profile {
  font-size: 14px;
  margin-top: 5px;
}

.img {
  flex-basis: 30%;
}

.img img {
  border-radius: 50%;
}

.info {
  flex-basis: 30%;
  text-align: right;
  padding-right: 10px;
}

.info ul li {
  list-style: none;
  margin-top: 10px;
}

.info ul li svg {
  margin-left: 10px;
}

textarea {
  width: 100%;
}
`

const Title = () => {
  const { elements } = useContext(UserContext);
  const user = elements.user;
  const setUser = elements.setUser;

  const [editableField, setEditableField] = useState(null); // Track the currently editable field
  const [editedValue, setEditedValue] = useState(""); // Track the edited value

  // Handle setting the field as editable
  const handleEditClick = (fieldName, value) => {
    setEditableField(fieldName); // Set the current field to editable
    setEditedValue(value); // Set the current value to be edited
  };

  // Handle input change
  const handleInputChange = (e) => {
    setEditedValue(e.target.value); // Update input field value
  };

  // Save the edited value and reset the editable field
  const handleSaveField = (fieldName) => {
    setUser((prevUser) => ({
      ...prevUser,
      employee1: {
        ...prevUser.employee1,
        employeProfile: {
          ...prevUser.employee1.employeProfile,
          [fieldName.toLowerCase()]: editedValue, // Update the field based on its name
        },
      },
    }));
    setEditableField(null); // Reset the editable state
  };

  // Handle "Enter" key or blur event to save changes
  const handleKeyPress = (e, fieldName) => {
    if (e.key === "Enter") {
      handleSaveField(fieldName); // Save changes on Enter key
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onloadend = () => {
        // Set the new image URL in the user state
        setUser((prevUser) => ({
          ...prevUser,
          employee1: {
            ...prevUser.employee1,
            employeProfile: {
              ...prevUser.employee1.employeProfile,
              img: reader.result, // Set the result from FileReader as the new image URL
            },
          },
        }));
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <TitleWrapper>
      <div className="profile-text">
        {/* Full Name */}
        {editableField === "fullname" && elements.edit ? (
          <input
            type="text"
            value={editedValue}
            onChange={handleInputChange}
            onBlur={() => handleSaveField("fullname")}
            onKeyPress={(e) => handleKeyPress(e, "fullname")}
            autoFocus
          />
        ) : (
          <h4 onClick={() => handleEditClick("fullname", user.employee1.employeProfile.fullname)}>
            {user.employee1.employeProfile.fullname}
          </h4>
        )}

        {/* Professional Title */}
        {editableField === "desc" && elements.edit ? (
          <input
            type="text"
            value={editedValue}
            onChange={handleInputChange}
            onBlur={() => handleSaveField("desc")}
            onKeyPress={(e) => handleKeyPress(e, "desc")}
            autoFocus
          />
        ) : (
          <p className="title-desc" onClick={() => handleEditClick("desc", user.employee1.employeProfile.desc)}>
            {user.employee1.employeProfile.desc}
          </p>
        )}

        {/* About Me */}
        {editableField === "profile" && elements.edit ? (
          <textarea
            value={editedValue}
            onChange={handleInputChange}
            onBlur={() => handleSaveField("profile")}
            onKeyPress={(e) => handleKeyPress(e, "profile")}
            autoFocus
          />
        ) : (
          <p className="title-profile" onClick={() => handleEditClick("profile", user.employee1.employeProfile.profile)}>
            {user.employee1.employeProfile.profile}
          </p>
        )}
      </div>

      <div className="img">
        {elements.edit ? (
          <>
            <img
              src={user.employee1.employeProfile.img}
              alt="Profile"
              onClick={() => document.getElementById("fileInput").click()}
              style={{ cursor: 'pointer', width: '150px', height: '150px' }} // Example styling
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the file input
            />
          </>
        ) : (
          <img src={user.employee1.employeProfile.img} alt="Profile" />
        )}
      </div>

      <div className="info">
        <ul>
          {/* Email */}
          {editableField === "email" && elements.edit ? (
            <input
              type="text"
              value={editedValue}
              onChange={handleInputChange}
              onBlur={() => handleSaveField("email")}
              onKeyPress={(e) => handleKeyPress(e, "email")}
              autoFocus
            />
          ) : (
            <li onClick={() => handleEditClick("email", user.employee1.employeProfile.email)}>
              {user.employee1.employeProfile.email} <FontAwesomeIcon icon={faEnvelope} />
            </li>
          )}

          {/* Phone */}
          {editableField === "phone" && elements.edit ? (
            <input
              type="text"
              value={editedValue}
              onChange={handleInputChange}
              onBlur={() => handleSaveField("phone")}
              onKeyPress={(e) => handleKeyPress(e, "phone")}
              autoFocus
            />
          ) : (
            <li onClick={() => handleEditClick("phone", user.employee1.employeProfile.phone)}>
              {user.employee1.employeProfile.phone} <FontAwesomeIcon icon={faPhone} />
            </li>
          )}

          {/* Location */}
          {editableField === "location" && elements.edit ? (
            <input
              type="text"
              value={editedValue}
              onChange={handleInputChange}
              onBlur={() => handleSaveField("location")}
              onKeyPress={(e) => handleKeyPress(e, "location")}
              autoFocus
            />
          ) : (
            <li onClick={() => handleEditClick("location", user.employee1.employeProfile.location)}>
              {user.employee1.employeProfile.location} <FontAwesomeIcon icon={faCity} />
            </li>
          )}

          {/* Birthday */}
          {editableField === "birthday" && elements.edit ? (
            <input
              type="text"
              value={editedValue}
              onChange={handleInputChange}
              onBlur={() => handleSaveField("birthday")}
              onKeyPress={(e) => handleKeyPress(e, "birthday")}
              autoFocus
            />
          ) : (
            <li onClick={() => handleEditClick("birthday", user.employee1.employeProfile.birthday)}>
              {user.employee1.employeProfile.birthday} <FontAwesomeIcon icon={faBirthdayCake} />
            </li>
          )}
        </ul>
      </div>
    </TitleWrapper>
  );
};

export default Title;