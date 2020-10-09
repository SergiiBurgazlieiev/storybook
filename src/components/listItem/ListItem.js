import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults, flexMixing } from '../helpers/oocss';

const {
  typography: { fonts, FONTSIZE, LETTER_SPACING, LINE_HEIGHT, FONT_WEIGHT }
} = baseTheme;

const ListItem = styled.li`
  position: relative;
  ${textMixing};
  ${basicDefaults};
  ${flexMixing};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
`;

// DEFAULT PROPS
ListItem.defaultProps = {
  fSize: FONTSIZE.desktop[4], // 16px
  fFamily: fonts.body, // font-family (body font)
  fWeight: FONT_WEIGHT.normal, // 400
  lHeight: LINE_HEIGHT.desktop, // 1.5
  lSpacing: LETTER_SPACING.px1 // 1px
};

export default ListItem;
