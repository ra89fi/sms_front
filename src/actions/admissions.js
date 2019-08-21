import URI from "../objects/uri";

export const fetchLatestAdmissions = () => dispatch => {
  fetch(`${URI}/api/admissions/latest`, {
    method: "GET",
    mode: "cors"
  })
    .then(response => {
      if (response.status === 200) return response.json();
      else return response.text();
    })
    .then(msg => {
      console.log(msg);
      if (typeof msg === "object") dispatch({ type: "UPDATE_LATEST_ADMISSIONS", values: msg });
    })
    .catch(err => console.log(err.message));
};

export const deleteAdmissions = id => dispatch => {
  fetch(`${URI}/api/admissions/delete/${id}`, {
    method: "POST",
    mode: "cors"
  })
    .then(response => response.text())
    .then(msg => console.log(msg))
    .catch(err => console.log(err.message));
};
