import Link from '@/Components/Link';
import { FunctionComponent } from 'react';

interface TableOfContentsProps {

}

const TableOfContents: FunctionComponent<TableOfContentsProps> = () => {
  return (
    <>
      <div className="pt-10" id="table-of-contents">
        <h2 className="uppercase text-xl font-bold">Table of Contents</h2>
        <ul className="list-decimal uppercase pl-5 pt-6">
          <li><Link href="#content-1" className="">What information do we collect?</Link></li>
          <li><Link href="#content-2" className="">Do we process your information?</Link></li>
          <li className="text-blue-400"><Link href="#content-3" className="text-blue-600">When and with whom do we share your personal information?</Link></li>
          <li><Link href="#content-4" className="">Do we use cookies and other tracking technologies?</Link></li>
          <li><Link href="#content-5" className="">How do we handle social logins?</Link></li>
          <li><Link href="#content-6" className="">How long do we keep your information?</Link></li>
          <li className="text-blue-400"><Link href="#content-7" className="text-blue-600">What are your privary rights?</Link></li>
          <li><Link href="#content-8" className="">Controls for do-not-track features</Link></li>
          <li><Link href="#content-9" className="">Do california residents have specific privacy rights?</Link></li>
          <li><Link href="#content-10" className="">Do we make updates to this notice?</Link></li>
          <li><Link href="#content-11" className="">How can you contact us about this notice?</Link></li>
          <li><Link href="#content-12" className="">How can you review, update or delete the data we collection from you?</Link></li>
        </ul>
      </div>
    </>
  );
}

export default TableOfContents;