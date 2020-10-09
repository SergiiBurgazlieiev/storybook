import React from 'react';
import Button from './Button';
import Center from '../center/Center';

export default {
  title: 'Form/Button',
  component: Button,
  decorators: [story => <Center>{story()}</Center>]
};

export const Primary = () => <Button type='primary'>Primary</Button>;
export const Success = () => <Button type='success'>Success</Button>;
export const Danger = () => <Button type='danger'>Danger</Button>;
export const Warning = () => <Button type='warning'>Warning</Button>;
export const Custom = () => (
  <Button
    bg='#DEAAFF'
    color='#ffffff'
    border='#DEAAFF'
    bgActive='#E2AFFF'
    borderActive='#E2AFFF'
  >
    Custom
  </Button>
);
