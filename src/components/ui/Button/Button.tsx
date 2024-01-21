import classNames from 'classnames';
import styles from './Button.styles';

export interface IButton {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  loading?: boolean;
}

export const Button: React.FC<IButton> = ({
  type = 'button',
  children,
  className,
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      disabled={loading ? true : disabled}
      type={type}
      className={classNames(styles.ButtonCSS, className, {
        '!bg-[#dcdcdc]': disabled,
      })}
      onClick={onClick}
    >
      {loading ? (
        <svg
          className="mr-3 h-5 w-5 animate-spin  text-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {children}
    </button>
  );
};
