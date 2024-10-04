import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const WorkWrapper = styled.div`
font-family: Arial, sans-serif;

 .input-width {
   width: 100%;
 }

  h3 {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Each job experience container */
.experience-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}

.job-details h4 {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
}

.job-details h6 {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  text-align: left;
  margin-top: 10px;
}

/* Flexbox to align the location and dates */
.location-dates {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
}

.location-dates p {
  margin: 0;
  color: #777;
}

.date-from,
.date-till {
  color: #25dac5;
}

/* List styling */
.ul-acomplishments {
  list-style-type: square;
  padding-left: 0;
}

.ul-acomplishments li {
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  padding-right: 30px; /* Space for + and x buttons */
  transition: background-color 0.3s ease;
  list-style-position: inside;
  text-align: left;
}

.ul-acomplishments li::marker {
  font-size: 20px; /* Increase bullet size */
  color: #25dac5; /* Set the bullet color */
}

.ul-acomplishments li:hover {
  background-color: #f9f9f9;
}

.action-icons {
  display: none;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}

/* Hover to show + and x buttons */
.ul-acomplishments li:hover .action-icons {
  display: inline-block;
}

.action-icons .add,
.action-icons .delete {
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #25dac5;
}

.action-icons .delete {
  color: red;
}

.action-icons .add:hover {
  color: green;
}

.action-icons .delete:hover {
  color: darkred;
}

/* Add transitions to smooth out hover effects */
.action-icons span {
  transition: color 0.3s ease;
}

.addwork {
  width: 25%;
  margin-top: 10px;
  font-style: normal;
  font-size: 14px;
  line-height: 15px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 5px;
  background-color: #25dac5;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.deletework {
  width: 25%;
  margin-top: 10px;
  font-style: normal;
  font-size: 14px;
  line-height: 15px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 5px;
  background-color: #25dac5;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.deletework:hover {
  background-color: tomato;
}

`

