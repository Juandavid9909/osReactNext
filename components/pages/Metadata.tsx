import Head from 'next/head';

import type { FC } from 'react';
import type { MetadataProps } from 'types/components/pages/Metadata';

const Metadata: FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <title>{ title }</title>
    <meta name="description" content={ description } />
  </Head>
);

export default Metadata;
