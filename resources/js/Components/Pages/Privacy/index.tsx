import { FunctionComponent } from 'react';
import Intro from './Intro';
import Summary from './Summary';
import TableOfContents from './TableOfContents';
import Contents from './Contents';

interface PrivacyProps {

}

const Privacy: FunctionComponent<PrivacyProps> = () => {
  return (
    <>
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
        <div className="pb-20 pt-16">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <div className="text-gray-700 text-lg pt-10">
            <Intro />
            <Summary />
            <TableOfContents />
            <Contents />
          </div>
        </div>
      </div>

    </>
  );
}

export default Privacy;