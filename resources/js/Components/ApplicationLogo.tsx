import { SVGAttributes } from 'react';
import Image from './Media/Image';
import AppLogo from '../Assets/Landing/logo-black.png';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <>
            <Image src={AppLogo} alt={'app-logo'} {...props} />
        </>
    );
}
