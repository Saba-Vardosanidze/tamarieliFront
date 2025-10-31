import DigitalLibrary from "../primitives/DigitalLibrary";
import Foreword from "../primitives/Foreword";
import InovateProjects from "../primitives/InovateProjects";
import Mission from "../primitives/Mission";
import SocialResponsibility from "../primitives/SocialResponsibility";
import TamarieliDesc from "../primitives/TamarieliDesc";
import Targets from "../primitives/Targets";

const AboutUs = () => {
  return (
    <div
      className="w-full flex flex-col gap-[100px] bg-[linear-gradient(181deg,rgba(241,220,207,1)_0%,rgba(243,235,224,0)_100%)]
 mx-auto   "
    >
      <TamarieliDesc />
      <Foreword />
      <Mission />
      <Targets />
      <SocialResponsibility />
      <DigitalLibrary />
      <InovateProjects />
    </div>
  );
};

export default AboutUs;
