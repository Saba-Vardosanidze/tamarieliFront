import Footer from "../primitives/Footer";
import Form from "../primitives/Form";
import Header from "../primitives/Header";
import HeroSection from "../primitives/HeroSection";
import InfiniteSlider from "../primitives/Slider";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-[90px]">
        <HeroSection />
        <InfiniteSlider title="პროექტები" direction="right" speed={70} />
        <Form />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
