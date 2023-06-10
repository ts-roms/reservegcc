import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Card/card';
import Image from '@/Components/Media/Image';
import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';
import GraphIcon from '../../../../Assets/Landing/portfolio-graph.png';
import StatisticImage from '../../../../Assets/Landing/portfolio-cards.png';
import StatisticBg from '../../../../Assets/Landing/body-circle-2.png'

interface StatisticsProps {

}

const Statistics: FunctionComponent<StatisticsProps> = () => {
  return (
    <>
      <div className="flex pt-16">
        <Card className='w-1/3 border-none !shadow-none flex'>
          <Image src={StatisticBg} alt="statistics-bg" className="scale-[1.8] absolute left-0 opacity-40" />
        </Card>

        <div className="px-10">
          <Image src={StatisticImage} alt={'statistics-image'} className={cn('w-full scale-[1.2]')} />
        </div>

        <Card className={cn('w-1/3 text-left border-none !shadow-none')}>
          <div className="flex justify-start ml-6">
            <Image src={GraphIcon} alt={'fast-and-easy-registration'} className={cn('w-16')} />
          </div>
          <CardHeader>
            <CardTitle className={cn("text-3xl text-[#444444]")}>{'Simple earning and statistics tracking.'}</CardTitle>
          </CardHeader>
          <CardContent className={cn('text-lg font-thin text-[#7B7B7C]')}>{'Stay aware of your services and how they are performing.'}</CardContent>
        </Card>
      </div>
    </>
  );
}

export default Statistics;