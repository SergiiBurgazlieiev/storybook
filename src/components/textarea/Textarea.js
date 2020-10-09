import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults } from '../helpers/oocss';
import { inputAndTextareaStyles } from '../input/Input';

const {
  typography: { fontSize, fontWeight, fonts, lineHeights },
  spacing,
  base,
  INPUT,
  transitions
} = baseTheme;

const Textarea = styled.textarea`
  ${textMixing};
  ${basicDefaults};
  ${inputAndTextareaStyles};
`;

Textarea.defaultProps = {
  w: base.auto,
  h: '10rem',
  p: spacing.xs,
  fFamily: fonts.body,
  fWeight: fontWeight.normal,
  fSize: fontSize.lg,
  lineH: lineHeights.base,
  textA: base.initial,
  textT: base.initial,
  borderR: spacing[1],
  letterS: spacing.px,
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

export default Textarea;
