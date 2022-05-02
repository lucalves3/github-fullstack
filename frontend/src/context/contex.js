import React, { useState } from "react";

export const Context = React.createContext({});

export const Provider = ({ value, children }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [previousPagination, setPreviousPagination] = useState(0);

  const values = {
    previousPagination,
    setPreviousPagination,
    pagination,
    setPagination,
    data,
    setData,
  };

  return (
    <Context.Provider value={(value = values)} displayName="General-Context">
      { children }
    </Context.Provider>
  )
}