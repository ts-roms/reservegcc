import { FunctionComponent } from "react";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import Platform from "./Platform";
import MobileAd from "./MobileAd";

interface LandingProps {

}

const Landing: FunctionComponent<LandingProps> = () => {
  return (
    <>
      <div className="">
        <Banner />
        <div id="how-it-works" className="bg-[#F6E9DF]">
          <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
            <HowItWorks />
          </div>
        </div>
        <div id="platform" className="">
          <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
            <Platform />
          </div>
        </div>
        <div className="bg-[#F6E9DF] h-[650px] grid">
          <div className="max-w-[92rem] m-auto">
            <MobileAd />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;