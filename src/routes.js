import React from "react";
import DefaultLayout from "./containers/DefaultLayout";
import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";
import AttendanceTake from "./components/common/AttendanceTake";
import AttendanceReport from "./components/common/AttendanceReport";
import ViewStudentProfile from "./components/student/ViewStudentProfile";
import EditStudentProfile from "./components/student/EditStudentProfile";

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
  }
];

export default routes;
