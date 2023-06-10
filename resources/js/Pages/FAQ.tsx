import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/Accordion/accordion';
import UnAuthenticatedLayout from '@/Layouts/UnAuthenticatedLayout';
import { cn } from '@/lib/utils';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import faqs from '../Data/faq.json'

export default function FAQ({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

  return (
    <>
      <UnAuthenticatedLayout auth={auth}>
        <Head title="FAQ" />
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
          <div className="pb-20 pt-16">
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
            <div className="">

              <Accordion type="single" collapsible className='w-full pt-16'>
                {
                  faqs.map((faq) => (
                    <AccordionItem value={faq.value} key={faq.value} className={cn('py-2')}>
                      <AccordionTrigger className="hover:no-underline text-2xl hover:text-blue-300 focus:text-blue-300">{faq.trigger}</AccordionTrigger>
                      <AccordionContent className="text-xl text-gray-800">{faq.content}</AccordionContent>
                    </AccordionItem>
                  ))
                }

              </Accordion>
            </div>
          </div>
        </div>
      </UnAuthenticatedLayout>
    </>
  );
}
