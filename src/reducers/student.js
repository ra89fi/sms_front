import student from "../objects/student";

export default (state = student, action) => {
  switch (action.type) {
    case "UPDATE_STUDENT_ROOT":
      return {
        ...state,
        ...action.values
      };
      break;
    case "UPDATE_STUDENT_DETAILS":
      return {
        ...state,
        studentDetails: {
          ...state.studentDetails,
          ...action.values
        }
      };
      break;
    case "UPDATE_FATHER_DETAILS":
      return {
        ...state,
        parentDetails: {
          ...state.parentDetails,
          father: {
            ...state.parentDetails.father,
            ...action.values
          }
        }
      };
      break;
    case "UPDATE_MOTHER_DETAILS":
      return {
        ...state,
        parentDetails: {
          ...state.parentDetails,
          mother: {
            ...state.parentDetails.mother,
            ...action.values
          }
        }
      };
      break;
    default:
      return state;
  }
};
