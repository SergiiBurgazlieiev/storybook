import React from 'react';
import UnorderedList from './UnorderedList';
import ListItemHover from '../listItem/ListItemHover';

export default {
  title: 'Text Content/UnorderedList',
  component: UnorderedList
};

export const BasicUnorderedList = () => (
  <UnorderedList w='30%'>
    <ListItemHover colorHover='#F3F3F3' p='.5rem' m='2px 0'>
      One
    </ListItemHover>
    <ListItemHover colorHover='#F3F3F3' p='.5rem' m='2px 0'>
      Two
    </ListItemHover>
    <ListItemHover colorHover='#F3F3F3' p='.5rem' m='2px 0'>
      Two
    </ListItemHover>
    <ListItemHover colorHover='#F3F3F3' p='.5rem' m='2px 0'>
      Two
    </ListItemHover>
  </UnorderedList>
);
