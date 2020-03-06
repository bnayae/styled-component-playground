import React from 'react';
import { StyledButton, StyledTitle, StyledSection } from '../../Toolkit';
import { CompB } from '../comp-b/CompB';

export const CompA = () => {
  return (
    <StyledSection>
      <StyledTitle>Comp A</StyledTitle>
      <CompB />
      <StyledButton>Component A</StyledButton>
      <StyledTitle>Some Text</StyledTitle>
    </StyledSection>
  );
};
