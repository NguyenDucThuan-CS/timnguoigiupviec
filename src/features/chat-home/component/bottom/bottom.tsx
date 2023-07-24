import './bottom.scss';
import { Mess, Directory, Bell, Setting } from '../../../../assets/svg';
import { BottomWrap } from '../../../../components/common/BottomWrap/BottomWrap';

export const Bottom = () => {
    // return <div className='bottom'>
    //     <div className='bottom__item'>
    //         <div><Mess /></div>
    //         <div>Trò chuyện</div>
    //     </div>
    //     <div className='bottom__item'>
    //         <div><Directory /></div>
    //         <div>Danh bạ</div>
    //     </div>
    //     <div className='bottom__item'>
    //         <div><Bell /></div>
    //         <div>Thông báo</div>
    //     </div>
    //     <div className='bottom__item'>
    //         <div><Setting /></div>
    //         <div>Cài đặt</div>
    //     </div>
    // </div>

    return <BottomWrap>
        <div className='bottom__item'>
            <div><Mess /></div>
            <div>Trò chuyện</div>
        </div>
        <div className='bottom__item'>
            <div><Directory /></div>
            <div>Danh bạ</div>
        </div>
        <div className='bottom__item'>
            <div><Bell /></div>
            <div>Thông báo</div>
        </div>
        <div className='bottom__item'>
            <div><Setting /></div>
            <div>Cài đặt</div>
        </div>
    </BottomWrap>
}