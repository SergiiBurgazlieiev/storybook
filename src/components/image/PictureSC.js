import styled from 'styled-components';
import { flexMixing, basicDefaults, imageMixing } from '../helpers/oocss';

export const PictureSC = styled.picture`
  ${basicDefaults};
  ${flexMixing};
  ${imageMixing};
`;
