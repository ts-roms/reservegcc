import { FunctionComponent } from "react";
import { Label } from "../Label/label";

interface RatingsProps {

}

const Ratings: FunctionComponent<RatingsProps> = () => {
  return (
    <>
      <div className="flex gap-3">
        <Label>*</Label>
        <Label>*</Label>
        <Label>*</Label>
        <Label>*</Label>
        <Label>*</Label>
      </div>
    </>
  );
}

export default Ratings;