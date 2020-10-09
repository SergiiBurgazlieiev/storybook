// import React from 'react';
// import { NavSC } from '../../ui/navSC/NavSC';

// const Nav = ({ children, ...rest }) => <NavSC {...rest}>{children}</NavSC>;
// export default Nav;
import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { flexMixing, basicDefaults } from '../helpers/oocss';

const { spacing } = baseTheme;

const Nav = styled.nav`
  ${flexMixing};
  ${basicDefaults};
  background-color: ${({ bg }) => bg};
`;

Nav.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.auto
};

export default Nav;
