import Head from 'next/head';
import { description, name } from "package.json";
import type { FC } from 'react';

const Metadata: FC = () => (
  <Head>
    <title>{ name }</title>
    <meta name="description" content={ description } />
  </Head>
);

export default Metadata;
