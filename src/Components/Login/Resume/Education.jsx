import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import styled from "styled-components";

const EducationWrapper = styled.div`
font-family: Arial, sans-serif;
.education-title {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.education-wrapper {
  padding-top: 15px;
  border-bottom: 2px solid #25dac5;
  padding-bottom: 20px;
}

.education-main {
  width: 80%;
  margin: 0 auto;
}

.education-wrapper h4 {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.education-wrapper h6 {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 0px;
  font-family: Arial, sans-serif;
}

.education-wrapper p {
  margin: 0;
}

.addEducation {
  width: 20%;
  margin-top: 10px;
  font-style: normal;
  font-size: 9px;
  line-height: 15px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 5px;
  background-color: #25dac5;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.deleteEducation {
  width: 20%;
  margin-top: 10px;
  font-style: normal;
  font-size: 9px;
  line-height: 15px;
  border-radius: 100px;
  border: 2px solid #ebeaed;
  padding: 5px;
  background-color: #25dac5;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.deleteEducation:hover {
  background-color: tomato;
}
`


const Education = () => {
    const { elements } = useContext(UserContext)
    const user = elements.user
    const setUser = elements.setUser



    const [editingEducationID, setEditingEducationID] = useState(null);
    const [editingField, setEditingField] = useState(null);
    const [editedValue, setEditedValue] = useState("");



    const handleEditField = (educationID, fieldName, currentValue) => {
        setEditingEducationID(educationID);
        setEditingField(fieldName);
        setEditedValue(currentValue);
    };



    const handleInputChange = (e) => {
        setEditedValue(e.target.value);
    };


    const handleBlur = (educationID, fieldName) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                education: prevUser.employee1.education.map((el) =>
                    el.educationID === educationID ? { ...el, [fieldName]: editedValue } : el
                ),
            },
        }));
        setEditingEducationID(null);
        setEditingField(null);
    };


    const addEducation = () => {
        const newEducation = {
            title: "Study Program",
            city: "Location",
            school: "Institution/School",
            date: "Year",
            educationID: user.employee1.education.length + 1
        }

        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                jobs: [...prevUser.employee1.jobs],
                education: [...prevUser.employee1.education, newEducation]
            }
        }))
    }

    const deleteEducation = (educationID) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                ...prevUser.employee1.jobs,
                education: prevUser.employee1.education.filter((el) => el.educationID !== educationID)
            }
        }))
    }



    return (
        <EducationWrapper>
            <h3 className="education-title">Education</h3>
            <div className="education-main">
                {user.employee1.education.map((el, i) => (
                    <div key={i} className="education-wrapper">
                        {/* {title} */}
                        {editingEducationID === el.educationID && editingField === "title" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleBlur(el.educationID, "title")}
                                placeholder="Study Program"
                                autoFocus
                            />
                        ) : (
                            <h4 onClick={() => handleEditField(el.educationID, "title", el.title)}>{el.title}</h4>
                        )}

                        {/* {Schoo;} */}
                        {editingEducationID === el.educationID && editingField === "school" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleBlur(el.educationID, "school")}
                                placeholder="School"
                                autoFocus
                            />
                        ) : (
                            <h6 onClick={() => handleEditField(el.educationID, "school", el.city)}>School: {el.school}</h6>
                        )}

                        {/* {City} */}
                        {editingEducationID === el.educationID && editingField === "city" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleBlur(el.educationID, "city")}
                                placeholder="City"
                                autoFocus
                            />
                        ) : (
                            <p onClick={() => handleEditField(el.educationID, "city", el.city)}>City: {el.city}</p>
                        )}

                        {/* {date} */}
                        {editingEducationID === el.educationID && editingField === "date" && elements.edit ? (
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleInputChange}
                                onBlur={() => handleBlur(el.educationID, "date")}
                                placeholder="Date"
                                autoFocus
                            />
                        ) : (
                            <p onClick={() => handleEditField(el.educationID, "date", el.date)}>Date: {el.date}</p>
                        )}

                        {elements.edit && <button className="addEducation" onClick={() => addEducation()}>Add Education</button>}
                        {elements.edit && <button className="deleteEducation" onClick={() => deleteEducation(el.educationID)}>Delete Education</button>}
                    </div>
                ))}

            </div>
        </EducationWrapper>
    )
}


export default Education;