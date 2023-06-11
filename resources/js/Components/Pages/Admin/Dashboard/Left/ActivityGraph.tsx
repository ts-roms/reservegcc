import { Card } from "@/Components/Card/card";
import Image from "@/Components/Media/Image";
import { FunctionComponent } from "react";

interface ActivityGrapProps {

}

const ActivityGraph: FunctionComponent<ActivityGrapProps> = () => {
  return (
    <>
      <Card className="mt-5">
        <div className="bg-white my-2 p-5 rounded-md">
          <div className="flex justify-between">
            <div className="flex">
              <Image src="https://via.placeholder.com/43&text=Calendar" alt="calenday" />
              <div className="ml-10">
                <p>Recent Activity</p>
                <p>0% from last month</p>
              </div>
            </div>
            <div className="">
              Loading ...
            </div>
          </div>
          {/* Graph */}
          <div className="h-[450px] text-center align-middle flex justify-center" id={'graph'}>
            <label className="m-auto h-full items-center">Loading data...</label>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ActivityGraph;