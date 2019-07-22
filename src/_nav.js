export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
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
    }
  ]
};
