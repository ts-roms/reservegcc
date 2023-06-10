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
      <div className="text-gray-700 text-lg">
        <Intro />
        <Summary />
        <TableOfContents />
        <Contents />
      </div>
    </>
  );
}

export default Privacy;