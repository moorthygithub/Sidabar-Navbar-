import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Layout from "../src/pages/Layout/Layout";
import RegisterForm from "../src/pages/RegisterForm/RegisterForm";
import Maintance from "./pages/Maintance/Maintaince";
import EnhancedTable from "./pages/EnhancedTableToolbar/EnhancedTableToolbar";
import { StatusProvider } from "./pages/Login/StatusCheck";

const App = () => {
  return (
    <Router>
      <StatusProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/maintenance" element={<Maintance />} />

          {/* Private Routes */}
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/table" element={<EnhancedTable />} />
          </Route>

          {/* Redirect unknown routes to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </StatusProvider>
    </Router>
  );
};

export default App;
