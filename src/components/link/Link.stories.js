import React from 'react';
import Link from './Link';

export default {
  title: 'Links/Link',
  component: Link
};

export const ExternalLink = () => (
  <Link href='https://facebook.com'>Facebook</Link>
);
