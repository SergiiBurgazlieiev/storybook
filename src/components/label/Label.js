import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults } from '../helpers/oocss';

const {
  typography: { fonts, FONTSIZE },
  spacing
} = baseTheme;

const Label = styled.label`
  ${textMixing};
  ${basicDefaults};
  background: ${({ bg }) => bg};
  color: ${({ color, theme }) => (color ? color : theme.text)};
  z-index: ${({ zIndex }) => zIndex};
`;

Label.defaultProps = {
  fFamily: fonts.body,
  lSpacing: spacing.px,
  fSize: FONTSIZE.desktop[4]
};

export default Label;
