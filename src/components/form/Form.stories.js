import React from 'react';
import Form from './Form';
import {
  TextInput,
  EmailInput,
  PasswordInput
} from '../input/Input.stories';
import { TextareaBox } from '../textarea/Textarea.stories';

export default {
  title: 'Form/Form',
  component: Form
};

export const BaseForm = () => (
  <Form w='50%' borderR='5px'>
    <TextInput />
    <EmailInput />
    <PasswordInput />
    <TextareaBox w='100%' />
  </Form>
);

// export const CustomForm = () => (
//   <Form w='50%' bg='rgba(119, 141, 169,1)' borderR='none'>
//     <TextInput
//       type='text'
//       placeholder='text...'
//       m='1rem 0'
//       bg='rgba(65, 90, 119,.5)'
//       color='#f0efeb'
//     />
//     <EmailInput type='emil' placeholder='emsil...' />
//     <PasswordInput type='password' placeholder='password...' />
//     <TextareaBox
//       w='auto'
//       m='1rem 0 0 0'
//       bg='rgba(65, 90, 119,.5)'
//       color='#f0efeb'
//     />
//   </Form>
// );
