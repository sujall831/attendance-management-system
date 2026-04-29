import { useState, useEffect } from "react";
import { useLoginMutation, useRegisterMutation } from "../../features/auth/authApi";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (user && token) {
      redirectByRole(user.role);
    }
  }, []);

  const redirectByRole = (role) => {
    if (role === "admin") navigate("/admin/dashboard", { replace: true });
    else if (role === "manager") navigate("/manager/dashboard", { replace: true });
    else navigate("/employee/dashboard", { replace: true });
  };

  const handleSubmit = async () => {
    try {
      setError("");

      if (isLogin) {
        const res = await login({
          email: form.email,
          password: form.password,
        }).unwrap();

        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        redirectByRole(res.user.role);
      } else {
        const res = await register(form).unwrap();

        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        redirectByRole(res.user.role);
      }
    } catch (err) {
      setError(err?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-5">
          {isLogin ? "Login" : "Register"}
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        {!isLogin && (
          <input
            placeholder="Full Name"
            className="w-full border p-2 mb-2 rounded"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            autoComplete="off"
          />
        )}

        <input
          placeholder="Email"
          className="w-full border p-2 mb-2 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          autoComplete="username"
        />

        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-2 rounded pr-14"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            autoComplete={isLogin ? "current-password" : "new-password"}
            name="secure-password-field"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          className="text-center text-sm mt-4 text-blue-500 cursor-pointer"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
        >
          {isLogin
            ? "Create new account"
            : "Already have account? Login"}
        </p>
      </div>
    </div>
  );
}