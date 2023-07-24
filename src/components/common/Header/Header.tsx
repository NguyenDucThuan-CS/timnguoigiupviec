import './Header.scss'
import { Avatar } from '../../../components/common/Avatar/Avatar'
import sampleImg from '../../../assets/img/hinh.jpg';
import { Colors } from '../../../assets/svg';


export const Header = () => {
    return <div className='header'>
        <div className='header__avatar'>
            <Avatar img  = {sampleImg}/>
            <div className='header__avatar--info'>
                <p>Buổi sáng tốt lành</p>
                <p>Huỳnh Công Tâm</p>
            </div>
        </div>

        <div className='header__colors'>
            <Colors />
        </div>
    </div>
}