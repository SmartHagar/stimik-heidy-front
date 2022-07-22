/** @format */

import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import useGallery from "../../app/stores/galeri";

const Galeri = () => {
  const { galleries, getGalleries } = useGallery((state) => state);

  useEffect(() => {
    getGalleries();
    console.log(galleries);
  }, []);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }

  const showImages = () => {
    return galleries
      .map((gallery, index) => {
        return (
          <img
            key={index}
            src={gallery.image}
            className="w-60"
            onClick={() => openLightboxOnSource(index)}
          />
        );
      })
      .reverse();
  };

  const lightBox = () => {
    return (
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        sources={galleries.map((gallery) => gallery.image)}
        customControls={[
          <button
            key="close"
            className="close"
            onClick={() => setLightboxController({ toggler: false })}
          >
            &times;
          </button>,
        ]}
      />
    );
  };

  return (
    <div>
      <div className="mb-3">
        <h3 className="text-2xl text-center font-bold">Galeri</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {showImages()}
        {lightBox()}
      </div>
    </div>
  );
};

export default Galeri;
