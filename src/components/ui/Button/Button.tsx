import classNames from 'classnames';
import styles from './Button.styles';

export interface IButton {
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
}) => {
  return (
    <button
      type={type}
      className={classNames(styles.ButtonCSS, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
