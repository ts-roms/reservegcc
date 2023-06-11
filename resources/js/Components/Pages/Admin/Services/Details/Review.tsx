import { Label } from "@/Components/Label/label";
import Image from "@/Components/Media/Image";
import Ratings from "@/Components/Ratings";
import { FunctionComponent } from "react";

interface ReviewProps {

}

const Review: FunctionComponent<ReviewProps> = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <h2 className="text-3xl">Product Name</h2>
          <Image src="https://via.placeholder.com/180" alt="product-view" className="rounded-lg" />
        </div>
        <div className="">
          <Label className="">0 Orders</Label>
          <Ratings />
          <Label className="underline ">See Reviews</Label>
        </div>
      </div>

    </>
  );
}

export default Review;