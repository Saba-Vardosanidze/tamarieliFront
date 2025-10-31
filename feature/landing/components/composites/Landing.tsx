import Form from "../primitives/Form";

import HeroSection from "../primitives/HeroSection";
import InfiniteSlider from "../primitives/Slider";

const Landing = () => {
  return (
    <div className="flex flex-col gap-[90px]">
      <HeroSection />
      <InfiniteSlider title="პროექტები" direction="right" speed={70} />
      <Form />
    </div>
  );
};

export default Landing;
