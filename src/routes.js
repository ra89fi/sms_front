import React from "react";
import DefaultLayout from "./containers/DefaultLayout";
import OrganizationForm from "./components/organization/OrganizationForm";
import OrganizationList from "./components/organization/OrganizationList";
import StudentForm from "./components/student/StudentForm";
import StudentList from "./components/student/StudentList";

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
    path: "/organization/registration",
    exact: true,
    name: "Organization Registration Form",
    component: OrganizationForm
  },
  {
    path: "/organization/all",
    exact: true,
    name: "Organization List",
    component: OrganizationList
  }
];

export default routes;
