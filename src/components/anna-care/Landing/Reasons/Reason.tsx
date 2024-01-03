import classNames from 'classnames';
import { Text } from '../../../ui/Text';

type TSubreason = {
  src: string;
  text: string;
};
const SubReason = ({ src, text }: TSubreason) => (
  <div className="flex gap-3">
    <img src={src} alt="subreason" width="20px" style={{ maxHeight: '20px' }} />
    <Text
      text={text}
      className="text-left"
      level="sm"
      as="p"
      fontWeight="light"
    />
  </div>
);

type TReason = {
  src: string;
  reason: string;
  children: React.ReactNode;
  isOdd?: boolean;
};

export const Reason = ({ src, reason, children, isOdd = false }: TReason) => {
  return (
    <div className="flex flex-col gap-3" style={{ maxWidth: 428 }}>
      <div>
        <img src={src} alt="reason" width="100%" />
        <div
          className={classNames('w-[20%] h-[5px] bg-primary', {
            'bg-[#0DB760]': isOdd,
          })}
        />
      </div>
      <Text text={reason} className="text-left p-4" level="lg" as="h3" />
      <div className="flex flex-col gap-5 p-4">{children}</div>
    </div>
  );
};

Reason.SubReason = SubReason;
