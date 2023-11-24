import React, { createContext } from 'react';

const MyContext = createContext();

// Step 2: Create a Provider
const MainData = ({ children }) => {
  const sharedValue = 'adityaPawar';

  return (
    <MyContext.Provider value={sharedValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MainData;
