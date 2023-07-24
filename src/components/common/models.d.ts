interface IStyle {
    borderRadius?: Property.BorderRadius<string | number>;
    height?: Property.Height<string | number>;
    width?: Property.Width<string | number>;
    padding?: Property.Padding<string | number>;
    className?: string;
    marginRight?: number;
    marginLeft?: number;
    marginBottom?: number;
    marginTop?: number;
    color?: string;
  }


  export interface IButton extends IStyle {
    className?: string;
    borderRadius?: Property.BorderRadius<string | number>;
    height?: Property.Height<string | number>;
    width?: Property.Width<string | number>;
    padding?: Property.Padding<string | number>;
    onClick?: any;
    type?: 'button' | 'submit' | 'reset';
    isLoading?: boolean;
    isBlur?: boolean;
    children?: any;
    isDisable?: boolean;
  }
  

export interface ILoader {
    className?: string;
    color?: string;
    marginTop?: number;
    height?: number;
    isSmall?: boolean;
    marginRight?: number;
    classNameContent?: any;
  }

export interface IInput {
  className?: string;
  errors?: ReactElement | null | undefined;
  disabled?: boolean;
  icon?: ReactElement | null | undefined;
  name?: string;
  onChange?: any;
  placeholder?: string;
  readOnly?: boolean
  type?: string;
  value?: string;
  valid?: boolean;
  EndInput?: ReactElement | null | undefined;
}

export interface IAvatar {
  img?: string;
  className?: string;
  isActive?: boolean;
}


export interface IModal extends IStyle {
  isOpen?: boolean | string;
  className?: string;
  classNameContent?: string;
  setIsOpen?: any;
  backgroundColorOverlay?: any;
  color?: Property.Color | undefined;
  title?: string;
  hasHeader?: boolean;
  maxWidth?: string;
  margin?: string;
  topLeftModal?: boolean;
  offClickOutside?: boolean;
  children?: any;
  text?: string;
  clickOutside?: any;
  onClose?: any;

  isShow?: boolean | string;
  
  setIsShow?: any;
  backgroundColorOverlay?: string;
  classNameContainer?: string;
  isHiddenClickOutside?: boolean;
  resetField?: () => void;
  handleDiscard?: any;
}


export interface IModalCommon {
  className?: string;
  content?: ReactElement,
  ComponentListButton?: ReactElement,
  img?: string
}

export interface IWrapper {
  children?: ReactElement | null | undefined;
}