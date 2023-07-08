import { toast } from "react-toastify";
import { postBurrow } from "../../helper/axios";
import { fetchBookAction } from "../books/bookAction";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") dispatch(fetchBookAction());
};
