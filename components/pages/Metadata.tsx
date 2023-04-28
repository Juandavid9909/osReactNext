import Head from 'next/head';
import { description, name } from "package.json";

const Metadata: React.FC = () => (
  <Head>
    <title>{ name }</title>
    <meta name="description" content={ description } />
  </Head>
);

export default Metadata;
