import { PropsWithChildren } from 'react';
import { Image } from '../Image';

type TCover = {
  src: string;
};
export const Cover = ({ src }: TCover) => {
  return (
    <div>
      <img
        src={src}
        alt="health_better"
        width="100%"
        style={{ height: '140px' }}
      />
    </div>
  );
};

type TBody = PropsWithChildren<{}>;
const Body = ({ children }: TBody) => {
  return <div className="p-2">{children}</div>;
};

type TCard = PropsWithChildren<{ maxWidth?: string }>;
export const Card = ({ children, maxWidth = '250px' }: TCard) => {
  return (
    <div className={` rounded-lg max-w-[${maxWidth}] bg-white overflow-hidden`}>
      {children}
    </div>
  );
};

Card.Cover = Cover;
Card.Body = Body;
