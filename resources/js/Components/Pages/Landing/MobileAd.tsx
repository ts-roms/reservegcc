import { FunctionComponent } from 'react';
import MobileImage from '../../../Assets/Landing/mobile-image.png';
import Image from '@/Components/Media/Image';
import MobileApp from '@/Layouts/Headers/MobileApp';

interface MobileAdProps {

}

const MobileAd: FunctionComponent<MobileAdProps> = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <div className="">
            <Image src={MobileImage} alt={'mobile-image'} className="scale-[1.4]" />
          </div>
          <div className="my-auto pl-44">
            <h2 className="text-white text-6xl font-extrabold items-center align-middle mb-10">Download a World of Hospitality</h2>
            <MobileApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileAd;