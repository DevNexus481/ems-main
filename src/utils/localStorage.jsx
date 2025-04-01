const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Meera",
    email: "meera@example.com",
    password: "abc123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Content writing",
        taskDescription: "Write blog posts for marketing",
        taskDate: "2024-10-15",
        category: "Content",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Analyze and improve SEO strategies",
        taskDate: "2024-10-18",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare slides for the product pitch",
        taskDate: "2024-10-08",
        category: "Presentation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Raj",
    email: "raj@example.com",
    password: "pass456",
    taskCounts: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Develop API",
        taskDescription: "Build authentication API",
        taskDate: "2024-10-16",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Migration",
        taskDescription: "Migrate database to a new server",
        taskDate: "2024-10-17",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve high-priority bugs",
        taskDate: "2024-10-09",
        category: "Development",
      },
    ],
  },
  {
    id: 4,
    firstName: "Sanya",
    email: "sanya@example.com",
    password: "sanya@789",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UI Redesign",
        taskDescription: "Improve UI elements for better UX",
        taskDate: "2024-10-20",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitor products",
        taskDate: "2024-10-22",
        category: "Research",
      },
    ],
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "kabir@example.com",
    password: "kabir@321",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Product Testing",
        taskDescription: "Perform QA testing",
        taskDate: "2024-10-11",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix frontend issues reported",
        taskDate: "2024-10-19",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// Function to store employees and admin data in localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Function to retrieve employees and admin data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
