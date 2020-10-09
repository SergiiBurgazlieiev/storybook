import { css } from 'styled-components';

export const textMixing = css`
  font-weight: ${({ fWeight }) => fWeight};
  font-family: ${({ fFamily }) => fFamily};
  letter-spacing: ${({ lSpacing }) => lSpacing};
  text-transform: ${({ tTransform }) => tTransform};
  text-align: ${({ tAlign }) => tAlign};
  line-height: ${({ lHeight }) => lHeight};
  font-size: ${({ fSize }) => fSize};
  text-justify: ${({ tJustify }) => tJustify};
  text-indent: ${({ tIndent }) => tIndent};
  font-style: ${({ fStyle }) => fStyle};
  word-spacing: ${({ wSpacing }) => wSpacing};
`;

export const basicDefaults = css`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  border: ${({ border }) => border};
  border-radius: ${({ borderR }) => borderR};
`;

export const flexMixing = css`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justContent }) => justContent};
  justify-items: ${({ justItems }) => justItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDir }) => flexDir};
  flex: ${({ flex }) => flex};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;

export const imageMixing = css`
  object-fit: ${({ objFit }) => objFit};
  object-position: ${({ objPosition }) => objPosition};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  clip-path: ${({ clipPath }) => clipPath};
`;
