import React from 'react';
import ListItemHover from './ListItemHover';

export default {
  title: 'Text Content/ListItemHoverable',
  component: ListItemHover
};

export const HoverableLi = () => (
  <ListItemHover colorHover='#F3F3F3' p='.5rem'>Hover Me</ListItemHover>
);
