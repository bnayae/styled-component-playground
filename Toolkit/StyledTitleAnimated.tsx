import styled, { css, keyframes } from 'styled-components';
import { StyledTitle } from './StyledTitle';

const animation = keyframes`
  0% {
    opacity: 0.2;
  }

  100 {
    opacity: 1;
  }
`;

const animationRule = css`
  ${animation} 7s infinite alternate;
`;

export const StyledTitleAnimated = styled(StyledTitle)`
  animation: ${animationRule};
`;
