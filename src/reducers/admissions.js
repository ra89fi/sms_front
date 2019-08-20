export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_LATEST_ADMISSIONS":
      const obj = {};
      action.values.forEach(row => (obj[row.studentId] = row));
      return obj;
    default:
      return state;
  }
};
