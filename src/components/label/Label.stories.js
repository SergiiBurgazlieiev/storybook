import React from 'react';
import Label from './Label';
import Form from '../form/Form';
import Input from '../input/Input';

export default {
  title: 'Form/Label',
  compoent: Label
};

export const BasicLabel = () => <Label>Label</Label>;
export const LabelCustom = () => (
  <Form w='100%'>
    <Label for='name' fSize='1rem' p='3px 0'>
      Name
    </Label>
    <Input type='text' id='name' />
  </Form>
);