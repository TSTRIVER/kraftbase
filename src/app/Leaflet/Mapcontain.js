import styles from "./Mapcontain.module.css";
import dynamic from 'next/dynamic';
import { useMemo } from "react";

export default function Mapcontain() {
  const Map = useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className={styles.demo}>
      <Map />
    </div>
  );
}
