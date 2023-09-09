import { FC } from 'react';
import { Image } from '../../../components/ui/Image';

export interface IEmtpy {
  text?: string;
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
      <p className="text-neutralStrong font-medium">{text}</p>
    </div>
  );
};
