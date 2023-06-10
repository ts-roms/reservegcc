import { FunctionComponent } from 'react';
import Banner from './Banner';
import Image from '@/Components/Media/Image';
import BannerBg from '../../../Assets/Landing/banner-background.png';

interface BannerContainerProps {

}

const BannerContainer: FunctionComponent<BannerContainerProps> = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
          {/* Banner */}
          <Banner />
        </div>
        <Image src={BannerBg} alt="banner-bg" className="w-full -mt-[8.5rem]" />
      </div>
    </>
  );
}

export default BannerContainer;