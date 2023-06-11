import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function OrdersPage({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Dashboard" />

      <div className="container mx-auto py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You're logged in!</div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
