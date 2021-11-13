import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='FRONTEND developer looking for a job Cluj-Napoca'
          />
          <meta
            name='keywords'
            content='frontend developer job ,Cluj-Napoca web reactjs, react, js'
          />
        </Head>
        <body className='bg-gradient-to-r from-sun to-crayola dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
