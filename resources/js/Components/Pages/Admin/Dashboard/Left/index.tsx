import { FunctionComponent } from 'react';
import Statistics from './Statistics';
import ActivityGraph from './ActivityGraph';
import Orders from './Orders';

interface LeftContentProps {

}

const LeftContent: FunctionComponent<LeftContentProps> = () => {
  return (
    <>
      <Statistics />
      <ActivityGraph />
      <Orders />
    </>
  );
}

export default LeftContent;