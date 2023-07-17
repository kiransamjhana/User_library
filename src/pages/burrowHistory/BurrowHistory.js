import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";

import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchBurrowAction, returnBurrowAction } from "./burrowAction";
import { ReviewForm } from "../review/ReviewForm";
import { setModalShow } from "../../system/systemSlice";
import { CustomModel } from "../../components/modal/CustomModel";

const BurrowHistory = () => {
  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState({});
  const { burrows } = useSelector((state) => state.burrowInfo);

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);

  const handleOnReturn = ({ bookId, _id }) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      const obj = { bookId, burrowId: _id };
      console.log(obj);

      dispatch(returnBurrowAction(obj));
    }
  };
  const handleOnReview = (burrowBook) => {
    setSelectedReview(burrowBook);
    dispatch(setModalShow(true));
  };

  return (
    <UserLayout title="BurrowHistory">
      {selectedReview?._id && (
        <CustomModel modalTitle="Leave your review">
          <ReviewForm selectedReview={selectedReview} />
        </CustomModel>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Studnet Name</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate.slice(0, 10)}</td>
              <td></td>
              <td>
                {item.userId === user._id && !item.isRetured ? (
                  <Button onClick={() => handleOnReturn(item)}>Return</Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleOnReview(item)}
                  >
                    Leave review
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BurrowHistory;
