import type { FC } from 'react';

import { ProcessConsumer } from 'contexts/process';

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    { ({ processes }) => Object.entries(processes).map(([id, { Component }]) =>
      <Component key={ id } />
    ) }
  </ProcessConsumer>
)

export default ProcessLoader;
