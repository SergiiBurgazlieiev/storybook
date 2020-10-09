import styled, { css } from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults } from '../helpers/oocss';

const {
  spacing,
  typography: { fontSize, fontWeight },
  INPUT,
  base,
  transitions
} = baseTheme;

export const inputAndTextareaStyles = css`
  z-index: ${({ zIndex }) => zIndex};
  border: ${({ border }) => border};
  border-radius: ${({ borderR }) => borderR};
  padding: ${({ p, pY, pX }) =>
    p
      ? p
      : pY
      ? `${pY} 0`
      : pX
      ? `0 ${pX}`
      : pX && pX
      ? `${pY} ${pX}`
      : `${spacing[1]} ${spacing[2]}`};
  background-color: ${({ bg }) => bg};
  font-size: ${({ fSize }) => fSize};
  color: ${({ color }) => color};
  outline: ${({ outline }) => outline};
  box-shadow: ${({ boxShadow }) => boxShadow};
  transition: ${({ transition }) => transition};

  &::placeholder {
    letter-spacing: ${({ lSpacing }) => lSpacing};
    color: ${({ placeholderColor }) => placeholderColor};
  }

  &:focus {
    border: ${({ borderOnFocus }) => borderOnFocus};
    box-shadow: ${({ boxShadowOnFocus }) => boxShadowOnFocus};
  }
`;

const Input = styled.input`
  ${textMixing};
  ${basicDefaults};
  ${inputAndTextareaStyles};
`;

Input.defaultProps = {
  borderR: spacing[1],
  h: spacing[10],
  lSpacing: spacing.px,
  fSize: fontSize.lg,
  fWeight: fontWeight.normal,
  outline: base.none,
  border: base.none,
  bg: INPUT.inputBackColor,
  boxShadow: INPUT.inputBoxShadow,
  placeholderColor: INPUT.inputPlaceholderColor,
  color: INPUT.inputColor,
  borderOnFocus: INPUT.inputBorderFocused,
  boxShadowOnFocus: INPUT.inputBoxShadowFocused,
  transition: transitions.linear
};

export default Input;
