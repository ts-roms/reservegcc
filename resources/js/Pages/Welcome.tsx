import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import Landing from '@/Components/Pages/Landing';

export default function Welcome({ auth }: PageProps) {
  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="Welcome" />
        <Landing />
      </UnAuthenticatedLayout>
    </>
  );
}
