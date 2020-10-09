// import React from 'react';
// import { TextSC } from '../../ui/typography/TextSC';

// const Text = ({ type, children, ...rest }) => (
//   <TextSC type={type} {...rest}>
//     {children}
//   </TextSC>
// );

// export default Text;

import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { basicDefaults } from '../helpers/oocss';

const {
  base,
  spacing,
  typography: { fonts, fontSize, fontWeight, lineHeights, letterSpacings }
} = baseTheme;

const Text = styled.p`
  ${basicDefaults};
  font-weight: ${({ fWeight }) => fWeight};
  font-family: ${({ fFamily }) => fFamily};
  font-style: ${({ fStyle }) => fStyle};
  font-size: ${({ fSize, type }) => (type ? fontSize[type] : fSize)};
  text-transform: ${({ tTransform }) => tTransform};
  text-justify: ${({ tJustify }) => tJustify};
  text-indent: ${({ tIndent }) => tIndent};
  text-align: ${({ tAlign }) => tAlign};
  line-height: ${({ lHeight }) => lHeight};
  letter-spacing: ${({ lSpacing }) => lSpacing};
  word-spacing: ${({ wSpacing }) => wSpacing};
  color: ${({ color }) => color};
`;

// DEFAULT PROPS
Text.defaultProps = {
  w: spacing.sizes.width.full,
  h: base.auto,
  fFamily: fonts.body,
  fWeight: fontWeight.normal,
  lHeight: lineHeights.base,
  lSpacing: letterSpacings.normal,
  tAlign: base.initial,
  tTransform: base.initial
};

export default Text;
