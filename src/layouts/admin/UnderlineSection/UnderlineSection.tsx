import { FC } from 'react';

export interface IUnderlineSection {
  children: React.ReactNode;
  title: string;
  contentHeader?: React.ReactNode;
}

export const UnderlineSection: FC<IUnderlineSection> = ({
  children,
  title,
  contentHeader,
}) => {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between border-b-2 border-b-primary pb-2">
        <h2 className="font-medium text-[17px] text-primary">{title}</h2>
        {contentHeader}
      </div>
      {children}
    </div>
  );
};
