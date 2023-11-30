import classNames from 'classnames';
import { Text } from '../../../../../ui/Text';

interface IOption {
  text: string;
  isSelected: boolean;
  onClick?: () => void;
}
const Option = ({ text, onClick, isSelected }: IOption) => {
  return (
    <li
      className={classNames(
        'p-4 flex items-center gap-3 bg-neutralPrimaryLight border-2 border-neutralPrimary cursor-pointer'
      )}
      onClick={onClick}
    >
      <div
        className={classNames('rounded-md bg-primary w-[20px] h-[20px]', {
          'bg-primary': isSelected,
          'bg-white': !isSelected,
          'border-2 border-neutralPrimary': !isSelected,
        })}
      ></div>

      <Text
        text={text}
        level="base"
        as="p"
        className="text-neutralStrong text-center"
      />
    </li>
  );
};

interface IOptions {
  options: Array<{
    text: string;
    id: number;
  }>;
  setter?: (prop: number) => void;
  compareToId?: number;
}
export const Options = ({ options, setter, compareToId }: IOptions) => {
  return (
    <ul className="rounded-lg max-w-[300px] w-[90%]">
      {options.map(({ text, id }) => (
        <Option
          key={id}
          text={text}
          isSelected={compareToId === id}
          onClick={() => setter?.(id)}
        />
      ))}
    </ul>
  );
};
