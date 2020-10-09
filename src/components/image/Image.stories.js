import React from 'react';
import Image from './Image';
import Photo from '../../assets/imgs/high-res.jpg';

export default {
  title: 'Media/Image',
  component: Image
};

export const BasicImage = () => <Image img={Photo} altText='Nature' />;
