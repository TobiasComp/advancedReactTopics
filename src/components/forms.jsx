import React, { Component, useEffect } from "react";
import "./forms.css";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeSelectBox = this.handleChangeSelectBox.bind(this);

    this.handleAddStudent = this.handleAddStudent.bind(this);

    this.state = {
      name: "",
      age: "",
      selectedStudent: 0,
      students: [
        {
          name: "Tuvia",
          age: 37,
        },
        {
          name: "Moti",
          age: 29,
        },
        {
          name: "Moshe",
          age: 32,
        },
      ],
    };
  }

  handleChangeName(e) {
    // console.log(e.target.value);
    // console.log("this is the value of name", this.state.name);
    // console.log("this is the vlaue of age", this.state.age);

    this.setState({
      name: e.target.value,
    });
  }

  handleChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  handleAddStudent(e) {
    let newStudents = [...this.state.students];
    newStudents.push({ name: this.state.name, age: this.state.age });
    console.log("these are all of the students", newStudents);

    this.setState({
      students: newStudents,
      selectedStudent: 0,
      name: "",
      age: "",
    });
  }

  handleChangeSelectBox(e) {
    console.log("This is the value of e.target.value", e.target.value);
    let newSelectedStudent = this.state.students.findIndex((student) => {
      return student.name === e.target.value;
    });
    this.setState({
      selectedStudent: newSelectedStudent,
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>This is an example of forms in React</p>
          Name:
          <form onSubmit={this.handleAddStudent}></form>
          <input
            type="text"
            onChange={this.handleChangeName}
            value={this.state.name}
          />
          Age:
          <input
            type="text"
            onChange={this.handleChangeAge}
            value={this.state.age}
          />
          <button onClick={this.handleAddStudent}>Add Student</button>
        </div>
        <table className="form-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          choose a name of a student &nbsp;
          <select name="" id="" onChange={this.handleChangeSelectBox}>
            {this.state.students.map((student) => (
              <option value={student.name} key={student.name}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
        <StudentNested
          students={this.state.students}
          selectedStudent={this.state.selectedStudent}
        ></StudentNested>
      </div>
    );
  }
}

function Student(props) {
  let { studentId } = useParams();
  console.log("these are the students in the Student component", props);
  console.log("this is the value of the studentId", studentId);
  let student = props.students[studentId];
  return <h3>Hello, {student.name}</h3>;
}

function StudentNested(props) {
  let match = useRouteMatch();
  let updatedSelectedStudent = props.selectedStudent;
  console.log(
    "this is the selected student in the studentNested funciton",
    props.selectedStudent
  );
  console.log(
    "this si the value of the `` statement",
    `${match.url}/` + props.selectedStudent
  );

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.selectedStudent != this.props.selectedStudent)
  //       this.setState({ selectedStudent: this.props.selectedStudent });
  //   }
  useEffect(() => {
    console.log("this is in the useEffect hook", props.selectedStudent);
    updatedSelectedStudent = props.selectedStudent;
  }, [props.selectedStudent]);
  return (
    <div>
      <Link to={`${match.url}/` + updatedSelectedStudent}>
        Link to the first student
      </Link>
      <Switch>
        <Route path={`${match.path}/:studentId`}>
          <Student students={props.students} />
        </Route>
      </Switch>
    </div>
  );
}
export default Forms;
