import { ContextProvider, ContextComponent } from "./contextComponent";
import { useContext } from "react";
import React, { Component } from "react";
import { AddStudent } from "./addStudent";

export const ConsumeContext = () => {
  //   const value = useContext(ContextComponent);
  const [students, setStudents] = useContext(ContextComponent);
  return (
    <div>
      <h1>You're in a component that consumes a provider </h1>
      <ul>
        {students.map((student, index) => {
          return (
            <li key={index}>
              {student.name} is {student.age} years old
            </li>
          );
        })}
      </ul>
      <AddStudent />
    </div>
  );
};
