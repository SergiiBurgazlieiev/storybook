import React from 'react';
import { PictureSC } from './PictureSC';
import { ImageSC } from './ImageSC';

const ArtImg = ({media, img1x, img2x, imgMob2x, imgMob1x, altText, ...rest}) => (
  <PictureSC {...rest}>
    <source srcSet={`${imgMob1x} 1x, ${imgMob2x} 2x`} media={`(max-width:${media})`}/>
    <ImageSC srcSet={`${img1x} 1x, ${img2x} 2x`} alt={altText} {...rest} />
  </PictureSC>
);

export default ArtImg;
