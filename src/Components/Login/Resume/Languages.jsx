import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const LanguagesWrapper = styled.div`
font-family: Arial, sans-serif;
.languages-title {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.languages {
  padding: 0;
  list-style: none;
  font-family: Arial, sans-serif;
}

.languages li {
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  transition: background-color 0.3s ease;
  list-style-position: inside;
  text-align: center;
  margin-top: 7px;
}

.languages li span {
  display: block;
}

.languages li .action-icons {
  display: none;
}

.languages li:hover .action-icons {
  display: inline-block;
}

.action-icons {
    display: none;
    position: absolute;
    right: 150px;
    top: 50%;
    transform: translateY(-50%);
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
`


const Languages = () => {
    const { elements } = useContext(UserContext)
    const user = elements.user
    const setUser = elements.setUser

    const [editedValue, setEditedValue] = useState("");
    const [editingLanguageID, setEditingLanguageID] = useState(null);
    const [editingLanguageField, setEditingLanguageField] = useState(null);

    const handleInputChange = (e) => {
        setEditedValue(e.target.value);
    };


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
                languages: [...prevUser.employee1.languages, newLanguage],
            },
        }));
    }

    const deleteLanguage = (indexToDelete) => {
        setUser((prevUser) => {
            const updatedLanguages = prevUser.employee1.languages
                .filter((_, index) => index !== indexToDelete)
                .map((el, index) => ({ ...el, languageID: index + 1 }));
            return {
                ...prevUser,
                employee1: {
                    ...prevUser.employee1,
                    languages: updatedLanguages,
                },
            };
        });
    };

    return (
        <LanguagesWrapper>
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
                            <select value={el.proficiency}
                                onChange={handleInputChange}
                                onBlur={() => handleLanguageBlur(el.languageID, "proficiency")}
                                autoFocus
                            >
                                <option value="">Select Proficiency</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="C1">C1</option>
                            </select>
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
        </LanguagesWrapper>
    )
}

export default Languages;