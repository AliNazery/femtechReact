import { configureStore } from "@reduxjs/toolkit";
// import { webAPi } from "@/lib/web/webApi";
import { apiSlice } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // [webAPi.reducerPath]: webAPi.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare()
      .concat(apiSlice.middleware)
    //   .concat(webAPi.middleware),
});
