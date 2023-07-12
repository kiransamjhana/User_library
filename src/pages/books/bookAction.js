import { toast } from "react-toastify";
import {
  deleteBook,
  fetchBooks,
  postBook,
  updateBook,
} from "../../helper/axios";
import { setBooks } from "./booksSlice";

export const postBookAction = (Obj) => async (dispatch) => {
  const dataPending = postBook(Obj);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    // need to fetch all books
    dispatch(fetchBookAction());
  }
};

export const updateBookAction = (Obj) => async (dispatch) => {
  const dataPending = updateBook(Obj);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    // need to fetch all books
    dispatch(fetchBookAction());
  }
};

export const deleteBookAction = (_id) => async (dispatch) => {
  const dataPending = deleteBook(_id);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    // need to fetch all books
    dispatch(fetchBookAction());
    return status;
  }
};

export const fetchBookAction = () => async (dispatch) => {
  const { status, books } = await fetchBooks();

  if (status === "success") {
    dispatch(setBooks(books));
  }
};
