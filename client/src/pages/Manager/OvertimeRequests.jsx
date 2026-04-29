import { useGetOvertimeQuery, useUpdateOvertimeMutation } from "../../features/overtime/overtimeApi";

export default function OvertimeRequests() {
  const { data, isLoading } = useGetOvertimeQuery();
  const [updateOvertime] = useUpdateOvertimeMutation();

  const handleAction = async (id, status) => {
    await updateOvertime({ id, status });
  };

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold mb-6">
          Manager - Overtime Requests
        </h1>

        <div className="grid gap-4">
          {data?.map((item) => (
            <div
              key={item._id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h2 className="font-semibold">
                {item.user?.name}
              </h2>

              <p className="text-sm mt-1">
                Hours: {item.hours}
              </p>

              <p className="text-sm">
                Reason: {item.reason}
              </p>

              <span className="text-sm mt-2 block">
                Status: {item.status}
              </span>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleAction(item._id, "approved")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleAction(item._id, "rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}