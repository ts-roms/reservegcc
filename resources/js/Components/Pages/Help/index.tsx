import { FunctionComponent } from 'react';
import helps from '../../../Data/help.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Card/card';
import Image from '@/Components/Media/Image';
import { cn } from '@/lib/utils';

import PhoneImg from '../../../Assets/Help/phone-img.png'
import BuildingImg from '../../../Assets/Help/building-img.png'
import MailImg from '../../../Assets/Help/mail-img.png'

interface HelpProps {

}

const Help: FunctionComponent<HelpProps> = () => {
  return (
    <>
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
        <div className="pb-20 pt-16">
          <h1 className="text-5xl font-bold">Send us a message!</h1>
          <div className="flex gap-4 pt-10">
            {
              helps.map((help, index: number) => (
                <Card key={help.label} className={cn('rounded-3xl text-center p-10 w-1/3 shadow-md hover:border-b-4')}>
                  <Image src={index === 0 ? PhoneImg : index === 1 ? MailImg : BuildingImg} alt={help.label} className={cn('mx-auto w-16')} />
                  <CardHeader>
                    <CardTitle className={cn("text-center text-2xl")}>{help.label}</CardTitle>
                  </CardHeader>
                  <CardContent className={cn('text-xl font-medium')}>{help.info}</CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;