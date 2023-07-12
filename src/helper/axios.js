import axios from "axios";

const rootAPI = "http://localhost:8003";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";
const burrowAPI = rootAPI + "/api/v1/burrow";

const getUserIdFromLocalStorage = () => {
  const str = localStorage.getItem("persist:userInfo");
  if (str) {
    const userInfo = JSON.parse(str);

    if (userInfo.user) {
      const user = JSON.parse(userInfo.user);
      return user?._id;
    }
  }
  return null;
};
/// for the user
// ====== user
export const postUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI, userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI + "/login", userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ========= book
export const postBook = async (obj) => {
  try {
    const { data } = await axios.post(bookAPI, obj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchBooks = async () => {
  try {
    const { data } = await axios.get(bookAPI);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateBook = async (obj) => {
  try {
    const { data } = await axios.put(bookAPI, obj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBook = async (_id) => {
  try {
    const userId = getUserIdFromLocalStorage();
    const { data } = await axios.delete(bookAPI + "/" + _id, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ========= Burrow
export const postBurrow = async (obj) => {
  try {
    const { data } = await axios.post(burrowAPI, obj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchBurrow = async () => {
  try {
    const { data } = await axios.get(burrowAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
