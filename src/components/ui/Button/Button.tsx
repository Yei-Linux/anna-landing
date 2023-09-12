import classNames from 'classnames';
import styles from './Button.styles';

export interface IButton {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
}

export const Button: React.FC<IButton> = ({
  type = 'button',
  children,
  className,
}) => {
  return (
    <button type={type} className={classNames(styles.ButtonCSS, className)}>
      {children}
    </button>
  );
};
