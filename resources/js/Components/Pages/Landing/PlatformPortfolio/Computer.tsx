import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Card/card';
import Image from '@/Components/Media/Image';
import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';
import SimpleUiIcon from '../../../../Assets/Landing/portfolio-dashboard.png';
import FastEasyIcon from '../../../../Assets/Landing/portfolio-notes.png';
import ComputerImage from '../../../../Assets/Landing/portfolio-computer.png';

interface ComputerProps {

}

const Computer: FunctionComponent<ComputerProps> = () => {
  return (
    <>
      <div className="flex pt-24">
        <Card className={cn('w-1/3 text-right border-none !shadow-none')}>
          <div className='flex justify-end mr-6'>
            <Image src={SimpleUiIcon} alt={'simple-ui'} className={cn('w-16')} />
          </div>
          <CardHeader>
            <CardTitle className={cn("text-2xl text-[#444444]")}>{'Simple UI'}</CardTitle>
          </CardHeader>
          <CardContent className={cn('text-lg font-thin text-[#7B7B7C]')}>{'We understand the difficulty of using software to manage your business, so we have created a platform with a user-friendly and uncomplicated UI for your convenience.'}</CardContent>
        </Card>

        <div className="px-10">
          <Image src={ComputerImage} alt={'computer-image'} className={cn('')} />
        </div>

        <Card className={cn('w-1/3 text-left border-none !shadow-none')}>
          <div className="flex justify-start ml-6">
            <Image src={FastEasyIcon} alt={'fast-and-easy-registration'} className={cn('w-16')} />
          </div>
          <CardHeader>
            <CardTitle className={cn("text-3xl text-[#444444]")}>{'Fast and easy registration.'}</CardTitle>
          </CardHeader>
          <CardContent className={cn('text-lg font-thin text-[#7B7B7C]')}>{'Registering with us is a breeze! Just fill out the registration form and our team will take care of the rest - setting up your account in no time.'}</CardContent>
        </Card>
      </div>
    </>
  );
}

export default Computer;