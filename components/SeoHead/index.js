import Head from 'next/head';

function SeoHead({ title = 'AutoTech' }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default SeoHead;
