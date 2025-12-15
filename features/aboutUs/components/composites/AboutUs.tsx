import DigitalLibrary from "../primitives/DigitalLibrary";
import EarthobaPlatform from "../primitives/EarthobaPlatform";
import Foreword from "../primitives/Foreword";
import InovateProjects from "../primitives/InovateProjects";
import Mission from "../primitives/Mission";
import SocialResponsibility from "../primitives/SocialResponsibility";
import TamarieliDesc from "../primitives/TamarieliDesc";
import Targets from "../primitives/Targets";
import ThinkInspireCreate from "../primitives/ThinkCreateInspire";

const AboutUs = () => {
  return (
    <div
      className="w-full flex flex-col gap-[100px]
 mx-auto   "
    >
      <TamarieliDesc />
      <Foreword />
      <Mission />
      <Targets />
      <SocialResponsibility />
      <DigitalLibrary />
      <InovateProjects />
      <EarthobaPlatform />
      <ThinkInspireCreate />
    </div>
  );
};

export default AboutUs;
