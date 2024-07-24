import api from "./axios";
const endpoint = "sessions";

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post(`${endpoint}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (loginData: LoginData) => {
  try {
    console.log("logindata: ", loginData);
    const response = await api.post(`${endpoint}/login`, loginData);

    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
