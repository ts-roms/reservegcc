import { Link } from '@inertiajs/react';
import ApplicationLogo from '../ApplicationLogo';
import { PageProps } from '@/types';

export default function Nav({ auth }: PageProps) {
  return (
    <>
      <nav className='bg-white border-b border-[#f1bd92] shadow-lg sticky top-0 z-[1]'>
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
          <div className="flex justify-between h-20">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-11 w-auto fill-current text-gray-800" />
                </Link>
              </div>
            </div>
            <div className="my-auto flex gap-2">
              <Link
                href={'#banner'}
                className='font-semibold  w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm'
              >
                Home
              </Link>
              <Link
                href={'#how-it-works'}
                className='font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm'
              >
                What We Offer
              </Link>
              <Link
                href={'#platform'}
                className='font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm'
              >
                For Vendors
              </Link>
              {
                auth.user ? (
                  <Link
                    href={route('dashboard')}
                    className="font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href={route('register')}
                    className='font-thin w-32 text-center text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm bg-[#D69769] px-8 py-2 rounded-lg'
                  >
                    Register
                  </Link>
                )
              }
              <Link
                href={route('login')}
                className='font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}