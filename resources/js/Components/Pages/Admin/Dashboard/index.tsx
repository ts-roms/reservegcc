import { FunctionComponent } from 'react';
import LeftContent from './Left';
import RightContent from './Right';

interface DashboardProps {

}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
        <div className="flex gap-4 pt-10">
          <div className="w-9/12">
            <LeftContent />
          </div>
          <div className="w-1/4">
            <RightContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;