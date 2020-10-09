import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { textMixing, basicDefaults } from '../helpers/oocss';

const {
  colors: {
    links,
    color: { primary }
  },
  base
} = baseTheme;

const Link = styled.a`
  ${textMixing};
  ${basicDefaults};
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  text-decoration: ${({ textDecor }) => textDecor};

  &:active {
    color: ${({ activeColor }) => activeColor};
  }

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

Link.defaultProps = {
  textDecor: base.none,
  color: primary.santorini,
  activeColor: links.activeHover,
  hoverColor: links.activeHover
};

export default Link;
