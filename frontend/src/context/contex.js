import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = ({ value, children }) => {
  const [data, setData] = useState([]);

  const values = {
    data,
    setData,
  };

  return (
    <Context.Provider value={(value = values)} displayName="General-Context">
      { children }
    </Context.Provider>
  )
}