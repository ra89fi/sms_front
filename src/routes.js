import React from "react";
import DefaultLayout from "./containers/DefaultLayout";
import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";
import AttendanceTake from "./components/common/AttendanceTake";
import AttendanceReport from "./components/common/AttendanceReport";
import ViewStudentProfile from "./components/student/ViewStudentProfile";
import EditStudentProfile from "./components/student/EditStudentProfile";
import ExamEntry from "./components/exam/ExamEntry";
import ExamList from "./components/exam/ExamList";
import ExamDetails from "./components/exam/ExamDetails";
import ExamMarks from "./components/exam/ExamMarks";

const Dashboard = React.lazy(() => import("./components/organization/OrganizationDashboard"));

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
    component: ViewStudentProfile
  },
  {
    path: "/student/edit/:id",
    exact: true,
    name: "Edit Student Profile",
    component: EditStudentProfile
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
  }
];

export default routes;
