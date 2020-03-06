import styled from 'styled-components';
import { StyledSection } from '.';

// Scoped styles
export const StyledSectionAltColor = styled(StyledSection)`
  @media (min-width: 768px) {
    border: solid 0.1rem;
    background: mediumseagreen;
    border-color: #990022;
  }
`;
