import { useState } from "react";
import { useRequestOvertimeMutation } from "../../features/overtime/overtimeApi";
import EmployeeLayout from "../../components/layout/EmployeeLayout";

export default function Overtime() {
  const [requestOT, { isLoading }] = useRequestOvertimeMutation();

  const [form, setForm] = useState({
    hours: "",
    reason: "",
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (!form.hours || !form.reason) {
      setError("All fields required");
      return false;
    }

    if (Number(form.hours) <= 0) {
      setError("Hours must be > 0");
      return false;
    }

    if (form.reason.trim().length < 3) {
      setError("Reason too short");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setError("");
    if (!validate()) return;

    await requestOT({
      hours: Number(form.hours),
      reason: form.reason,
    });

    alert("Request submitted");

    setForm({ hours: "", reason: "" });
  };

  return (
    <EmployeeLayout>

      <h2 className="text-xl font-bold text-center mb-2">
        Request Overtime
      </h2>

      <p className="text-gray-500 text-sm text-center mb-4">
        Submit request for manager approval
      </p>

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-3 text-center">
          {error}
        </div>
      )}

      <input
        type="number"
        placeholder="Hours"
        value={form.hours}
        onChange={(e) =>
          setForm({ ...form, hours: e.target.value })
        }
        className="w-full border p-2 rounded mb-3"
      />

      <textarea
        placeholder="Reason"
        value={form.reason}
        onChange={(e) =>
          setForm({ ...form, reason: e.target.value })
        }
        className="w-full border p-2 rounded h-24"
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>

    </EmployeeLayout>
  );
}