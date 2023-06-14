import axios from "axios";

export const fetchTodo = async (id) => {
  try {
    const { data } = await axios.get(
      `https://13fc-194-39-227-82.ngrok-free.app/todo/${id}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateTodo = async (title, token) => {
  try {
    await axios.post(
      `https://13fc-194-39-227-82.ngrok-free.app/todo`,
      {
        title: title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchTodoDelet = async (id) => {
  try {
    await axios.delete(
      `https://13fc-194-39-227-82.ngrok-free.app/todo/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};
