import './Input.scss';
import { IInput } from '../models';
import { useState } from 'react';

import { Eye, NoEye } from '../../../assets/svg'

export const Input = ({
  className,
  errors: Errors,
  disabled,
  icon: Icon,
  name,
  onChange,
  placeholder,
  readOnly,
  type,
  value,
  valid,
  EndInput
}: IInput) => {

  const [isShowPass, setIsShowPass] = useState(false);

  const handleShowPass = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <div className={`${className}`}>
      <div className={`input-container ${Icon && 'input-container-icon'}`}>
        {Icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
        <input
          aria-label={name}
          data-testid={name}
          tabIndex={0}
          type={isShowPass ? "text" :type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
        />

        <div
          className='eye'
          onClick={() => {
            handleShowPass();
          }}
        >
         { type === "password" && <>{isShowPass ? <Eye /> : <NoEye />}</>}
         {EndInput && <EndInput />}
        </div>
      </div>
      {Errors && !valid && <Errors data-testid="errors">Required!</Errors>}

    
    </div>
  );
};
