import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "components/ProtectedRoute/ProtectedRoute";

import Login from "scenes/Login"
import Layout from "scenes/Layout";
import Dashboard from "scenes/Dashboard"
import Tickets from "scenes/Tickets"

function App() {
  const isLoged = useSelector((state) => state.global.isLoged)

  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isLoged={isLoged}> <Layout /> </ProtectedRoute>}>
            <Route path="/" element={<Navigate to={isLoged ? "/dashboard" : "/login"} replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tickets" element={<Tickets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
