import './index.scss';
import { Header, Search, ListChat, ListFriend, Bottom } from '../component';

export const ChatHome = () => {
  return (
    <div className="chat-home">
      <Header></Header>
     

      {/* <div className="chat-home__list-friend">
        <ListFriend></ListFriend>
      </div> */}
      <div className="chat-home__list-chat">
        <ListChat></ListChat>
      </div>

      <div className="chat-home__bottom">
        <Bottom></Bottom>
      </div>
    </div>
  );
};
