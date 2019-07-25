import student from "../objects/student";

export default (state = student, action) => {
  switch (action.type) {
    case "UPDATE_STUDENT_ROOT":
      return {
        ...state,
        ...action.values
      };
    case "UPDATE_STUDENT_DETAILS":
      return {
        ...state,
        studentDetails: {
          ...state.studentDetails,
          ...action.values
        }
      };
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
    case "UPDATE_SINGLE_EXAM":
      return {
        ...state,
        previousExamDetails: {
          ...state.previousExamDetails,
          [action.values.nameOfExam.toLowerCase()]: {
            ...action.values
          }
        }
      };
    default:
      return state;
  }
};
