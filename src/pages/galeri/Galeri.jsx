/** @format */

import React, { useEffect, useState } from "react";
import useGallery from "../../app/stores/galeri";
import { FaWindowClose } from "react-icons/fa";
import "./style.css";

const Galeri = () => {
  const { galleries, getGalleries } = useGallery((state) => state);

  const [model, setModel] = useState(false);
  const [tmpImg, setTmpImg] = useState(null);

  const getImg = (image) => {
    setTmpImg(image);
    setModel(true);
  };

  useEffect(() => {
    getGalleries();
  }, []);

  const showImages = () => {
    return galleries
      .map((gallery, index) => {
        return (
          <img
            key={index}
            src={gallery.image}
            className="w-60 gallery__items"
            alt="gallery"
            onClick={() => getImg(gallery.image)}
          />
        );
      })
      .reverse();
  };

  return (
    <div>
      <div className="mb-3">
        <h3 className="text-2xl text-center font-bold">Galeri</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className={model ? "model open" : "model"}>
          <img src={tmpImg} alt="" />
          <FaWindowClose onClick={() => setModel(false)} />
        </div>
        {showImages()}
      </div>
    </div>
  );
};

export default Galeri;
