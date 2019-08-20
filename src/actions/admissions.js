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
