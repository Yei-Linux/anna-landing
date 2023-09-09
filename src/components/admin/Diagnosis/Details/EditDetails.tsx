import { UnderlineSection } from '../../../../layouts/admin/UnderlineSection';
import { Background } from './Background';
import { CurrentCondition } from './CurrentCondition';
import { GeneralSymptons } from './GeneralSymptons';
import { InterrogationBySystem } from './InterrogationBySystem';
import { PhysicalExploration } from './PhysicalExploration';
import { Results } from './Results';

export const EditDetails = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <UnderlineSection title="Historia Clinico">
        <Background />
        <CurrentCondition />
        <GeneralSymptons />
        <InterrogationBySystem />
      </UnderlineSection>

      <UnderlineSection title="Diagnostico">
        <PhysicalExploration />
        <Results />
      </UnderlineSection>
    </div>
  );
};
