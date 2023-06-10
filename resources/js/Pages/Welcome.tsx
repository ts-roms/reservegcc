import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Nav from '@/Components/Headers/Nav';
import HowItWorks from '@/Components/Pages/Landing/HowItWorks';
import Platform from '@/Components/Pages/Landing/Platform';
import MobileAd from '@/Components/Pages/Landing/MobileAd';
import Footer from '@/Components/Pages/Landing/Footer';
import Banner from '@/Components/Pages/Landing/Banner';

export default function Welcome({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <Nav auth={auth} id="banner" />
      <main>
        <div className="">
          <Banner />
          <div id="how-it-works" className="bg-[#F6E9DF]">
            <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
              <HowItWorks />
            </div>
          </div>
          <div id="platform" className="">
            <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
              <Platform />
            </div>
          </div>
          <div className="bg-[#F6E9DF] h-[650px] grid">
            <div className="max-w-[92rem] m-auto">
              <MobileAd />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
