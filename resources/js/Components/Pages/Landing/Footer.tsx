import { FunctionComponent } from "react";
import AppLogoWhite from '../../../Assets/Landing/logo.png';
import Image from "@/Components/Media/Image";
import { Link } from "@inertiajs/react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <div className="bg-[#1B1B1C] text-[#364146]">
        <div className="max-w-[92rem] mx-auto">
          <div className="h-52 flex justify-between">
            {/* Applogo */}
            <div className="my-auto">
              <Image src={AppLogoWhite} alt="app-logo" className="scale-[1.4]" />
            </div>
            {/* Links */}
            <div className="my-auto gap-3 flex">
              <Link href="#" className="text-2xl font-thin hover:font-bold">Terms and Conditions</Link>
              <Link href="#" className="text-2xl font-thin hover:font-bold">Privacy Policy</Link>
              <Link href="#" className="text-2xl font-thin hover:font-bold">FAQs</Link>
              <Link href="#" className="text-2xl font-thin hover:font-bold">Help</Link>
            </div>
          </div>
        </div>
        <div className="text-center border-t-[1px] border-gray-500 h-36 flex justify-center">
          {/* Terms and condition */}
          <div className="my-auto">
            <p className="text-white text-xl">Terms and Conditions and Privacy Policy | &copy; 2022 reservecc.com. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;