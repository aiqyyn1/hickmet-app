import api from "../api/axios";
import Cookies from "js-cookie";

export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    const { accessToken, user_id } = response.data;
    console.log(response.data);
    Cookies.set("access", accessToken);
    Cookies.set("userId", user_id);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const signUp = async (data) => {
  try {
    const response = await api.post(
      "/register",

      data
    );

    Cookies.set("access", accessToken);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export const getCards = async () => {
  try {
    const response = await api.get("/cards");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCardsByUserId = async () => {
  try {
    const userId = Cookies.get("userId");
    const response = await api.get(`/cards/user/${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
