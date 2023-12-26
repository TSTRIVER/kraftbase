"use client";
import React, { useState, useEffect, use } from "react";
import styles from "./Listings.module.css";
import { useSelector } from "react-redux";

const Lists = () => {
  const { name, current_list } = useSelector((state) => state.listing);

  const [filteredList, setFilteredList] = useState(current_list);

  const [btnInd, setBtnInd] = useState(-1);

  useEffect(() => {
    setFilteredList(current_list);
  }, [current_list]);

  let filterArr = ["Price", "Guests", "Ratings"];

  const handleSort = (index) => {
    let sortedList;
    setBtnInd(index);

    switch (index) {
      case 0:
        sortedList = [...current_list].sort((a, b) => a.price - b.price);
        break;
      case 1:
        sortedList = [...current_list].sort((a, b) => b.guests - a.guests);
        break;
      case 2:
        sortedList = [...current_list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedList = current_list;
        break;
    }

    setFilteredList(sortedList);
  };
  return (
    <div className={styles.listcont}>
      <div className={styles.heading}>
        <h2 className={styles.h2}>{name} Listings</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100"
            height="100"
          >
            <circle cx="50" cy="50" r="20" fill="#1b3131" />
            <polygon
              points="35,40 65,40 55,55 55,60 45,65 45,55"
              fill="#a9d41e"
            />
          </svg>
          {filterArr.map((ele, index) => (
            <button
              key={index}
              style={{
                fontWeight: "bold",
                color: btnInd === index ? "green" : "white",
                marginRight: "1em",
                outline: "none",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              onClick={() => handleSort(index)}
            >
              {ele}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {filteredList &&
          filteredList.map((item, index) => {
            return (
              <div className={styles.childcont} key={index}>
                <p>
                  <b>Name:</b> {item?.name}
                </p>
                <p>
                  <b>Price:</b> ₹ {item?.price} per night
                </p>
                <p>
                  <b>Rating:</b> {item?.rating}/10
                </p>
                <p>
                  <b>Accomodation:</b> {item?.guests}
                </p>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Lists;
