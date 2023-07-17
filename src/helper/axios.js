import axios from "axios";

const rootAPI = "http://localhost:8003";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";
const burrowAPI = rootAPI + "/api/v1/burrow";
const reviewAPI = rootAPI + "/api/v1/review";

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
    const { data } = await axios.post(bookAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    console.log(data);
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
    const { data } = await axios.get(bookAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
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
    const { data } = await axios.put(bookAPI, obj, {
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
    const { data } = await axios.post(burrowAPI, obj, {
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

export const returnBurrow = async (obj) => {
  try {
    const { data } = await axios.put(burrowAPI, obj, {
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

// Reviews
export const postReview = async (obj) => {
  try {
    const { data } = await axios.post(reviewAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getReview = async (obj) => {
  try {
    const { data } = await axios.get(reviewAPI, obj, {});
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateReview = async (obj) => {
  try {
    const { data } = await axios.patch(reviewAPI, obj, {
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
