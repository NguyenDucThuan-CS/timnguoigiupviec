import React from 'react';
import './Loader.scss';

import { ILoader } from '../models';

export const Loader: React.FC<ILoader> = ({
  className,
  color,
  marginTop,
  isSmall,
  marginRight,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight,
        position: 'relative',
      }}
    >
      <div
        className={`loader ${className ? className : isSmall ? 'loader__small' : ''}`}
        style={{ borderLeftColor: color, borderTopColor: color, marginTop }}
      />
    </div>
  );
};
