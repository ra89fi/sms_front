import URI from "../objects/uri";

export const fetchStudentsDetails = () => dispatch => {
  fetch(`${URI}/api/student_details`, {
    method: "GET",
    mode: "cors"
  })
    .then(response => {
      if (response.status === 200) return response.json();
      else return response.text();
    })
    .then(msg => {
      console.log(msg);
      if (typeof msg === "object") dispatch({ type: "UPDATE_STUDENTS_DETAILS", values: msg });
    })
    .catch(err => console.log(err.message));
};

export const deleteStudentDetails = (id, fn) => dispatch => {
  fetch(`${URI}/api/student_details/delete/${id}`, {
    method: "POST",
    mode: "cors"
  })
    .then(response => response.text())
    .then(msg => {
      console.log(msg);
      if (msg == "OK") fn();
    })
    .catch(err => console.log(err.message));
};
