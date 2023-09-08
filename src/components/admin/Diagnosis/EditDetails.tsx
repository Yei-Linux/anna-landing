import { Background } from './Details/Background';
import { CurrentCondition } from './Details/CurrentCondition';
import { GeneralSymptons } from './Details/GeneralSymptons';
import { InterrogationBySystem } from './Details/InterrogationBySystem';
import { PhysicalExploration } from './Details/PhysicalExploration';
import { Results } from './Details/Results';

export const EditDetails = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <div>
        <h4 className="font-semibold mb-7">Historia Clinico</h4>
        <Background />
        <CurrentCondition />
        <GeneralSymptons />
        <InterrogationBySystem />
      </div>

      <div>
        <h4 className="font-semibold mb-7">Diagnostico</h4>
        <PhysicalExploration />
        <Results />
      </div>
    </div>
  );
};
