import Help from '@/Components/Pages/Help';
import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function HelpPage({ auth }: PageProps) {
  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="Help" />
        <Help />
      </UnAuthenticatedLayout>
    </>
  );
}
