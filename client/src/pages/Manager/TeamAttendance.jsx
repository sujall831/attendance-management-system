import { useGetMyAttendanceQuery } from "../../features/attendance/attendanceApi";
import { useState } from "react";
import { formatDateTime } from "../../utils/formatTime";

export default function TeamAttendance() {
  const { data, isLoading, error, refetch } = useGetMyAttendanceQuery();

  const [remarks, setRemarks] = useState({});
  const [loadingId, setLoadingId] = useState(null);

  const handleValidate = async (id, status) => {
    try {
      setLoadingId(id);

      const API_URL = import.meta.env.VITE_API_URL;

      const res = await fetch(`${API_URL}/attendance/validate/${id}`, {
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

      if (!res.ok) {
        throw new Error("Failed to update");
      }

      alert("Updated successfully ✅");
      refetch();
    } catch (err) {
      console.error(err);
      alert("Error updating attendance ❌");
    } finally {
      setLoadingId(null);
    }
  };

  if (isLoading)
    return <p className="p-6 text-gray-600">Loading...</p>;

  if (error)
    return <p className="p-6 text-red-500">Error loading data</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Manager - Team Attendance
      </h1>

      <div className="grid gap-5">
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

            {/* SELFIE */}
            {a.selfie && (
              <img
                src={a.selfie}
                alt="selfie"
                className="w-32 mt-2 rounded border"
              />
            )}

            <p className="mt-2">
              <b>Validation:</b> {a.validationStatus}
            </p>

            {/* REMARK INPUT */}
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

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 mt-4">
              <button
                disabled={loadingId === a._id}
                onClick={() => handleValidate(a._id, "valid")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded disabled:opacity-50"
              >
                {loadingId === a._id ? "Processing..." : "Approve"}
              </button>

              <button
                disabled={loadingId === a._id}
                onClick={() => handleValidate(a._id, "invalid")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded disabled:opacity-50"
              >
                {loadingId === a._id ? "Processing..." : "Reject"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}