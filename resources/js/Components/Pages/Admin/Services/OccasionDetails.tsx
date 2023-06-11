import { Badge } from "@/Components/Badge/badge";
import { Card } from "@/Components/Card/card";
import { Label } from "@/Components/Label/label";
import Image from "@/Components/Media/Image";
import { FunctionComponent } from "react";
import Action from "./Details/Action";
import Review from "./Details/Review";
import { Button } from "@/Components/Button/button";
import Description from "./Details/Description";
import FoodMenu from "./Details/FoodMenu";

interface OccasionDetailsProps {

}

const OccasionDetails: FunctionComponent<OccasionDetailsProps> = () => {
  return (
    <>
      <Card className="bg-white min-h-[280px] p-5">
        <Action />
        <Review />
        <Description title="Service Type" service={<Badge>Catering</Badge>} />
        <Description title="Location" service={<>
          <div className="flex gap-3">
            <Image src="https://via.placeholder.com/18" alt="location" />
            <Label>Doha Qatar</Label>
          </div>
        </>} />
        <Description title="Occasion Type" service={<Badge>Catering</Badge>} />
        <Description title="Description" service={<p>Best Cuisine in town</p>} />
        <FoodMenu />
        <Description title="Details" service={<>
          <div className="flex gap-4">
            <div className="">
              <Label>Capacity</Label>
              <p><Badge>0</Badge></p>

            </div>
            <div className="">
              <Label>Capacity</Label>
              <p><Badge>0</Badge></p>
            </div>
          </div>
        </>} />

        <Description title="Availability" service={<>
          <div className="">
            <div className="">
              <Label>Available Date</Label>
              <p><Badge>0</Badge></p>
            </div>
            <div className="">
              <Label>UnAvailable Date</Label>
              <p><Badge>0</Badge></p>
            </div>
          </div>
        </>} />

        <Description title="Available Payment Plans" service={
          <>
            <div className="">
              <h2>Per Person</h2>
              <Badge>150</Badge>
            </div>
          </>
        } />

        {/* Actiom Button */}
        <div className="">
          <Button type="button">Edit</Button>
        </div>
      </Card>
    </>
  );
}



export default OccasionDetails;