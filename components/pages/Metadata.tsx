import Head from 'next/head';
import packageJson from "package.json";

const { description, name } = packageJson;

const Metadata = (): JSX.Element => (
  <Head>
    <title>{ name }</title>
    <meta name="description" content={ description } />
  </Head>
);

export default Metadata;
