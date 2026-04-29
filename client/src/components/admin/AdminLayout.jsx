import { useNavigate, useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menu = [
    { name: "Overview", path: "/admin/dashboard" },
    { name: "Users", path: "/admin/users" },
    { name: "Attendance", path: "/admin/attendance" },
    { name: "Reports", path: "/admin/reports" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">

      <div className="w-64 bg-white shadow p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        {menu.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`block w-full text-left p-2 rounded mb-2 ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {item.name}
          </button>
        ))}

        <button
          onClick={logout}
          className="mt-6 bg-red-500 text-white w-full p-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}