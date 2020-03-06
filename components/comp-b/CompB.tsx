import React from 'react';
import {
  StyledTitle,
  StyledContentRem,
  StyledContentEm,
  StyledButton,
  StyledSection,
  StyledTitleAnimated,
  StyledSectionAltColor,
  StyledPassword,
} from '../../Toolkit';

export const CompB = () => {
  return (
    <StyledSectionAltColor>
      <StyledTitleAnimated>Comp B</StyledTitleAnimated>
      <StyledContentRem>Using rem unit (relative to root)</StyledContentRem>
      <StyledContentEm>Using em unit (relative to parent)</StyledContentEm>
      <StyledButton as="a" href="https://www.weknow.network/">
        Weknow
      </StyledButton>
      <p>Some text</p>
      <StyledPassword />
    </StyledSectionAltColor>
  );
};
