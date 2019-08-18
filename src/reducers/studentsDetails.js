export default (state = [], action) => {
  switch (action.type) {
    case "UPDATE_STUDENTS_DETAILS":
      return action.values;
    default:
      return state;
  }
};
