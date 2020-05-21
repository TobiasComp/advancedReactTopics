import React, { Component, useState } from "react";
import { ContextProvider, ContextComponent } from "./contextComponent";
import { useContext } from "react";

// export const ConsumeContext = () => {
//   //   const value = useContext(ContextComponent);
//   const [students, setStudents] = useContext(ContextComponent);
//   return (
//     <div>
//       <h1>You're in a component that consumes a provider </h1>
//       <ul>
//         {students.map((student, index) => {
//           return (
//             <li key={index}>
//               {student.name} is {student.age} years old
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students, setStudents] = useContext(ContextComponent);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  const addStudent = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    setStudents([...students, { name: name, age: age }]);
  };

  return (
    <form onSubmit={addStudent}>
      Name: &nbsp;
      <input type="text" value={name} onChange={updateName} />
      <br />
      Age: &nbsp;
      <input type="text" value={age} onChange={updateAge} />
      <br />
      <button>Add</button>
    </form>
  );
};
