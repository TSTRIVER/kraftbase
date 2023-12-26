"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  date: "",
  current_list: [],
};

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    setListing: (state, action) => {
      state.name = action.payload?.location;
      state.date = action.payload?.formattedDate;
    },
    setListingDetail: (state, action) => {
      state.current_list = action.payload;
    },
  },
});

export const { setListing, setListingDetail } = listingSlice.actions;

export default listingSlice.reducer;
