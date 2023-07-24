import './HeaderWrap.scss';
import { IWrapper } from '../models';

export const HeaderWrap = ({ children }: IWrapper) => {
  return <div className="header-wrap">{children}</div>;
};
