import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import FAQ from '@/Components/Pages/FAQ';

export default function FAQPage({ auth }: PageProps) {

  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="FAQ" />
        <FAQ />
      </UnAuthenticatedLayout>
    </>
  );
}
