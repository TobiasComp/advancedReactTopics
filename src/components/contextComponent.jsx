import React, { Component, useState, createContext } from "react";

export const ContextComponent = createContext();

export const ContextProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "Binyomin Netanyahu",
      age: 70,
    },
    {
      name: "Benny Gantz",
      age: 68,
    },
  ]);

  return (
    <ContextComponent.Provider value={[students, setStudents]}>
      {props.children}
    </ContextComponent.Provider>
  );
};
