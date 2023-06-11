import { FunctionComponent } from 'react';
import IosApp from '../../Assets/Landing/ios-app.png';
import AndroidApp from '../../Assets/Landing/google-play.png';
import Image from '@/Components/Media/Image';
import Link from '@/Components/Link';
import { cn } from '@/lib/utils';

interface MobileAppProps {
  className?: string
}

const MobileApp: FunctionComponent<MobileAppProps> = ({ className }) => {
  return (
    <>
      <div className={cn('', className)}>
        <div className="flex gap-4">
          <Link href="https://apps.apple.com/" className='hover:scale-[1.1]'>
            <Image src={IosApp} alt="Ios-app" className='' />
          </Link>
          <Link href="https://play.google.com/store/apps" className='hover:scale-[1.1]'>
            <Image src={AndroidApp} alt="Android-app" className='' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileApp;