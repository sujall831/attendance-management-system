import { useGetAllAttendanceQuery } from "../../features/attendance/attendanceApi";
import AdminLayout from "../../components/admin/AdminLayout";

export default function Reports() {
  const { data } = useGetAllAttendanceQuery();

  return (
    <AdminLayout>

      <h2 className="text-xl font-bold mb-4">
        Attendance Reports
      </h2>

      <div className="bg-white p-4 rounded shadow">

        {data?.map((r) => (
          <div
            key={r._id}
            className="border-b py-2"
          >
            <p>{r.user?.name}</p>
            <p>{r.totalHours} hrs</p>
            <p>{r.status}</p>
          </div>
        ))}

      </div>

    </AdminLayout>
  );
}