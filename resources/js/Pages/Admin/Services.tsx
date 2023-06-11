import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Services from '@/Components/Pages/Admin/Services';

export default function ServicesPage({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Services" />
      <Services />
    </AuthenticatedLayout>
  );
}
