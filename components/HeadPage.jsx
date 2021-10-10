import Head from 'next/head';

const HeadPage = ({ title = 'CMS' }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width"
        name="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&amp;display=swap"
        rel="stylesheet"></link>
    </Head>
  );
};

export default HeadPage;
