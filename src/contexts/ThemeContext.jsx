/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

//Create Context object
const ThemeContext = createContext();

//Create Context Provider Component
const ThemeProvider = ({ children }) => {
  //   const initilaTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(() => {
    console.log("REnde");
    const initilaTheme = localStorage.getItem("theme") || "light";
    return initilaTheme;
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggelTheme = () => {
    setTheme((prevThem) => (prevThem === "light" ? "dark" : "light"));
  };
  //Provide all the states and functions here
  return (
    <ThemeContext.Provider value={{ theme, toggelTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
