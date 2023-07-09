import { toast } from "react-toastify";
import { fetchBurrow, postBurrow } from "../../helper/axios";
import { fetchBookAction } from "../books/bookAction";
import { setBurrows } from "./burrowSlice";

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, message, burrowHistory } = await fetchBurrow();
  toast[status](message);

  if (status === "success") dispatch(setBurrows(burrowHistory));
};

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") dispatch(fetchBookAction());
};
