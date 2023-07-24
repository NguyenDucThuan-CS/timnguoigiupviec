import './Avatar.scss';
import React from 'react';
import { IAvatar } from '../models';
import { GreenCircle } from '../../../assets/svg/GreenCircle';

export const Avatar: React.FC<IAvatar> = ({ img, className, isActive}) => {
  return (
    <div className= {className ? className: ""}>
      <div className="avatar">
        <img src={img} alt="Avatar" />
         {true && <GreenCircle ></GreenCircle>}
      </div>
    </div>
  );
};
