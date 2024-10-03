import React, { useContext, useState } from "react";
import UserContext from "../UserContext/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const SkillsWrapper = styled.div`
font-family: Arial, sans-serif;

h3 {
 font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.skills {
  list-style: none; /* Remove default bullet points */
  padding: 0;
}

.skills li {
  position: relative; /* Position relative to handle span positioning */
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills-span {
  margin-left: 10px; /* Add small space between text and buttons */
  color: white; /* Style for links */
  background-color: #25dac5;
  border-radius: 5px;
  padding: 5px;
}

.skills li:hover .action-icons {
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


const Skills = () => {

    const { elements } = useContext(UserContext)
    const user = elements.user
    const setUser = elements.setUser

    const [editedValue, setEditedValue] = useState("");
    const [editingSkillIndex, setEditingSkillIndex] = useState(null);


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

    return (
        <SkillsWrapper>
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
        </SkillsWrapper>
    )
}


export default Skills;