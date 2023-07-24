import './sample-component.scss';

import { Button } from '../../../components/common/Button/Button';
import { Input } from '../../../components/common/Input/Input';
import { Person } from '../../../assets/svg/Person';
import { Avatar } from '../../../components/common/Avatar/Avatar';
import sampleImg from '../../../assets/img/hinh.jpg';
import { Modal } from '../../../components/common/Modal/Modal';
import { useState } from 'react';
import { ModalWithBtn } from '../../../components/common/ModalWithBtn/ModalWithBtn';


export const SampleComponent = () => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const listButton = [
    <Button
      onClick={() => {
        console.log(1);
        setIsShow(false);
      }}
      children={'Không'}
      className="btn-left"
      key={1}
    ></Button>,

    
  ];

  // const _ComponentListButton = () => {
  //   return listButton.map(item => item);
  // };

  const listBtnContent = [
    {
      title: 'Đống ý',
      click: () => {
        console.log(1123);
        setIsShow(false);
      },
    }
  ];

  return (
    <>
      <div style={{ width: '300px' }}>
        <Input icon={Person} type={'password'} placeholder="jjdjdjdj" />
      </div>
      <Button>Sample</Button>
      <Avatar img={sampleImg} />
      {/* <Modal isShow={isShow} setIsShow={setIsShow}>
        <ModalCommon
          ComponentListButton={_ComponentListButton}
          className="modal-common__sample"
          content={'jjssjjsjssj'}
          img  = {notiImg}
        ></ModalCommon>
      </Modal> */}

      <Modal isShow={isShow} setIsShow={setIsShow}>
        <ModalWithBtn listBtnContent={listBtnContent} content={'hshshshs'}></ModalWithBtn>
      </Modal>
    </>
  );
};
