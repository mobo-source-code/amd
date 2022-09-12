import Document, { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    // const Chat = dynamic(
    //     () => {
    //       Kommunicate.init("1dee383a46e76662a7bcd71893d984010" , {"popupWidget":true,"automaticChatOpenOnNavigation":true})
    //   }, 
    //     {ssr: false}
    //   );
    return { ...initialProps }
  }
  render() {
    return (
      <Html class="scroll-smooth">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument