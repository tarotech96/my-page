import React from 'react'
import PropsType from 'prop-types'
import ImageUploader from 'react-images-upload'

UploadImage.propTypes = {
  imgExtension: PropsType.array,
  setImage: PropsType.func,
  buttonText: PropsType.string
}

function UploadImage({ imgExtension, setImage, buttonText }) {
  const onUploadFile = (files, imgUrls) => {
    setImage(imgUrls[0])
  }

  return (
    <ImageUploader
      withIcon={true}
      buttonText={buttonText}
      onChange={onUploadFile}
      imgExtension={imgExtension}
      maxFileSize={5242880}
    />
  )
}

export default UploadImage
