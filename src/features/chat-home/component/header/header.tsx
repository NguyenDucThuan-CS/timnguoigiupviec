import './header.scss';
import { Avatar } from '../../../../components/common/Avatar/Avatar';
import sampleImg from '../../../../assets/img/hinh.jpg';
import { Colors } from '../../../../assets/svg/Colors';
import { HeaderWrap } from '../../../../components/common/HeaderWrap/HeaderWrap';
import { Search } from '../search/search';


export const Header = () => {
  return (
    <HeaderWrap>
      <div className="header">
        <Search />
        <div className="header__colors">
          <Colors />
        </div>
      </div>
    </HeaderWrap>
  );
};
