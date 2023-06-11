import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Schedules from '@/Components/Pages/Admin/Schedules';

export default function SchedulesPage({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Schedules" />
      <Schedules />
    </AuthenticatedLayout>
  );
}
