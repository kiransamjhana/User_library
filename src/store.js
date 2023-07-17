import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/books/booksSlice";
import burrowReducer from "./pages/burrowHistory/burrowSlice";
import systemReducer from "./system/systemSlice";
import reviewReducer from "./pages/review/reviewSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const userPresistConfig = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPresistConfig, userReducer);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
    system: systemReducer,
    reviewInfo: reviewReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
