import { configureStore } from "@reduxjs/toolkit";


import accountreducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountreducer,
    customer: customerReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
