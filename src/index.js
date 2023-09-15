import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer

import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

ReactDOM.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    <ToastContainer /> {/* Add ToastContainer here */}
  </Router>,
  document.getElementById("root")
);
