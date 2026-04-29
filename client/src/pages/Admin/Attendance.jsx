import { useState } from "react";
import {
  useGetAllAttendanceQuery,
  useValidateAttendanceMutation,
} from "../../features/attendance/attendanceApi";
import AdminLayout from "../../components/admin/AdminLayout";
import { formatDateTime } from "../../utils/formatTime";

export default function Attendance() {
  const { data } = useGetAllAttendanceQuery();
  const [validateAttendance] = useValidateAttendanceMutation();
  const [remarks, setRemarks] = useState({});

  const handleValidate = async (id, status) => {
    await validateAttendance({
      id,
      status,
      remarks: remarks[id] || "",
    });
  };

  return (
    <AdminLayout>

      <h2 className="text-xl font-bold mb-4">
        Attendance Management
      </h2>

      <div className="grid gap-4">

        {data?.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded shadow"
          >
            <p><b>{item.user?.name}</b></p>

            <p>In: {formatDateTime(item.punchInTime)}</p>

            <p>
              Out:{" "}
              {item.punchOutTime
                ? formatDateTime(item.punchOutTime)
                : "Not yet"}
            </p>

            <p>Hours: {item.totalHours}</p>

            <p>Status: {item.validationStatus}</p>

            {item.selfie && (
              <img
                src={item.selfie}
                className="w-24 mt-2 rounded"
              />
            )}

            <input
              className="border p-1 mt-2 w-full"
              placeholder="Remarks"
              onChange={(e) =>
                setRemarks({
                  ...remarks,
                  [item._id]: e.target.value,
                })
              }
            />

            <div className="flex gap-2 mt-2">
              <button
                onClick={() =>
                  handleValidate(item._id, "valid")
                }
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Valid
              </button>

              <button
                onClick={() =>
                  handleValidate(item._id, "invalid")
                }
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Invalid
              </button>
            </div>

          </div>
        ))}

      </div>

    </AdminLayout>
  );
}