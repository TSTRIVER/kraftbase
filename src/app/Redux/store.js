"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listingSlice";

const rootReducer = combineReducers({
  listing: listingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
