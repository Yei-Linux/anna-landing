import { Text } from '../../../ui/Text';

export const Trusters = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#fafafa] p-4">
      <Text
        className="text-center text-neutralStrong #8a8a8a"
        text="Instituciones que confian en nosotros"
        level="base"
      />
      <div className="flex justify-around gap-3">
        <img
          src="assets/muni_lima.png"
          alt="municipalidad_lima"
          width={120}
          height={50}
        />
        <img
          src="assets/muni_lince.png"
          alt="municipalidad_lince"
          width={120}
          height={50}
        />
      </div>
    </div>
  );
};
