"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import Mapcontain from "./Leaflet/Mapcontain";
import { setListing } from "./Redux/listingSlice";
import { useDispatch } from "react-redux";
import Lists from "./Listings/Lists";

export default function Search() {
  const [step, setStep] = useState(0);
  let [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setWidth(window?.innerWidth);

    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const onNext = () => {
    if (!step && !location) {
      return toast.error("Please enter a city before proceeding");
    }
    if (!step) {
      setLocation((prev) => prev.toLowerCase());
    }
    if (step === 1 && !startDate) {
      return toast.error("Please select a date before proceeding");
    }
    if (step === 2) {
      const datePickerDate = startDate;
      const datePickerObject = new Date(datePickerDate);

      const year = datePickerObject.getUTCFullYear();
      const month = `0${datePickerObject.getUTCMonth() + 1}`.slice(-2);
      const day = `0${datePickerObject.getUTCDate()}`.slice(-2);
      const formattedDate = `${year}-${month}-${day}`;
      dispatch(setListing({ location, formattedDate }));
    }
    if (step === 3) {
      window.location.reload();
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <>
      <Toaster />
      <div className={styles.bgcont}></div>
      <div className={styles.searchcont}>
        <input
          className={styles.search}
          autoFocus
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter City Name"
          name="location"
          value={location}
        ></input>
        <div
          className={`${styles.load} ${
            !step ? styles.pending : styles.complete
          }`}
        ></div>
        {!step ? (
          <Image src="/calendar.png" width={60} height={60} alt="calendar" />
        ) : (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        )}
        <div
          className={`${styles.load} ${
            step <= 1 ? styles.pending : styles.complete
          }`}
        ></div>
        <button
          className={`${step <= 1 ? styles.next : styles.sub} ${styles.submit}`}
          onClick={() => onNext()}
        >
          {!step
            ? "Next"
            : step === 1
            ? "Next"
            : step === 2
            ? "Submit"
            : "Reset"}
        </button>
      </div>
      <div className={styles.listingscont}>
        {width > 1100 ? (
          <>
            <Mapcontain />
            <Lists />
          </>
        ) : (
          <>
            <Lists />
            <Mapcontain />
          </>
        )}
      </div>
    </>
  );
}
