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
import TeacherProfileEdit from "./components/teacher/TeacherProfileEdit";
import TeacherEntry from "./components/teacher/TeacherEntry";
import TeacherList from "./components/teacher/TeacherList";
import UesrList from "./components/user/UesrList";
import UserProfile from "./components/user/UserProfile";

const Dashboard = React.lazy(() => import("./components/common/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: DefaultLayout, private: true },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard, private: true },
  {
    path: "/student/registration",
    exact: true,
    name: "Student Registration Form",
    component: StudentForm,
    private: true
  },
  {
    path: "/student/all",
    exact: true,
    name: "Student List",
    component: StudentList,
    private: true
  },
  {
    path: "/student/profile/:id",
    exact: true,
    name: "View Student Profile",
    component: StudentProfileView,
    private: true
  },
  {
    path: "/student/edit/:id",
    exact: true,
    name: "Edit Student Profile",
    component: StudentProfileEdit,
    private: true
  },
  {
    path: "/attendance/take",
    exact: true,
    name: "Take Attendance",
    component: AttendanceTake,
    private: true
  },
  {
    path: "/attendance/report",
    exact: true,
    name: "Attendance Report",
    component: AttendanceReport,
    private: true
  },
  {
    path: "/exams/entry/",
    name: "Exam Entry",
    component: ExamEntry,
    private: true
  },
  {
    path: "/exams/all",
    exact: true,
    name: "Exam List",
    component: ExamList,
    private: true
  },
  {
    path: "/exams/details/:id",
    exact: true,
    name: "Exam Details",
    component: ExamDetails,
    private: true
  },
  {
    path: "/exams/marks/:id",
    exact: true,
    name: "Exam Marks",
    component: ExamMarks,
    private: true
  },
  {
    path: "/teachers/entry/",
    name: "Teacher Entry",
    component: TeacherEntry,
    private: true
  },
  {
    path: "/teachers/all",
    exact: true,
    name: "Teacher List",
    component: TeacherList,
    private: true
  },
  {
    path: "/teachers/edit/:id",
    exact: true,
    name: "Edit Teacher Profile",
    component: TeacherProfileEdit,
    private: true
  },
  {
    path: "/teachers/profile/:id",
    exact: true,
    name: "Teacher Profile",
    component: TeacherProfile,
    private: true
  },
  {
    path: "/users/all",
    exact: true,
    name: "User List",
    component: UesrList,
    private: true
  },
  {
    path: "/users/profile/:id",
    exact: true,
    name: "User Profile",
    component: UserProfile,
    private: true
  },
  {
    path: "/results/coaching",
    exact: true,
    name: "Coaching Result",
    component: ResultCoaching,
    private: true
  }
];

export default routes;
