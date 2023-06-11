import { FunctionComponent } from 'react';
import OccasionService from './OccasionService';
import OccasionDetails from './OccasionDetails';

interface ServicesProps {

}

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <>
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lx:px-8">
        <div className="flex gap-4 pt-10">
          <div className="w-1/2">
            <OccasionService />
          </div>
          <div className="w-1/2">
            <OccasionDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;