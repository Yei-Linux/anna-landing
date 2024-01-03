import { Button } from '../../ui/Button';
import { useHome } from '../Platform/Home/useHome';
import { Benefits } from './Benefits/Benefits';
import { CofounderTestimony } from './CofounderTestimony';
import { Hero } from './Hero';
import { Reasons } from './Reasons/Reasons';
import { Testimonies } from './Testimonies';
import { Trusters } from './Trusters';

export const Landing = () => {
  const { handleCarePlus } = useHome();

  return (
    <div className="flex flex-col gap-20 md:gap-10">
      <Hero />
      <Benefits />
      <Testimonies />
      <div>
        <Trusters />
        <CofounderTestimony />
        <Reasons />
      </div>
      <div className="w-[100%] flex justify-center fixed bottom-5 z-10 px-4">
        <Button
          className="!rounded-full !w-full max-w-[500px] !p-4"
          onClick={handleCarePlus}
        >
          Descubre el plan para ti
        </Button>
      </div>
    </div>
  );
};
