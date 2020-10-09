import React from 'react';
import Footer from './Footer';
import UnorderedList from '../unorderedList/UnorderedList';
import ListItem from '../listItem/ListItem';
import Section from '../section/Section';

export default {
  title: 'Content sectioning/Footer',
  component: Footer
};

export const FooterComponent = () => (
  <Section w='100%' h='100vh' position='relative' bg='#D6E2E9'>
    Section component with a relative position and footer is on the bottom
    <Footer
      bg='#BCD4E6'
      bottom='0'
      display='flex'
      justContent='center'
      alignItems='center'
    >
      <UnorderedList
        display='flex'
        justContent='center'
        alignItems='center'
        w='50%'
      >
        <ListItem m='0 2rem'>Contact Us</ListItem>
        <ListItem m='0 2rem'>Blog</ListItem>
      </UnorderedList>
    </Footer>
  </Section>
);
