import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  className,
  ...rest
}) => {
  return (
    <>
      <div className="">
        <img src={src} alt={alt} className={cn('', className)} {...rest} />
      </div>
    </>
  );
}

export default Image;