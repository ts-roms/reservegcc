import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Orders from '@/Components/Pages/Admin/Orders';

export default function OrdersPage({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Orders" />
      <Orders />
    </AuthenticatedLayout>
  );
}
