import React from 'react';
import { ImageSC } from './ImageSC';

const Image = ({ img, altText, ...rest }) => (
  <ImageSC src={img} alt={altText} {...rest} />
);
export default Image;

