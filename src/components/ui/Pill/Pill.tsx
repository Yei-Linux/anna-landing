import classNames from 'classnames';
import styles from './Pill.styles';

interface IPill {
  children: React.ReactNode;
  className?: string;
}
export const Pill = ({ children, className }: IPill) => (
  <div className={classNames(styles.PillCSS, className)}>{children}</div>
);
