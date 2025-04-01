import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // State to track the logged-in user's role (admin or employee)
  const [user, setUser] = useState(null);

  // State to store the logged-in employee's data
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Accessing the global user data from AuthContext
  const [userData, SetUserData] = useContext(AuthContext);

  // useEffect runs once when the component is mounted
  useEffect(() => {
    // Checking if a user is already logged in (saved in localStorage)
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      // Parsing the stored user data
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role); // Setting user role (admin/employee)
      setLoggedInUserData(userData.data); // Storing employee details if available
    }
  }, []);

  // Function to handle login
  const handleLogin = (email, password) => {
    // Check if the entered credentials match the admin credentials
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      // Store admin login details in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      // Find employee data in the stored user list
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );

      if (employee) {
        setUser("employee"); // Set user role to employee
        setLoggedInUserData(employee); // Store employee data
        // Save login details in localStorage
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials"); // Alert user if login fails
      }
    }
  };

  return (
    <>
      {/* Show login form if no user is logged in */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {/* Show Admin Dashboard if user is an admin */}
      {user == "admin" ? ( <AdminDashboard changeUser={setUser} />) : user == "employee" ? (<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />) : null}
    </>
  );
};

export default App;
