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
          'border-2 border-black': !isSelected,
        })}
      ></div>

      <Text
        text={text}
        level="base"
        as="p"
        className="text-neutralStrong text-left"
      />
    </li>
  );
};

interface IOptions {
  options: Array<{
    text: string;
    id: string;
  }>;
  setter?: (prop: string, text?: string) => void;
  compareToId?: string | string[];
}
export const Options = ({ options, setter, compareToId }: IOptions) => {
  return (
    <ul className="rounded-lg max-w-[300px] w-[90%]">
      {options.map(({ text, id }) => (
        <Option
          key={id}
          text={text}
          isSelected={
            Array.isArray(compareToId)
              ? compareToId.includes(id)
              : compareToId === id
          }
          onClick={() => setter?.(id, text)}
        />
      ))}
    </ul>
  );
};
