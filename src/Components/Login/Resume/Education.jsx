import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import "./Education.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';


const Education = () => {
    const { elements } = useContext(UserContext)
    const user = elements.user
    const setUser = elements.setUser


    // Track the education entry and the specific field being edited
    const [editingEducationID, setEditingEducationID] = useState(null);
    const [editingField, setEditingField] = useState(null);
    const [editedValue, setEditedValue] = useState("");
    const [editingSkillIndex, setEditingSkillIndex] = useState(null);
    const [editingLanguageID, setEditingLanguageID] = useState(null);
    const [editingLanguageField, setEditingLanguageField] = useState(null);


    // Function to start editing a specific field of an education entry
    const handleEditField = (educationID, fieldName, currentValue) => {
        setEditingEducationID(educationID); // Set the educationID being edited
        setEditingField(fieldName); // Set which field is being edited
        setEditedValue(currentValue); // Set the current value of that field
    };


    // Function to handle input changes
    const handleInputChange = (e) => {
        setEditedValue(e.target.value);
    };

    // Save the edited value for the specific field on blur
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
        setEditingEducationID(null); // Stop editing mode
        setEditingField(null); // Reset field being edited
    };

    const handleEditSkill = (index, currentValue) => {
        setEditingSkillIndex(index);
        setEditedValue(currentValue);
    };

    const handleSkillBlur = (index) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                skills: prevUser.employee1.skills.map((el, i) => (i === index ? editedValue : el)),
            },
        }));
        setEditingSkillIndex(null); // Stop editing mode
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

    const addSkill = () => {
        const newSkill = "Add Skill"

        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                ...prevUser.employee1.jobs,
                ...prevUser.employee1.education,
                skills: [...prevUser.employee1.skills, newSkill]
            }
        }))
    }

    const deleteSkill = (indextoDelete) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                skills: prevUser.employee1.skills.filter((_, index) => index !== indextoDelete)
            }
        }))
    }

    const handleEditLanguage = (languageID, fieldName, currentValue) => {
        setEditingLanguageID(languageID);
        setEditingLanguageField(fieldName);
        setEditedValue(currentValue);
    };

    const handleLanguageBlur = (languageID, fieldName) => {
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                languages: prevUser.employee1.languages.map((el) =>
                    el.languageID === languageID ? { ...el, [fieldName]: editedValue } : el
                ),
            },
        }));
        setEditingLanguageID(null);
        setEditingLanguageField(null);
    };

    const addLanguage = () => {
        const newLanguage = {
            language: "Language",
            proficiency: "Elementary Proficiency",
            languageID: user.employee1.languages.length + 1
        }
        setUser((prevUser) => ({
            ...prevUser,
            employee1: {
                ...prevUser.employee1,
                languages: [...prevUser.employee1.languages, newLanguage], // Add new language
            },
        }));
    }

    const deleteLanguage = (indexToDelete) => {
        setUser((prevUser) => {
            const updatedLanguages = prevUser.employee1.languages
                .filter((_, index) => index !== indexToDelete) // Remove the selected language
                .map((el, index) => ({ ...el, languageID: index + 1 })); // Reassign languageIDs to be sequential

            return {
                ...prevUser,
                employee1: {
                    ...prevUser.employee1,
                    languages: updatedLanguages, // Update with the new languages array
                },
            };
        });
    };

    return (
        <div>
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
                                onBlur={() => handleBlur(el.educationID, "title")} // Save on blur
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
                                onBlur={() => handleBlur(el.educationID, "school")} // Save on blur
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
                                onBlur={() => handleBlur(el.educationID, "city")} // Save on blur
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
                                onBlur={() => handleBlur(el.educationID, "date")} // Save on blur
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

                <h3 className="education-title">Expertise</h3>
                <ul className="skills">
                    {user.employee1.skills.map((el, index) => (
                        <li key={index}>
                            {editingSkillIndex === index && elements.edit ? (
                                <input
                                    type="text"
                                    value={editedValue}
                                    onChange={(e) => setEditedValue(e.target.value)} // Handle input change
                                    onBlur={() => handleSkillBlur(index)} // Save on blur
                                    placeholder="Skill"
                                    autoFocus
                                />
                            ) : (
                                <span className="skills-span" onClick={() => handleEditSkill(index, el)}> {el}</span>
                            )}
                            <span className="action-icons">
                                {elements.edit && <FontAwesomeIcon className="add" icon={faPlus} onClick={() => addSkill()} />}
                                {elements.edit && <FontAwesomeIcon className="delete" icon={faXmark} onClick={() => deleteSkill(index)} />}
                            </span>

                        </li>
                    ))}

                </ul>

                <h3 className="languages-title">Languages</h3>
                <ul className="languages">
                    {user.employee1.languages.map((el, index) => (
                        <li key={index}>
                            {editingLanguageID === el.languageID && editingLanguageField === "language" && elements.edit ? (
                                <input
                                    type="text"
                                    value={editedValue}
                                    onChange={handleInputChange}
                                    onBlur={() => handleLanguageBlur(el.languageID, "language")}
                                    autoFocus
                                />
                            ) : (
                                <span onClick={() => handleEditLanguage(el.languageID, "language", el.language)}>{el.language}</span>

                            )}


                            {editingLanguageID === el.languageID && editingLanguageField === "proficiency" && elements.edit ? (
                                <input
                                    type="text"
                                    value={editedValue}
                                    onChange={handleInputChange}
                                    onBlur={() => handleLanguageBlur(el.languageID, "proficiency")}
                                    autoFocus
                                />
                            ) : (
                                <span className="proficiency" onClick={() => handleEditLanguage(el.languageID, "proficiency", el.proficiency)}> Proficiency: {el.proficiency}</span>

                            )}
                            <span className="action-icons">
                                {elements.edit && <FontAwesomeIcon icon={faPlus} className="add" onClick={() => addLanguage()} />}
                                {elements.edit && <FontAwesomeIcon icon={faXmark} className="delete" onClick={() => deleteLanguage(index)} />}
                            </span>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Education;