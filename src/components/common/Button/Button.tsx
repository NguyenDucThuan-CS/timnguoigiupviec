import React from 'react';
import { Loader } from '../Loader/Loader';
import './Button.scss';
import { IButton } from '../models';

export const Button: React.FC<IButton> = ({ children, className, onClick, type, isLoading, isDisable }) => {
  return (
    <div className='btn'>
      <button className={className} onClick={onClick} type={type} disabled={isLoading || isDisable}>
        {isLoading ? <Loader isSmall marginRight={4}/>:children}
        {/* {children} */}
      </button>
    </div>
  );
};
