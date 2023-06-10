import { FunctionComponent } from 'react';
import MobileApp from '../../Headers/MobileApp';
import Image from '../../Media/Image';
import BannerImage from '../../../Assets/Landing/homepage-banner.png'

interface BannerProps {

}

const Banner: FunctionComponent<BannerProps> = () => {
  return (
    <>
      <div id="banner" className="flex pt-10">
        <div className="w-1/2">
          <h1 className="text-[#3E4B5D] text-5xl font-bold leading-[66px]">Experience Hospitality at its Finest - Try it Now!</h1>
          <p className="text-[#3E4B5D] text-2xl font-normal py-12">
            Experience a worry-free experience with us. Book, plan and let us take care of the work for you. Enjoy a stress-free experience with us as we handle all the work for you. Let us take the stress out of planning and leave you free to enjoy your occasion.
          </p>
          <MobileApp />
        </div>
        <div className="w-1/2 flex justify-end">
          <Image src={BannerImage} alt="banner-image" className='' />
        </div>
      </div>
    </>
  );
}

export default Banner;