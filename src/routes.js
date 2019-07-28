import React from "react";
import AttendanceReport from "./components/attendance/AttendanceReport";
import AttendanceTake from "./components/attendance/AttendanceTake";
import DefaultLayout from "./containers/DefaultLayout";
import ExamDetails from "./components/exam/ExamDetails";
import ExamEntry from "./components/exam/ExamEntry";
import ExamList from "./components/exam/ExamList";
import ExamMarks from "./components/exam/ExamMarks";
import ResultCoaching from "./components/result/ResultCoaching";
import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";
import StudentProfileEdit from "./components/student/StudentProfileEdit";
import StudentProfileView from "./components/student/StudentProfileView";
import TeacherProfile from "./components/teacher/TeacherProfile";
import TeacherEntry from "./components/teacher/TeacherEntry";
import TeacherList from "./components/teacher/TeacherList";
import UesrList from "./components/user/UesrList";
import UserProfile from "./components/user/UserProfile";

const Dashboard = React.lazy(() => import("./components/common/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: DefaultLayout },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/student/registration",
    exact: true,
    name: "Student Registration Form",
    component: StudentForm
  },
  {
    path: "/student/all",
    exact: true,
    name: "Student List",
    component: StudentList
  },
  {
    path: "/student/profile/:id",
    exact: true,
    name: "View Student Profile",
    component: StudentProfileView
  },
  {
    path: "/student/edit/:id",
    exact: true,
    name: "Edit Student Profile",
    component: StudentProfileEdit
  },
  {
    path: "/attendance/take",
    exact: true,
    name: "Take Attendance",
    component: AttendanceTake
  },
  {
    path: "/attendance/report",
    exact: true,
    name: "Attendance Report",
    component: AttendanceReport
  },
  {
    path: "/exams/entry/",
    name: "Exam Entry",
    component: ExamEntry
  },
  {
    path: "/exams/all",
    exact: true,
    name: "Exam List",
    component: ExamList
  },
  {
    path: "/exams/details/:id",
    exact: true,
    name: "Exam Details",
    component: ExamDetails
  },
  {
    path: "/exams/marks/:id",
    exact: true,
    name: "Exam Marks",
    component: ExamMarks
  },
  {
    path: "/teachers/entry/",
    name: "Teacher Entry",
    component: TeacherEntry
  },
  {
    path: "/teachers/all",
    exact: true,
    name: " Teacher List",
    component: TeacherList
  },
  {
    path: "/teachers/profile/:id",
    exact: true,
    name: " Teacher Profile",
    component: TeacherProfile
  },
  {
    path: "/users/all",
    exact: true,
    name: " User List",
    component: UesrList
  },
  {
    path: "/users/profile/:id",
    exact: true,
    name: " User Profile",
    component: UserProfile
  },
  {
    path: "/results/coaching",
    exact: true,
    name: "Coaching Result",
    component: ResultCoaching
  }
];

export default routes;
