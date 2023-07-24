import './chat-item.scss'
import { Avatar } from '../../../../components/common'
import sampleImg from '../../../../assets/img/hinh.jpg';


export const ChatItem = () => {
    return <div className='chat-item'>
        <div className='chat-item__info'>
            <div className='chat-item__info--avatar'>
                <Avatar img= {sampleImg}/>
            </div>
            <div className='chat-item__info--name'>
                <p>Smith Mathew</p>
                <p>Hi, David. Hope you’re doing...</p>
            </div>
        </div>
        <div className='chat-item__noti'>
            <span>09:11</span>
            <span>2</span>
        </div>
    </div>
}