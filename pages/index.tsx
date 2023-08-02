/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  let [imageLoaded, setImageLoaded] = useState(false);

  const 이미지로딩_완료 = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imageLoaded) return;
    let 이미지 = new Image();
    이미지.src = "/assets/images/poi.png";
    이미지.addEventListener("load", 이미지로딩_완료);
  }, [imageLoaded]);

  if (!imageLoaded) return <></>;
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.imgcont}>
          <img
            src={"/assets/images/poi.png"}
            alt="poi logo"
            onLoad={이미지로딩_완료}
            className={styles.img}
          />
        </div>
        <div className={styles.border}>
          <div className={styles.bord}></div>
        </div>
        <div className={styles.text}>
          <div className={styles.wa}>We are</div>
          <div className={styles.tp}>&lt;Team poi /&gt;</div>
        </div>
      </div>
    </>
  );
}
