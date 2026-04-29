import { useNavigate } from "react-router-dom";

export default function EmployeeLayout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center mb-6">
        <h1 className="font-bold text-lg">Employee Panel</h1>

        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-600">
            {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-white shadow rounded-xl p-6 w-full max-w-2xl">
          {children}
        </div>
      </div>

    </div>
  );
}