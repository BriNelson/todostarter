import React, { createContext, useState } from 'react';


export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [userTaskArray, setUserTaskArray] = useState([]);
    return (
        <TodoContext.Provider value={{ userTaskArray }}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider