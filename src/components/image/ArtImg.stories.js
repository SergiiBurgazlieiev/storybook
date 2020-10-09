import React from 'react';
import ArtImg from './ArtImg';
import mobHigh from '../../assets/imgs/high-res-mob.jpg';
import mobLow from '../../assets/imgs/low-res-mob.jpg';
import highRes from '../../assets/imgs/high-res.jpg';
import lowRes from '../../assets/imgs/low-res.jpg';

export default {
  title: 'Media/ArtImg',
  component: ArtImg
};

export const ArtDirectionImage = () => (
  <ArtImg
    img1x={lowRes}
    img2x={highRes}
    imgMob1x={mobLow}
    imgMob2x={mobHigh}
    altText='Mountain'
    media='600px'
  />
);
