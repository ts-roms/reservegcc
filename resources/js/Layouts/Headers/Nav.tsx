import { Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/Dropdown/dropdown-menu';

export default function Nav({ auth }: PageProps) {
  return (
    <>
      <div className="my-auto flex gap-2">
        <Link
          href={'#banner'}
          className='font-semibold  w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:rounded-sm'
        >
          Home
        </Link>
        <Link
          href={'#how-it-works'}
          className='font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:rounded-sm'
        >
          What We Offer
        </Link>
        <Link
          href={'#platform'}
          className='font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:rounded-sm'
        >
          For Vendors
        </Link>
        {
          auth.user ? (
            <Link
              href={route('dashboard')}
              className="font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:rounded-sm"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href={route('register')}
              className='font-thin w-32 text-center text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:rounded-sm bg-[#D69769] px-8 py-2 rounded-lg'
            >
              Register
            </Link>
          )
        }
        <Link
          href={route('login')}
          className='font-thin w-32 text-center text-gray-600 my-auto hover:text-gray-900 hover:font-semibold dark:text-gray-400 dark:hover:text-white focus:rounded-sm'
        >
          Login
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>English</DropdownMenuTrigger>
          <DropdownMenuContent className='-ml-16'>
            <DropdownMenuLabel className='cursor-pointer' onClick={() => {}}>Arabic</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}