import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults } from '../helpers/oocss';

const {
  colors: { color },
  typography: { fontSize, fontWeight, letterSpacings },
  spacing,
  BUTTON
} = baseTheme;

const Button = styled.button`
  ${textMixing};
  ${basicDefaults};
  background: ${({ bg, type }) => (type ? BUTTON.types[type].bg : bg)};
  border: ${({ border, type }) =>
    type ? BUTTON.types[type].border : `1px solid ${border}`};
  border-radius: ${({ borderR }) => borderR};
  box-shadow: ${({ btnShadow }) => btnShadow};
  color: ${({ color, type }) => (type ? BUTTON.types[type].color : color)};
  font-size: ${({ fSize }) => fSize};
  cursor: pointer;
  outline: none;
  transition: ${({ transition }) => transition};

  &:hover {
    box-shadow: ${({ btnShadowHover }) => btnShadowHover};
  }

  &:active {
    box-shadow: ${({ btnShadowActive }) => btnShadowActive};
    background: ${({ bgActive, type }) =>
      type ? BUTTON.types[type].bg : bgActive};
    border: ${({ borderActive, type }) =>
      type ? BUTTON.types[type].border : `1px solid ${borderActive}`};
  }
`;

Button.defaultProps = {
  p: spacing.xs,
  w: BUTTON.btnWidth,
  fSize: fontSize.md,
  h: BUTTON.btnHeight,
  fWeight: fontWeight.normal,
  bg: BUTTON.btnBackground,
  color: color.primary.white,
  letterS: letterSpacings.px,
  border: BUTTON.btnBorderColor,
  borderR: BUTTON.btnBorderRadius,
  bgActive: BUTTON.btnBackgroundActive,
  btnShadow: BUTTON.btnBoxShadowInitial,
  transition: BUTTON.transitions.linear,
  borderActive: BUTTON.btnBorderColorActive,
  btnShadowActive: BUTTON.btnBoxShadowActive,
  btnShadowHover: BUTTON.hover.btnBoxShadowHover
};

export default Button;