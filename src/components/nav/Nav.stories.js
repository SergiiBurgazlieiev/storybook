import React from 'react';
import Nav from './Nav';
import UnorderedList from '../unorderedList/UnorderedList';
import ListItemHover from '../listItem/ListItemHover';

export default {
  title: 'Content sectioning/Nav',
  component: Nav
};

const items = [
  'Features',
  'Industries',
  'Pricing',
  'Resources',
  'Blog',
  'About'
];

export const Navigation = () => (
  <Nav>
    <UnorderedList>
      {items.map((el, i) => (
        <ListItemHover key={i}>{el}</ListItemHover>
      ))}
    </UnorderedList>
  </Nav>
);

export const NavigationCustom = () => (
  <Nav p='2rem' bg='#431259' borderR='.5rem' w='30%'>
    <UnorderedList w='50%'>
      {items.map((el, i) => (
        <ListItemHover
          key={i}
          m='.5rem 0'
          colorHover='#CCDCFF'
          p='0 .5rem'
          colorBgImg='#805EBF'
          color='#E6F2FF'
        >
          {el}
        </ListItemHover>
      ))}
    </UnorderedList>
  </Nav>
);
