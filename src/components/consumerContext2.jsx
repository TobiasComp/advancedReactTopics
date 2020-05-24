import { ContextComponent } from "./contextComponent";
import React, { Component } from "react";

export const ConsumeContext2 = (props) => {
  return (
    <div>
      This is a functional componenet that uses a provider
      <ContextComponent.Consumer>
        {(students, setStudents) => {
          return students.length;
        }}
      </ContextComponent.Consumer>
    </div>
  );
};
