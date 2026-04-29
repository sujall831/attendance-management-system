export const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  return {
    user,
    token,
    isLoggedIn: !!token,
    role: user?.role || null,
  };
};