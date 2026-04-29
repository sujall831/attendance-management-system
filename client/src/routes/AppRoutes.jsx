import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "../pages/Auth/AuthPage";

import EmployeeDashboard from "../pages/Employee/Dashboard";
import Attendance from "../pages/Employee/Attendance";
import Overtime from "../pages/Employee/Overtime";

import TeamAttendance from "../pages/Manager/TeamAttendance";
import OvertimeRequests from "../pages/Manager/OvertimeRequests";
import ManagerDashboard from "../pages/Manager/Dashboard";

import AdminDashboard from "../pages/Admin/Dashboard";
import AdminUsers from "../pages/Admin/Users";
import AdminAttendance from "../pages/Admin/Attendance";
import AdminReports from "../pages/Admin/Reports";

import ProtectedRoute from "../components/layout/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<AuthPage />} />

      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/attendance"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <Attendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/overtime"
        element={
          <ProtectedRoute allowedRoles={["employee"]}>
            <Overtime />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager/dashboard"
        element={
          <ProtectedRoute allowedRoles={["manager"]}>
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager/team-attendance"
        element={
          <ProtectedRoute allowedRoles={["manager"]}>
            <TeamAttendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager/overtime"
        element={
          <ProtectedRoute allowedRoles={["manager"]}>
            <OvertimeRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminUsers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/attendance"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminAttendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/reports"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminReports />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}