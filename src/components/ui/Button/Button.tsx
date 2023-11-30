import classNames from 'classnames';
import styles from './Button.styles';

export interface IButton {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  type = 'button',
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classNames(styles.ButtonCSS, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
