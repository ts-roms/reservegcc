import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Card/card';
import { FunctionComponent } from 'react';
import Icon1 from '../../../Assets/Landing/work-1.png';
import Icon2 from '../../../Assets/Landing/work-2.png';
import Icon3 from '../../../Assets/Landing/work-3.png';
import SideImg from '../../../Assets/Landing/overlay-top.png';
import Image from '@/Components/Media/Image';
import { cn } from '@/lib/utils';

interface HowItWorksProps {

}

const HowItWorks: FunctionComponent<HowItWorksProps> = () => {
  const details = [
    {
      img: Icon1,
      title: 'Experience Unmatched Services for Every Occasion!',
      description: 'Whether it is a single service or an occasion search and plan what you need in the palm of your hand. Request what you need and we will work with the vendors on your behalf.'
    },
    {
      img: Icon2,
      title: 'Simplicity and Efficiency with an Easy-to-use app',
      description: 'Create a single reservation with multiple vendors by selecting the needed items and adding them to the cart. Finalize the agreement with a single click.'
    },
    {
      img: Icon3,
      title: 'Unparalleled Quality Assurance Granted',
      description: 'Reach out to us and rest assured that you will receive what you have ordered, we are here to help!'
    },
  ]
  return (
    <>
      <div className="bg-[#F6E9DF] pt-16 pb-24">
        <h2 className={cn('text-6xl text-[#444444] font-bold text-center pb-16')}>How it works</h2>
        <div className="flex gap-10">
          {
            details.map((detail) => (
              <Card key={detail.title} className={cn('rounded-3xl text-center p-10 w-1/3 shadow-md hover:border-b-4')}>
                <Image src={detail.img} alt={detail.title} className={cn('mx-auto w-16')} />
                <CardHeader>
                  <CardTitle className={cn("text-center text-2xl")}>{detail.title}</CardTitle>
                </CardHeader>
                <CardContent className={cn('text-xl font-medium')}>{detail.description}</CardContent>
              </Card>
            ))
          }
        </div>
        <Image src={SideImg} alt="side-overlay" className="absolute left-0 -mt-64 scale-[1.8] opacity-50" />
      </div>
    </>
  );
}

export default HowItWorks;