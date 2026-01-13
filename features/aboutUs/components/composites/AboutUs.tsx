import CinemaSounds from "../primitives/CinemaSounds";
import DanceEthos from "../primitives/DanceEthnos";
import DigitalLibrary from "../primitives/DigitalLibrary";
import EarthobaPlatform from "../primitives/EarthobaPlatform";
import Foreword from "../primitives/Foreword";
import Gallery from "../primitives/Galery";
import Mission from "../primitives/Mission";
import Music from "../primitives/Music";
import SocialResponsibility from "../primitives/SocialResponsibility";
import TamarieliDesc from "../primitives/TamarieliDesc";
import Targets from "../primitives/Targets";
import ThinkInspireCreate from "../primitives/ThinkCreateInspire";
import Voice from "../primitives/Voice";

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
      <EarthobaPlatform />
      <ThinkInspireCreate />
      <Voice />
      <Gallery />
      <Music />
      <CinemaSounds />
      <DanceEthos />
    </div>
  );
};

export default AboutUs;
