import React from 'react';

const ImageList = (props) => {
  // From the images, we can destructure out the attributes we need: description, id and urls
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
