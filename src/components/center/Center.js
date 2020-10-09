import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Center;
