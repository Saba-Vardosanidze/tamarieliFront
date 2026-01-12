import banner from '../../../../public/Images/headerImages/png/realHero.webp';

const HeroSection = () => {
  return (
    <div
      className="flex justify-center items-center bg-[length:100%_100%] bg-no-repeat bg-center w-full h-[523px] lg:h-[904px]"
      style={{ backgroundImage: `url(${banner.src})` }}
    ></div>
  );
};

export default HeroSection;
