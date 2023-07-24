import React, { useEffect, useRef } from 'react';
import './Modal.scss';

import { IModal } from '../models';
export const Modal: React.FC<IModal> = ({
  children,
  isShow,
  className,
  setIsShow,
  backgroundColorOverlay,
  offClickOutside,
  clickOutside
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overflowBody = document.body.style.overflow;
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      if (overflowBody !== 'hidden') document.body.style.overflow = 'unset';
    }

    return () => {
      if (overflowBody !== 'hidden') document.body.style.overflow = 'unset';
    };
  }, [isShow]);

  useEffect(() => {
    if (isShow) {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target) && !offClickOutside) {
          if(clickOutside) {
            clickOutside()
          };
          if (setIsShow) setIsShow(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [ref, isShow]);

  return (
    <div className={isShow ? 'modal modal--show' : 'modal'} style={{ backgroundColor: backgroundColorOverlay }}>
      <div className={`${className ? className : ''}`} ref={ref}>
        {children}
      </div>
    </div>
  );
};
