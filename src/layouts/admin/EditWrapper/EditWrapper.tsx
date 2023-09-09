import { FC, Fragment } from 'react';

export interface IEditWrapper {
  children: React.ReactNode;
}

export const EditWrapper: FC<IEditWrapper> = ({ children }) => {
  return (
    <div className="pt-5 bg-white p-7 rounded-xl h-full flex flex-col gap-7">
      {children}
    </div>
  );
};

export const EditPageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <Fragment>{children}</Fragment>;
