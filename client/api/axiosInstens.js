import axios from "axios";

const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((cookie) => cookie.startsWith("jwt"));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};
const token = getAuthTokenFromCookie();

const usersCliant = axios.create({
  baseURL: "http://localhost:3000/api/users",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const professionCliant = axios.create({
  baseURL: "http://localhost:3000/api/professions",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export { usersCliant, professionCliant };
