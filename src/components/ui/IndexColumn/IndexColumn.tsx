import { useRecordContext } from 'react-admin';

export const IndexColumn = () => {
  const record = useRecordContext();
  return <span>{record.__index__ ?? ''}</span>;
};
