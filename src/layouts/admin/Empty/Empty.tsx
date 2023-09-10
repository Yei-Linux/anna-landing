import { FC } from 'react';
import { Image } from '../../../components/ui/Image';

export interface IEmtpy {
  text?: React.ReactNode;
}

export const Empty: FC<IEmtpy> = ({
  text = 'No se encontraron resultados',
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src="/assets/not_results.jpeg"
        alt="Not Results"
        width={230}
        height={230}
        hasShadow={false}
      />
      <div className="text-neutralStrong font-medium">{text}</div>
    </div>
  );
};
