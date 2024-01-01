import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from './Sections';

export const LandingOld = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-24">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
};
