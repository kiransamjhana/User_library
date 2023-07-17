import { toast } from "react-toastify";
import { postReview, getReview, updateReview } from "../../helper/axios";
import { setModalShow } from "../../system/systemSlice";
import { setReviews } from "./reviewSlice";
import { fetchBurrowAction } from "../burrowHistory/burrowAction";

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await postReview(obj);

  toast[status](message);

  if (status === "success") {
    //refetch all the burrow history
    dispatch(setModalShow(false));
    dispatch(fetchBurrowAction());
    dispatch(fetchBurrowAction());
  }
};

export const fetchReviewAction = () => async (dispatch) => {
  const { status, reviews } = await getReview();

  if (status === "success") {
    //refetch all the burrow history
    dispatch(setReviews(reviews));
  }
};

export const updateReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await updateReview(obj);
  toast[status](message);
  if (status === "success") {
    //refetch all the burrow history
    dispatch(fetchReviewAction());
  }
};
