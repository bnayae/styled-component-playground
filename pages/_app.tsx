import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

// tslint:disable-next-line: no-default-export
export default MyApp;
