import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Card/card';
import Image from '@/Components/Media/Image';
import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';
import PieIcon from '../../../../Assets/Landing/portfolio-pie.png';
import ActivityImage from '../../../../Assets/Landing/portfolio-line-graph.png';
import ActivityBg from '../../../../Assets/Landing/body-circle.png'

interface ActivityProps {

}

const Activity: FunctionComponent<ActivityProps> = () => {
  return (
    <>
      <div className="flex pt-16">

        <Card className={cn('w-1/3 text-right border-none !shadow-none')}>
          <div className='flex justify-end mr-6'>
            <Image src={PieIcon} alt={'simple-ui'} className={cn('w-16')} />
          </div>
          <CardHeader>
            <CardTitle className={cn("text-2xl text-[#444444]")}>{'Track Easily'}</CardTitle>
          </CardHeader>
          <CardContent className={cn('text-lg font-thin text-[#7B7B7C]')}>{'When you sign up with us, we ensure that you have access to the statistics that will assist you in gauging the performance of your services.'}</CardContent>
        </Card>

        <div className="px-10">
          <Image src={ActivityImage} alt={'activity-image'} className={cn('w-full scale-[1.2]')} />
        </div>

        <Card className='w-1/3 border-none !shadow-none overflow-hidden'>
          <Image src={ActivityBg} alt="activity-bg" className="absolute -mt-28 right-0 opacity-40" />
        </Card>
      </div>
    </>
  );
}

export default Activity;