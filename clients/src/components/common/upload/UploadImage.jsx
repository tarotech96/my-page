import React from "react";
import PropsType from "prop-types";
import ImageUploader from "react-images-upload";

UploadImage.propTypes = {
  imgExtension: PropsType.array,
  setImage: PropsType.func,
};

function UploadImage({ imgExtension, setImage }) {
  const onUploadFile = (files, imgUrls) => {
    setImage(imgUrls[0]);
  };
  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={onUploadFile}
      imgExtension={imgExtension}
      maxFileSize={5242880}
    />
  );
}

export default UploadImage;
