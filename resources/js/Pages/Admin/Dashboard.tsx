import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Dashboard from '@/Components/Pages/Admin/Dashboard';

export default function DashboardPage({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Dashboard" />
      <Dashboard />
    </AuthenticatedLayout>
  );
}
