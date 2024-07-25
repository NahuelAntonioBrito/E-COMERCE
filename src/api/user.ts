import api from "./axios";
const endpoint = "users";

interface User {
  userName: string;
  email: string;
  age: number;
  role: string;
}

export const userProfile = async (): Promise<User | null> => {
  try {
    const response = await api.get(`/${endpoint}/current`);
    const user = response.data.user;

    localStorage.setItem("loggedUser", JSON.stringify(user));

    return user;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};
