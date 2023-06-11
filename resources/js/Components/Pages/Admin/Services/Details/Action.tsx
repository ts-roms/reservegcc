import { Button } from "@/Components/Button/button";
import { Label } from "@/Components/Label/label";
import { FunctionComponent } from "react";

interface ServiceActionProps {

}

const Action: FunctionComponent<ServiceActionProps> = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="my-auto bg-red-100 px-10">
          <Label>This service has been paused</Label>
        </div>
        <div className="flex gap-4">
          <Button type="button">Paused</Button>
          <Button type="button">Delete</Button>
        </div>
      </div>
    </>
  );
}

export default Action;