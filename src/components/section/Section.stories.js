import React from 'react';
import Section from './Section';
import Text from '../text/Text';

export default {
  title: 'Content sectioning/Section',
  component: Section
};

export const BaseSection = () => (
  <Section bg='#D6E2E9' h='100vh' p='3rem'>
    <Text type='p'>
      It is base section component for content sectioning!
      This section applied bg='#D6E2E9' h='100vh' p='3rem' PROPS
    </Text>
  </Section>
);
