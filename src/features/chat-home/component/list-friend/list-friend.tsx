import './list-friend.scss';
import arrowRight from '../../../../assets/img/arrow-right.png'
import { AddFriend, Substract } from '../../../../assets/svg';


export const ListFriend = () => {
  return (
    <div className="list-friend">
      <div className="list-friend__header">
        <div className="list-friend__header--left">
            <span><Substract /></span>
            <span>Đang truy cập</span>
        </div>
        <div className="list-friend__header--right">
            <span>Xem tất cả</span>
            <span><img src = {arrowRight}/></span>
        </div>
      </div>

      <div className="list-friend__body">
        <div className="list-friend__body--add">
            <AddFriend />
        </div>
        <div className="list-friend__body--list">

        </div>
      </div>
    </div>
  );
};
