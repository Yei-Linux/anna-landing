import { FC } from 'react';
import { Text } from '../../../../../../ui/Text';
import classNames from 'classnames';

export type TPlanItem = {
  title: string;
  subTitle?: string;
  priceInfo: string;
  description?: string;
  isPopular?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
};

export const PlanItem: FC<TPlanItem> = ({
  title,
  subTitle,
  priceInfo,
  description,
  isPopular,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'border-2 rounded-lg p-4 relative cursor-pointer mb-2',
        {
          'border-primary': isSelected,
        }
      )}
    >
      {isPopular && (
        <span className="bg-primary text-sm text-white p-1 absolute top-0 left-0">
          Popular
        </span>
      )}
      {isSelected && (
        <span className="bg-primary rounded-full w-[15px] h-[15px] block absolute top-3 right-3" />
      )}

      <div className="flex flex-col gap-1 mt-4">
        <Text
          text={title}
          level="sm"
          fontWeight="semibold"
          as="h3"
          className="text-primary"
        />
        {subTitle && (
          <Text
            text={subTitle}
            level="sm"
            fontWeight="normal"
            as="h3"
            className="text-primary"
          />
        )}
        <Text text={priceInfo} level="sm" fontWeight="normal" as="h3" />
        {description && (
          <Text
            text={description}
            level="sm"
            fontWeight="normal"
            as="h3"
            className="text-neutralStrong"
          />
        )}
      </div>
    </div>
  );
};
