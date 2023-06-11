import TermsAndConditions from '@/Components/Pages/TermsAndConditions';
import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function TermsAndConditionsPage({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="Terms and Conditions" />
        <TermsAndConditions />
      </UnAuthenticatedLayout>
    </>
  );
}
