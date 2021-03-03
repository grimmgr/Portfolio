import React, { useContext, useState } from 'react';

const DisplayCardContext = React.createContext();

export const useDisplayCard = () => {
    return useContext(DisplayCardContext);
};

export const DisplayCardProvider = ({ children }) => {
    const [ displayCard, setDisplayCard]  = useState(false);

    return (
        <DisplayCardContext.Provider value={{ displayCard, setDisplayCard }}>
            { children }
        </DisplayCardContext.Provider>
    );
};