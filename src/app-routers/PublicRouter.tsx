import React from "react";

import { IPublicRouter } from "./model/IPublicRouter";

 export const PublicRouter :React.FC<IPublicRouter> = ({
  header: Header, layout: Layout, component: Component
}) => {
    
  return (
   <Layout
    header = {Header && <Header />}
    
   >
     <Component />
   </Layout>
  );
};


