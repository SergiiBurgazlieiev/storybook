import React from 'react';
import { ImageSC } from './ImageSC';

const DensityImg = ({ img2x, img1x, altText, ...rest }) => (
  <ImageSC {...rest} srcSet={`${img1x} 1x, ${img2x} 2x`} alt={altText} />
);
export default DensityImg;
