import { useMemo } from 'react';
import { useListContext } from 'react-admin';

export const useIndexTable = () => {
  const { data: rawData, page, perPage } = useListContext();

  const data = useMemo(
    () =>
      rawData?.map((item, index) => ({
        ...item,
        __index__: index + 1 + perPage * (page - 1),
      })) || [],
    [rawData]
  );

  return { data };
};
