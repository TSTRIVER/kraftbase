"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Mapcontain.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { fetchListings } from "../util";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setListingDetail } from "../Redux/listingSlice";

const MyMap = () => {
  const name = useSelector((state) => state.listing?.name);
  const date = useSelector((state) => state.listing?.date);
  const [listings, setListings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchListings();
        setListings(data);
      } catch (error) {
        return toast.error("Something went wrong");
      }
    };

    fetchData();
  }, [name, date]);

  const keyExists = name in listings && Array.isArray(listings[name]);
  if (keyExists) {
    dispatch(setListingDetail(listings[name]));
  }

  return (
    <>
      <Toaster />
      <MapContainer
        center={
          !keyExists
            ? [19.1655, 73.0751]
            : [listings[name][0]?.lat, listings[name][0]?.lon]
        }
        zoom={keyExists ? 9 : 2}
        scrollWheelZoom={true}
        className={styles.mapcont}
        key={new Date().getTime()}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        {listings &&
          keyExists &&
          listings[name]?.map((item, index) => (
            <Marker key={index} position={[item.lat, item.lon]}>
              <Popup className={styles.popups}>
                <h2>Name: {item?.name}</h2>
                <h2>Price: ₹ {item?.price}</h2>
                <h2>Rating: {item?.rating}/10</h2>
                <h2>Accomodation: {item?.guests}</h2>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
};

export default MyMap;
