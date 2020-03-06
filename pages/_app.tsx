import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

// tslint:disable-next-line: no-default-export
export default MyApp;
