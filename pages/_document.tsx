/* tslint:disable */
import Document, { Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { StyledBody, StyledHtml, StyledMain } from './RootStyles';
/* tslint:enable */
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <StyledHtml>
        <Head />
        <link rel="stylesheet" href="/Gilroy/stylesheet.css" />
        <StyledBody>
          <StyledMain />
          <NextScript />
        </StyledBody>
      </StyledHtml>
    );
  }
}

// tslint:disable-next-line: no-default-export
export default MyDocument;
