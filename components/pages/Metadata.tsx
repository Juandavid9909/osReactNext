import Head from 'next/head';
import { description as packageDescription, name as packageName } from "package.json";
import type { FC } from 'react';
import type { MetadataProps } from 'types/components/pages/Metadata';

const Metadata: FC<MetadataProps> = ({ description = packageDescription, title = packageName }) => (
  <Head>
    <title>{ title }</title>
    <meta name="description" content={ description } />
  </Head>
);

export default Metadata;
