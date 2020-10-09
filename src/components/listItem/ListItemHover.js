import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import  ListItem from './ListItem';

const {
  colors: { color },
  transitions
} = baseTheme;

const ListItemHover = styled(ListItem)`
  background-size: 200% 100%;
  background-image: ${({ colorBgImg }) =>
    colorBgImg
      ? `linear-gradient(to right, transparent 50%, ${colorBgImg} 50%)`
      : `linear-gradient(to right, transparent 50%, ${color.primary.santorini} 50%)`};
  transition: ${transitions.linearSlow};

  &:hover {
    background-position: -100% 0;
    color: ${({ colorHover }) => colorHover};
  }
`;

export default ListItemHover;
