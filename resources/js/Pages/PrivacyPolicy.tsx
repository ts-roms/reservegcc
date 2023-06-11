import Privacy from '@/Components/Pages/Privacy';
import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function PrivacyPolicyPage({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {



  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="Privacy Policy" />
        <Privacy />
      </UnAuthenticatedLayout>
    </>
  );
}
