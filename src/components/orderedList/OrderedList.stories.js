import React from 'react';
import OrderedList from './OrderedList';
import ListItem from '../listItem/ListItem';

export default {
  title: 'Text Content/OrderedList',
  component: OrderedList
};

export const OrderedListBasic = () => (
  <OrderedList>
    <ListItem>One</ListItem>
    <ListItem>Two</ListItem>
  </OrderedList>
);