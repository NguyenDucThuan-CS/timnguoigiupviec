import './ModalWithBtn.scss';
import { ModalCommon } from '../ModalCommon/ModalCommon';
import { Button } from '../Button/Button';
import notiImg from '../../../assets/img/noti.png';

export const ModalWithBtn = ({ listBtnContent, content, img, className }: any) => {
  const listButton = listBtnContent.map((item: any, index: any) => {
    return (
      <Button
        onClick={item.click}
        children={item.title}
        className="btn-modal-default"
        key={`btn-modal-default-${index}`}
      />
    );
  });

  
  const _ComponentListButton = () => {
    return listButton.map((item:any) => item);
  };


  return (
    <ModalCommon
      className={`${className} ${listBtnContent.length === 1 ? 'modal-common__one-btn' : 'modal-common__two-btn'} `}
      ComponentListButton={_ComponentListButton}
      content={content}
      img={img ? img : notiImg}
    />
  );
};
