import React, { createContext, useReducer, useEffect } from "react";

const LoggedContext = createContext();

const initialState = false;

const reducer = (state, action) => {
  if (action.type === "logged") return true;
};

const LoggedProvider = ({ children }) => {
  const [logged, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("loggedContext")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("loggedContext", JSON.stringify(logged));
  }, [logged]);

  return (
    <LoggedContext.Provider value={{ logged, dispatch }}>
      {children}
    </LoggedContext.Provider>
  );
};

export { LoggedProvider, LoggedContext };
