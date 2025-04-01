import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Importing the main App component
import "./index.css"; // Importing global styles
import AuthProvider from "./context/AuthProvider.jsx"; // Importing authentication provider

// Rendering the main application inside the root div
ReactDOM.createRoot(document.getElementById("root")).render(

    <AuthProvider> {/* Wrapping the entire application with AuthProvider for state management */}
      <App /> {/* Main application component */}
    </AuthProvider>
 
);
