import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults, flexMixing } from '../helpers/oocss';

const { auto, spacing } = baseTheme;

const Main = styled.div`
  ${textMixing};
  ${basicDefaults};
  ${flexMixing};
  z-index: ${({ zIndex }) => zIndex};
  position: ${({ position }) => position};
  max-width: ${({ maxW }) => maxW};
  min-width: ${({ minW }) => minW};
  max-height: ${({ maxH }) => maxH};
  min-height: ${({ minH }) => minH};
  overflow: ${({ overflow }) => overflow};
  background-color: ${({ bg, theme }) => (bg ? bg : theme.body)};
  color: ${({ color, theme }) => (color ? color : theme.text)};
`;

Main.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.full,
  display: 'block',
  maxW: auto,
  minW: auto,
  maxH: auto,
  minH: auto,
  overflow: 'visible'
};
export default Main;
