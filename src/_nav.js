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
      name: "Organization",
      url: "/organization",
      icon: "icon-people",
      children: [
        {
          name: "Registration",
          url: "/organization/registration",
          icon: "icon-people"
        },
        {
          name: "Organization List",
          url: "/organization/all",
          icon: "icon-people"
        }
      ]
    }
  ]
};
