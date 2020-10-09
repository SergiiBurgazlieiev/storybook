import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { flexMixing, basicDefaults } from '../helpers/oocss';

const { spacing, BORDER_RADIUS, SHADOWS } = baseTheme;

const Form = styled.form`
  ${flexMixing};
  ${basicDefaults};
  background-color: ${({ bg }) => bg};
  box-shadow: ${({ boxShadow }) => boxShadow};
  box-sizing: border-box;
`;

Form.defaultProps = {
  h: spacing.sizes.height.auto,
  p: spacing[5],
  display: 'flex',
  alignitems: 'center',
  flexDir: 'column',
  borderR: BORDER_RADIUS.formBorderRadius,
  boxShadow: SHADOWS.formShadow
};

export default Form;
