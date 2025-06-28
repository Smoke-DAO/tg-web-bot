import axios from "axios";

const SERVER_URL = "https://api-old.smokedao.fun";

const apiClient = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "bypass-tunnel-reminder": "true" // For local development
  }
});

// Helper to get Telegram auth data
const getTelegramAuthData = () => {
  const { initData } = window.Telegram.WebApp;
  return initData;
};

export const puffsApi = {
  createPuff: async () => {
    const initData = getTelegramAuthData();
    const response = await apiClient.post(
      "/v2/puffs",
      {},
      {
        headers: {
          "telegram-init-data": initData
        }
      }
    );
    return response.data;
  }
};

export const userApi = {
  fetchProfile: async () => {
    const initData = getTelegramAuthData();

    const params = new URLSearchParams(String(initData));
    const userJsonString = params.get("user");

    if (!userJsonString) {
      throw new Error("Telegram: initData params for `user` not found");
    }

    const user = JSON.parse(userJsonString);
    const response = await apiClient.get(`/v2/users/${user.id}`, {
      headers: {
        "telegram-init-data": initData
      }
    });

    return response.data;
  }
};

export const jointsApi = {
  mintJoints: async (quantity: number) => {
    const initData = getTelegramAuthData();
    const response = await apiClient.put(
      "/v2/joints/mint",
      { quantity },
      {
        headers: {
          "Content-Type": "application/json",
          "telegram-init-data": initData
        }
      }
    );
    return response.data;
  }
};
