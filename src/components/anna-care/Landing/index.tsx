import { Benefits } from './Benefits/Benefits';
import { CofounderTestimony } from './CofounderTestimony';
import { Hero } from './Hero';
import { Reasons } from './Reasons/Reasons';
import { Testimonies } from './Testimonies';
import { Trusters } from './Trusters';

export const Landing = () => {
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
    </div>
  );
};
