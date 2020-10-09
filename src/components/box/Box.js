import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults, flexMixing } from '../helpers/oocss';

const {
  auto,
  typography: { fontSize, fonts, fontWeight, lineHeights, letterSpacings },
  spacing,
  base
} = baseTheme;

export const Box = styled.div`
  ${textMixing};
  ${basicDefaults};
  ${flexMixing};
  font-size: ${({ fSize }) => fSize};
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

Box.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.full,
  display: 'block',
  maxW: auto,
  minW: auto,
  maxH: auto,
  minH: auto,
  overflow: 'visible',
  fSize: fontSize.md,
  fFamily: fonts.body,
  fWeight: fontWeight.normal,
  lHeight: lineHeights.base,
  letterS: letterSpacings.normal,
  textA: base.initial,
  textT: base.initial
};

export default Box;