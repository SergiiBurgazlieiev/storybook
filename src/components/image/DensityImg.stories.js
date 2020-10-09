import React from 'react';
import DensityImage from './DensityImg';
import highRes from '../../assets/imgs/high-res.jpg';
import lowRes from '../../assets/imgs/low-res.jpg';


export default {
  title: 'Media/DensityImg',
  component: DensityImage
};

export const DensitySwitchingImg = () => (
  <DensityImage altText='Nature' img2x={highRes} img1x={lowRes} />
);

export const DensitySwitchingImgCustom = () => (
  <DensityImage
    altText='Nature'
    img2x={highRes}
    img1x={lowRes}
    clipPath='circle()'
  />
);
