import classNames from 'classnames';
import { Text } from '../../../ui/Text';
import { Image } from '../../../ui/Image';

export type TTestimony = {
  direction: 'left' | 'right';
  memberName: string;
  memberState: string;
  memberTestimony: string;
  src: string;
};

export const Testimony = ({
  direction,
  memberName,
  memberState,
  memberTestimony,
  src,
}: TTestimony) => {
  return (
    <div
      className={classNames('h-[100%] flex gap-7 max-w-[250px] mt-10', {
        'flex-row-reverse': direction === 'right',
        'ml-15': direction === 'right',
      })}
    >
      <div className="flex flex-col gap-7">
        <div className="flex flex-col w-[100%]">
          <Text
            text={memberName}
            className={classNames('w-[100%]', {
              'text-right': direction === 'left',
              'text-left': direction === 'right',
            })}
            level="sm"
            as="h4"
          />
          <Text
            text={memberState}
            className={classNames('w-[100%]', {
              'text-right': direction === 'left',
              'text-left': direction === 'right',
            })}
            level="sm"
            as="h4"
          />
        </div>

        <Text
          text={memberTestimony}
          className={classNames('w-[100%]', {
            'text-right': direction === 'left',
            'text-left': direction === 'right',
          })}
          level="sm"
          fontWeight="light"
          as="p"
        />
      </div>

      <div className="h-auto">
        <Image
          src={src}
          alt="testimony"
          width={220}
          height={220}
          hasShadow={false}
        />
      </div>
    </div>
  );
};
