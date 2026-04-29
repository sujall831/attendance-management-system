import { useGetUsersQuery } from "../../features/users/userApi";
import AdminLayout from "../../components/admin/AdminLayout";

export default function Users() {
  const { data } = useGetUsersQuery();

  return (
    <AdminLayout>

      <h2 className="text-xl font-bold mb-4">Users Management</h2>

      <div className="bg-white p-4 rounded shadow">
        {data?.map((u) => (
          <div
            key={u._id}
            className="flex justify-between border-b py-2"
          >
            <span>{u.name}</span>
            <span className="text-gray-500">{u.role}</span>
          </div>
        ))}
      </div>

    </AdminLayout>
  );
}