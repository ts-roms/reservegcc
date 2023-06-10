import Privacy from '@/Components/Pages/Privacy';
import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function PrivacyPolicy({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {



  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="Privacy Policy" />
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
          <div className="pb-20 pt-16">
            <h1 className="text-5xl font-bold">Privacy Policy</h1>
            <div className="pt-10">
              <Privacy />
            </div>
          </div>
        </div>
      </UnAuthenticatedLayout>
    </>
  );
}
