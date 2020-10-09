import styled from 'styled-components';
import { baseTheme } from '../styles/baseTheme';
import { flexMixing, basicDefaults } from '../helpers/oocss';

const { spacing } = baseTheme;

const Section = styled.section`
  ${flexMixing};
  ${basicDefaults};
  background-color: ${({ bg }) => bg};
  position: ${({ position }) => position};
`;

Section.defaultProps = {
  h: spacing.sizes.height.auto,
  w: spacing.sizes.width.full
};

export default Section;
