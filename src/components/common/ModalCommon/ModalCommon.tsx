import './ModalCommon.scss';
import { IModalCommon } from '../models';

export const ModalCommon = ({ className, content, ComponentListButton,img }: IModalCommon) => {
  return <div className={className}>
    <div className="modal-common">
     {img && <img src={img} />}
      <p className="content">
        {content}
      </p>
      <div className='list-button'>
        <ComponentListButton />
      </div>
    </div>
  </div>;
};
