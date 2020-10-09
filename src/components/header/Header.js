import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { flexMixing, basicDefaults } from '../helpers/oocss';

const { spacing, base } = baseTheme;

const Header = styled.header`
  ${flexMixing};
  ${basicDefaults};
  background-color: ${({ bg }) => bg};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  z-index: ${({ zIndex }) => zIndex};
`;

Header.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.full,
  position: base.fixed,
  top: spacing[0],
  left: spacing[0]
};

export default Header;
