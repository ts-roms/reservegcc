import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';
import Computer from './PlatformPortfolio/Computer';
import Statistics from './PlatformPortfolio/Statistics';
import Activity from './PlatformPortfolio/Activity';

interface PlatformProps {

}

const Platform: FunctionComponent<PlatformProps> = () => {
  return (
    <>
      <div className="pt-40">
        <div className="text-center">
          <h2 className={cn('text-[#444444] text-5xl font-normal')}>Join our platform as a Vendor</h2>
          <p className={cn('text-2xl font-thin pt-7')}>Join us and deliver the best to our users! Are you a vendor or company interested in collaborating with us? Find out more below.</p>
        </div>
        <div className="">
          <Computer />
          <Statistics />
          <Activity />
        </div>
      </div>
    </>
  );
}

export default Platform;