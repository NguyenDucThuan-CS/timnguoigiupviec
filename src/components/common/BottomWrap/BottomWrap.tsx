import './BottomWrap.scss';
import { IWrapper } from '../models';

export const BottomWrap = ({
    children
}:IWrapper) => {
  return (
    <div className="bottom-wrap">
      <div className="bottom">
      {children}
      </div>
    </div>
  );
};
