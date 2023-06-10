import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import terms from '../Data/terms-and-condition.json';

export default function TermsAndConditions({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="Terms and Conditions" />
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
          <div className="pb-20 pt-16">
            <h1 className="text-5xl font-bold text-gray-600">Terms and Conditions</h1>
            <div className="">
              {
                terms.map((term) => (
                  <div>
                    <h2 className="text-4xl font-bold text-gray-600 pt-6">{term.title}</h2>
                    <p className="text-xl text-gray-500">{term.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </UnAuthenticatedLayout>
    </>
  );
}
