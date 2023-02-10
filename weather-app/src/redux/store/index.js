import { configureStore } from "@reduxjs/toolkit";
import cities from "../reducers";

const store = configureStore({reducer: cities})

export default store