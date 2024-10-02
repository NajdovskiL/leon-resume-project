import { createContext, useEffect, useState } from "react";
import CVdata from "./Library";
import editData from "./EditLibrary";

const UserContext = createContext({});

export const Provider = ({ children }) => {
    const [user, setUser] = useState(CVdata);
    const [clearAll, setClearAll] = useState(false)
    const [letEdit, setLetEdit] = useState(null)
    const [edit, setEdit] = useState(false)

    const EditAll = () => {
        setUser(editData)
        setClearAll(true)
        setEdit(true)
    }

    const handleClick = (field) => {
        if (clearAll) {
            setLetEdit(field)
        }
    }

    const handleonBlur = () => {
        if (clearAll)
            setLetEdit(null)
    }

    const handleEdit = () => {
        setEdit((prev) => !prev)
    }


    const elements = {
        user,
        setUser,
        clearAll,
        setClearAll,
        EditAll,
        handleClick,
        handleonBlur,
        letEdit,
        edit,
        setEdit,
        handleEdit
    }

    return (
        <UserContext.Provider value={{ elements }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;