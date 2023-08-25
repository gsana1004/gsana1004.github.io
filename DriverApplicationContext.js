import React, { createContext, useState, useContext } from 'react';

const DriverApplicationContext = createContext();

export const useDriverApplications = () => {
    return useContext(DriverApplicationContext);
};

export const DriverApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);

    const addApplication = (application) => {
        setApplications(prev => [...prev, application]);
    };

    return (
        <DriverApplicationContext.Provider value={{ applications, addApplication }}>
            {children}
        </DriverApplicationContext.Provider>
    );
};
