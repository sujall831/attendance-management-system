import { Link } from "react-router-dom";
import EmployeeLayout from "../../components/layout/EmployeeLayout";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <EmployeeLayout>
      
      <h2 className="text-2xl font-bold mb-2">
        Welcome, {user?.name}
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Role: {user?.role}
      </p>

      <div className="flex gap-4 justify-center">
        
        <Link to="/employee/attendance">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded">
            Attendance
          </button>
        </Link>

        <Link to="/employee/overtime">
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded">
            Overtime
          </button>
        </Link>

      </div>

    </EmployeeLayout>
  );
}