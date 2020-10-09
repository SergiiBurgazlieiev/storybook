import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { flexMixing, basicDefaults } from '../helpers/oocss';

const { spacing } = baseTheme;

const OrderedList = styled.ol`
  ${flexMixing};
  ${basicDefaults};
  background-color: ${({ bg }) => bg};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;

OrderedList.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.auto
};

export default OrderedList;
