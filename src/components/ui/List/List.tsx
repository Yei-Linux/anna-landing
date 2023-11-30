import classNames from 'classnames';
import { Text } from '../Text';

const MarketItemCSS = classNames(
  'bg-primaryLight',
  'rounded-full',
  'w-[10px]',
  'h-[10px]',
  'block'
);

interface IItem {
  title: string;
  description?: string;
}
const Item = ({ title, description }: IItem) => (
  <li>
    <div className="flex gap-2 items-center">
      <span className={MarketItemCSS} />
      <Text text={title} level="sm" fontWeight="medium" as="h3" />
    </div>

    {description && (
      <Text
        text={description}
        level="sm"
        as="p"
        className="text-neutralStrong"
      />
    )}
  </li>
);

export interface IList {
  children: React.ReactNode;
  className?: string;
}
export const List = ({ children, className }: IList) => {
  return (
    <ul className={classNames(className, 'flex flex-col gap-5 px-[20px] mt-5')}>
      {children}
    </ul>
  );
};

List.Item = Item;
