import { useState } from "react";
import {
  usePunchInMutation,
  usePunchOutMutation,
} from "../../features/attendance/attendanceApi";

import CameraCapture from "../../components/attendance/CameraCapture";
import EmployeeLayout from "../../components/layout/EmployeeLayout";

export default function Attendance() {
  const [punchIn] = usePunchInMutation();
  const [punchOut] = usePunchOutMutation();

  const [selfie, setSelfie] = useState(null);

  const getLocation = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        reject
      );
    });

  const handlePunchIn = async () => {
    if (!selfie) return alert("Capture selfie first");

    const location = await getLocation();

    await punchIn({
      selfie,
      ...location,
    });

    alert("Punched In");
  };

  const handlePunchOut = async () => {
    await punchOut();
    alert("Punched Out");
  };

  return (
    <EmployeeLayout>

      <h2 className="text-xl font-bold text-center mb-4">
        Attendance System
      </h2>

      <div className="flex justify-center">
        <CameraCapture onCapture={setSelfie} />
      </div>

      {selfie && (
        <div className="flex justify-center mt-4">
          <img
            src={selfie}
            className="w-40 rounded-xl border"
          />
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePunchIn}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded"
        >
          Punch In
        </button>

        <button
          onClick={handlePunchOut}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
        >
          Punch Out
        </button>
      </div>

    </EmployeeLayout>
  );
}