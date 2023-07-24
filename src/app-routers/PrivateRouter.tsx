import React from 'react';

import { useEffect } from 'react';
import { IPublicRouter } from './model/IPublicRouter';

export const PrivateRouter: React.FC<IPublicRouter> = ({ header: Header, layout: Layout, component: Component }) => {
  useEffect(() => {}, []);
  return (
    <Layout
      header={Header && <Header />}
    >
      <Component />
    </Layout>
  );
};
