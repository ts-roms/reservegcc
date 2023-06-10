import { FunctionComponent } from 'react';
import Image from '../Media/Image';
import IosApp from '../../Assets/Landing/ios-app.png';
import AndroidApp from '../../Assets/Landing/google-play.png';

interface MobileAppProps {

}

const MobileApp: FunctionComponent<MobileAppProps> = () => {
  return (
    <>
      <div className="">
        <div className="flex gap-4">
          <Image src={IosApp} alt="Ios-app" className='' />
          <Image src={AndroidApp} alt="Android-app" className='' />
        </div>
      </div>
    </>
  );
}

export default MobileApp;