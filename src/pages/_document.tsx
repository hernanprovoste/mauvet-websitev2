import { createGetInitialProps } from '@mantine/next'
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

const getInitialProps = createGetInitialProps();

class MyDocument extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;