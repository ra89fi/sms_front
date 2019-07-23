export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "Student",
      url: "/student",
      icon: "icon-people",
      children: [
        {
          name: "Registration",
          url: "/student/registration",
          icon: "icon-people"
        },
        {
          name: "Student List",
          url: "/student/all",
          icon: "icon-people"
        }
      ]
    },
    {
      name: "Attendance",
      url: "/attendance",
      icon: "icon-people",
      children: [
        {
          name: "Take Attendance",
          url: "/attendance/take",
          icon: "icon-people"
        },
        {
          name: "Attendance Report",
          url: "/attendance/report",
          icon: "icon-people"
        }
      ]
    },
    {
      name: "Exams",
      url: "/exams",
      icon: "icon-people",
      children: [
        {
          name: "Exam Entry",
          url: "/exams/entry",
          icon: "icon-people"
        },
        {
          name: "Exams List",
          url: "/exams/all",
          icon: "icon-people"
        }
      ]
    },
    {
      name: "Teachers",
      url: "/teachers",
      icon: "icon-people",
      children: [
        {
          name: "Teacher Entry",
          url: "/teachers/entry",
          icon: "icon-people"
        },
        {
          name: "Teachers List",
          url: "/teachers/all",
          icon: "icon-people"
        }
      ]
    },
    {
      name: "Users",
      url: "/users",
      icon: "icon-people",
      children: [
        {
          name: "User List",
          url: "/users/all",
          icon: "icon-people"
        }
      ]
    }
  ]
};