const WorkExperience = () => {
    const { elements } = useContext(UserContext)
    const user = elements.user
    const setUser = elements.setUser

    const [editableField, setEditableField] = useState({
        workID: null,
        field: null, // can be jobtitle, company, city, datefrom, datetill, accomplishment
        index: null, // specific index for accomplishments
    });
    const [editedValue, setEditedValue] = useState("");

    // Function to handle setting the field as editable
    const handleEditClick = (workID, field, value, index = null) => {
        setEditableField({ workID, field, index }); // Set the clicked field as editable
        setEditedValue(value); // Set the current value in input
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        setEditedValue(e.target.value); // Update input field value
    };

    // Function to handle saving the edited value
    const handleSaveField = (workID, field, index = null) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                jobs: prevUser.employee1.jobs.map((job) => {
                    if (job.workID === workID) {
                        if (field === "acomplishments") {
                            const updatedAccomplishments = [...job.acomplishments];
                            updatedAccomplishments[index] = editedValue;
                            return {
                                ...job,
                                acomplishments: updatedAccomplishments,
                            };
                        } else {
                            return {
                                ...job,
                                [field]: editedValue, // Update other fields like jobtitle, company, etc.
                            };
                        }
                    }
                    return job;
                }),
            },
        }));
        setEditableField({ workID: null, field: null, index: null }); // Reset editable state
    };

    // Handle "Enter" key or blur event to save changes
    const handleKeyPress = (e, workID, field, index = null) => {
        if (e.key === "Enter") {
            handleSaveField(workID, field, index);
        }
    };

    // Function to handle adding a new accomplishment
    const handleAddAccomplishment = (workID) => {
        const newAccomplishment = "Accomplishment";
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                jobs: prevUser.employee1.jobs.map((job) => {
                    if (job.workID === workID) {
                        return {
                            ...job,
                            acomplishments: [...job.acomplishments, newAccomplishment],
                        };
                    }
                    return job;
                }),
            },
        }));
    };

    // Function to handle deleting an accomplishment
    const handleDeleteAccomplishment = (workID, index) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                jobs: prevUser.employee1.jobs.map((job) => {
                    if (job.workID === workID) {
                        const updatedAccomplishments = [...job.acomplishments];
                        updatedAccomplishments.splice(index, 1); // Remove the accomplishment at the specific index
                        return {
                            ...job,
                            acomplishments: updatedAccomplishments,
                        };
                    }
                    return job;
                }),
            },
        }));
    };


    const addNewJob = () => {
        const newJob = {
            workID: user.employee1.jobs.length + 1,
            jobtitle: "Position Title",
            company: "Company/Workplace",
            city: "Location",
            datefrom: "00/00/00",
            datetill: "00/00/00",
            acomplishments: [
                "Acomplishment", "Acomplishment"]
        }

        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                jobs: [...prevUser.employee1.jobs, newJob]
            }
        }))
    }

    const deleteJob = (workID) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                jobs: prevUser.employee1.jobs.filter((job) => job.workID !== workID),
            },
        }));
    };



    return (
        <WorkWrapper>
            <h3>Work Experience</h3>
            {user.employee1.jobs.map((el) => (
                <div key={el.workID} className="experience-item">
                    <div className="job-details">
                        {/* Job Title */}
                        {editableField.workID === el.workID && editableField.field === "jobtitle" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleSaveField(el.workID, "jobtitle")}
                                onKeyPress={(e) => handleKeyPress(e, el.workID, "jobtitle")}
                                autoFocus
                                className="input-width"
                            />
                        ) : (
                            <h4 onClick={() => handleEditClick(el.workID, "jobtitle", el.jobtitle)}>
                                {el.jobtitle}
                            </h4>
                        )}

                        {/* Company */}
                        {editableField.workID === el.workID && editableField.field === "company" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleSaveField(el.workID, "company")}
                                onKeyPress={(e) => handleKeyPress(e, el.workID, "company")}
                                autoFocus
                                className="input-width"

                            />
                        ) : (
                            <h6 onClick={() => handleEditClick(el.workID, "company", el.company)}>
                                {el.company}
                            </h6>
                        )}
                    </div>


                    <div className="location-dates">
                        {/* Date From */}
                        {editableField.workID === el.workID && editableField.field === "datefrom" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleSaveField(el.workID, "datefrom")}
                                onKeyPress={(e) => handleKeyPress(e, el.workID, "datefrom")}
                                autoFocus
                            />
                        ) : (
                            <span className="date-from" onClick={() => handleEditClick(el.workID, "datefrom", el.datefrom)}>
                                From: {el.datefrom}
                            </span>
                        )}

                        {/* Date Till */}
                        {editableField.workID === el.workID && editableField.field === "datetill" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleSaveField(el.workID, "datetill")}
                                onKeyPress={(e) => handleKeyPress(e, el.workID, "datetill")}
                                autoFocus
                            />
                        ) : (
                            <span className="date-till" onClick={() => handleEditClick(el.workID, "datetill", el.datetill)}>
                                To: {el.datetill}
                            </span>
                        )}

                        {/* City */}
                        {editableField.workID === el.workID && editableField.field === "city" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleSaveField(el.workID, "city")}
                                onKeyPress={(e) => handleKeyPress(e, el.workID, "city")}
                                autoFocus
                            />
                        ) : (
                            <p onClick={() => handleEditClick(el.workID, "city", el.city)}>{el.city}</p>
                        )}
                    </div>

                    {/* Accomplishments */}
                    <ul className="ul-acomplishments">
                        {el.acomplishments.map((acomplishment, i) => (
                            <li key={i}>
                                {editableField.workID === el.workID && editableField.field === "acomplishments" && editableField.index === i && elements.edit ? (
                                    <input
                                        type="text"
                                        value={editedValue}
                                        onChange={handleInputChange}
                                        onBlur={() => handleSaveField(el.workID, "acomplishments", i)}
                                        onKeyPress={(e) => handleKeyPress(e, el.workID, "acomplishments", i)}
                                        autoFocus
                                        className="input-width"
                                    />
                                ) : (
                                    <span onClick={() => handleEditClick(el.workID, "acomplishments", acomplishment, i)}>
                                        {acomplishment}
                                    </span>
                                )}
                                <span className="action-icons">
                                    {/* Add more button */}
                                    {elements.edit && <FontAwesomeIcon icon={faPlus} onClick={() => handleAddAccomplishment(el.workID)} className="add" />}

                                    {/* Delete button */}
                                    {elements.edit && <FontAwesomeIcon icon={faXmark} onClick={() => handleDeleteAccomplishment(el.workID, i)} className="delete" />}
                                </span>


                            </li>
                        ))}
                    </ul>
                    {elements.edit && <button className="addwork" onClick={() => addNewJob()}>Add Work</button>}
                    {elements.edit && <button className="deletework" onClick={() => deleteJob(el.workID)}>Delete Work</button>}


                </div>
            ))}
        </WorkWrapper>
    );
};



export default WorkExperience;