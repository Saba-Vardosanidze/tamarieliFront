import Form from '../primitives/Form';
import Header from '../primitives/Header';
import HeroSection from '../primitives/HeroSection';
import InfiniteSlider from '../primitives/Slider';

const Landing = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-col gap-[60px]">
        <HeroSection />
        <InfiniteSlider title="პროექტები" direction="right" speed={70} />
        <Form />
      </div>
    </div>
  );
};

export default Landing;
