import { useGetMyAttendanceQuery } from "../../features/attendance/attendanceApi";
import { useState } from "react";
import { formatDateTime } from "../../utils/formatTime";

export default function TeamAttendance() {
  const { data, isLoading, error, refetch } = useGetMyAttendanceQuery();
  const [remarks, setRemarks] = useState({});

  const handleValidate = async (id, status) => {
    await fetch(`http://localhost:5000/api/attendance/validate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        status,
        remarks: remarks[id] || "",
      }),
    });

    refetch();
  };

  if (isLoading)
    return <p className="p-6 text-gray-600">Loading...</p>;

  if (error)
    return <p className="p-6 text-red-500">Error loading data</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Manager - Team Attendance
      </h1>

      <div className="grid gap-4">
        {data?.map((a) => (
          <div
            key={a._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <p className="font-semibold text-lg">
              {a.user?.name}
            </p>

            <p className="text-sm text-gray-600">
              Punch In: {formatDateTime(a.punchInTime)}
            </p>

            <p className="text-sm text-gray-600">
              Punch Out:{" "}
              {a.punchOutTime
                ? formatDateTime(a.punchOutTime)
                : "Not yet"}
            </p>

            <p className="mt-2">
              <b>Hours:</b> {a.totalHours}
            </p>

            <p>
              <b>Status:</b>{" "}
              <span className="text-blue-600">
                {a.status}
              </span>
            </p>

            {a.selfie && (
              <img
                src={a.selfie}
                className="w-32 mt-2 rounded"
              />
            )}

            <p className="mt-2">
              Validation: {a.validationStatus}
            </p>

            <input
              className="border p-2 mt-2 w-full rounded"
              placeholder="Add remarks"
              value={remarks[a._id] || ""}
              onChange={(e) =>
                setRemarks({
                  ...remarks,
                  [a._id]: e.target.value,
                })
              }
            />

            <div className="flex gap-2 mt-3">
              <button
                onClick={() =>
                  handleValidate(a._id, "valid")
                }
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Approve
              </button>

              <button
                onClick={() =>
                  handleValidate(a._id, "invalid")
                }
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}