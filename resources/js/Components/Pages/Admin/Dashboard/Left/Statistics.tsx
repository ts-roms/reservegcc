import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Card/card';
import Image from '@/Components/Media/Image';
import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface StatisticsProps {

}

const Statistics: FunctionComponent<StatisticsProps> = () => {

  const stats: any[] = [
    {
      imgSrc: 'https://via.placeholder.com/36&text=QAR',
      count: 'QAR 0',
      label: 'Total Sales',
      variant: 'bg-green-100'
    },
    {
      imgSrc: 'https://via.placeholder.com/36&text=QAR',
      count: '0',
      label: 'Customers',
      variant: 'bg-purple-100'
    },
    {
      imgSrc: 'https://via.placeholder.com/36&text=QAR',
      count: '0',
      label: 'Total Orders',
      variant: 'bg-blue-100'
    },
    {
      imgSrc: 'https://via.placeholder.com/36&text=QAR',
      count: '0',
      label: 'Total Orders',
      variant: 'bg-orange-100'
    }
  ]

  return (
    <>
      <div className="">
        <Card className='pb-8'>
          <CardHeader className='pb-0'>
            <CardTitle className={cn("text-xl")}>Statistics</CardTitle>
          </CardHeader>
          <h3 className='py-3 pl-7 text-md font-normal'>Sales Summary</h3>
          <div className="flex gap-4 mx-7">
            {
              stats.map((stat: any, key: number) => (
                <Card key={key} className={cn('w-full text-left')}>
                  <Image src={stat.imgSrc} alt={stat.label} className={cn('pl-5 pt-5 w-16 rounded-lg')} />
                  <CardHeader className='pt-4 pb-0'>
                    <CardTitle className={cn("text-2xl")}>{stat.count}</CardTitle>
                  </CardHeader>
                  <CardContent className={cn('text-lg font-thin pt-0')}>{stat.label}</CardContent>
                </Card>
              ))
            }
          </div>
        </Card>
      </div>
    </>
  );
}

export default Statistics;