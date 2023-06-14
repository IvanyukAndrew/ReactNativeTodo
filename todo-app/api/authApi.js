import axios from "axios";

export const fetchAuthLogin = async (email, password) => {
  try {
    const res = await axios.post(
      "https://13fc-194-39-227-82.ngrok-free.app/auth/login",
      { email, password }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAuthRegister = async (fields) => {
  try {
    const res = await axios.post(
      "https://13fc-194-39-227-82.ngrok-free.app/auth/register",
      fields
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
