import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { flexMixing, basicDefaults } from '../helpers/oocss';

const { spacing, base } = baseTheme;

const UnorderedList = styled.ul`
  ${flexMixing};
  ${basicDefaults};
  background-color: ${({ bg }) => bg};
  box-shadow: ${({ boxShadow }) => boxShadow};
  list-style: ${({ listStyle }) => listStyle};
`;

UnorderedList.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.auto,
  listStyle: base.none
};

export default UnorderedList;
