import { FunctionComponent } from 'react';
import TopService from './TopService';
import TopCustomer from './TopCustomer';

interface RightContentProps {

}

const RightContent: FunctionComponent<RightContentProps> = () => {
  return (
    <>
      <TopService />
      <TopCustomer />
    </>
  );
}

export default RightContent;