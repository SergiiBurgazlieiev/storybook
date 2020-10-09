import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Inputs',
  component: Input
};

export const TextInput = () => <Input type='text' placeholder='text...' />;
export const EmailInput = () => <Input type='email' placeholder='email...' />;
export const PasswordInput = () => (
  <Input type='password' placeholder='password...' />
);
export const TelInput = () => <Input type='tel' placeholder='tel...' />;
export const UrlInput = () => <Input type='url' placeholder='url...' />;
export const SearchInput = () => (
  <Input type='search' placeholder='search...' borderR='5rem' p='1rem 2rem' />
);
