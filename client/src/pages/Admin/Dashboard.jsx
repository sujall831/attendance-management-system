import { useGetAllAttendanceQuery } from "../../features/attendance/attendanceApi";
import { useGetUsersQuery } from "../../features/users/userApi";
import AdminLayout from "../../components/admin/AdminLayout";

export default function Dashboard() {
  const { data: attendance } = useGetAllAttendanceQuery();
  const { data: users } = useGetUsersQuery();

  const pending = attendance?.filter(
    (a) => a.validationStatus === "pending"
  )?.length;

  return (
    <AdminLayout>

      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">{users?.length || 0}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Attendance Records</h3>
          <p className="text-2xl font-bold">{attendance?.length || 0}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Pending Validation</h3>
          <p className="text-2xl font-bold">{pending || 0}</p>
        </div>

      </div>

      <h2 className="text-xl font-bold">
        Welcome Admin Dashboard
      </h2>

    </AdminLayout>
  );
}