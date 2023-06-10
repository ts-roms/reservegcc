import ApplicationLogo from "@/Components/ApplicationLogo";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import Nav from "./Nav";


export default function Header({ auth }: PageProps) {

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
            <Nav auth={auth} />
          </div>
        </div>
      </nav>
    </>
  )

}