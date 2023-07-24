import './index.scss';
import { IMainLayout } from '../models';


export const MainLayout = ({ children, header }: IMainLayout) => {
  return <div className='main-layout'>
    {children}
  </div>;
};
