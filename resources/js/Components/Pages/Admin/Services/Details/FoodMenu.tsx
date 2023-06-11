import Image from "@/Components/Media/Image";
import { FunctionComponent } from "react";

interface FoodMenuProps {

}

const FoodMenu: FunctionComponent<FoodMenuProps> = () => {
  return (
    <>
      <div className="">
        <h2>Images</h2>
        <div className="flex gap-4">
          <Image src="https://via.placeholder.com/120x150" alt="image-1" />
          <Image src="https://via.placeholder.com/120x150" alt="image-1" />
          <Image src="https://via.placeholder.com/120x150" alt="image-1" />
          <Image src="https://via.placeholder.com/120x150" alt="image-1" />
        </div>
      </div>
    </>
  );
}

export default FoodMenu;