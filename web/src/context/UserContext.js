import React, { createContext, useReducer, useEffect } from "react";

const UserContext = createContext();

const initialState = {
  id: null,
  nome: "",
  apelido: "",
  isAdmin: false
};

const reducer = (state, action) => {
  if (action.type === "login") return action.payload;
};

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("sessionContext")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("sessionContext", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
