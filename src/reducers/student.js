import student from "../objects/student";

export default (state = student, action) => {
  switch (action.type) {
    case "UPDATE_STUDENT_ROOT":
      return {
        ...state,
        ...action.values
      };
      break;
    default:
      return state;
  }
};
