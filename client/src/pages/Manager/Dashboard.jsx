import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-3xl">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manager Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>

        <div className="mt-4">
          <p className="text-gray-600">Welcome, {user?.name}</p>
          <p className="text-sm text-gray-500">Role: {user?.role}</p>
        </div>

        <div className="mt-6 flex gap-4">
          <Link to="/manager/team-attendance">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Team Attendance
            </button>
          </Link>

          <Link to="/manager/overtime">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Overtime Requests
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}