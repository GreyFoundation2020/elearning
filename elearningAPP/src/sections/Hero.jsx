import React from "react";
import Button from "../components/Button";
// import HeroImg from "../assets/image-hero-mobile.png";
import HeroImgDesktop from "../assets/image-hero-desktop.png";

const Hero = () => {
  return (
    <section className='mb-12 pb-3 pt-16'>
      <div className='container pt-6'>
        <div className='grid gap-16 tablet:grid-cols-2' >
          <div>
            <h1 className='h1 mb-6 font-extrabold text-blue-dark desktop:mb-8'>
              Maximize skill,
              <br />
              minimize budget
            </h1>
            <p className='mb-6 desktop:mb-11'>
              Our modern courses across a range of in-demand <br /> skills will
              give you the knowledge you need to live <br /> the life you want.
            </p>
            <Button className='index' secondaryGradient>Get Started</Button>
          </div>

          <div className='desktop:absolute desktop:right-[-21rem] desktop:top-[-9rem]'>
            {/* <img className='mx-auto' src={HeroImg} alt='' /> */}
            <img src={HeroImgDesktop} alt='Student learning online' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
