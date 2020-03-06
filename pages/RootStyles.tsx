import styled from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export const StyledHtml = styled.html`
  font-size: 62.5%;
`;
export const StyledBody = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Gilroy;
`;

export const StyledMain = styled(Main)`
  font-size: 62.5%;
`;

// import { createGlobalStyle } from "styled-components"

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: red;
//   }
// `
