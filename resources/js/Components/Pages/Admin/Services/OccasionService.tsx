import { Card } from "@/Components/Card/card";
import Image from "@/Components/Media/Image";
import { Table, TableBody, TableCell, TableRow } from "@/Components/Table/table";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";
import { FunctionComponent } from "react";

interface OccasionServiceProps {

}



const OccasionService: FunctionComponent<OccasionServiceProps> = () => {

  return (
    <>
      <Card className="bg-white min-h-[280px] p-5">

        <div className="flex justify-between">
          <div className="my-auto">
            <h3 className="text-lg">Services</h3>
          </div>
          <div className="">
            <label>Sort By</label>
            <TextInput className="ml-3 placeholder:font-thin" placeholder="Search..." />
          </div>
        </div>

        <div className="">
          <div className="flex gap-4">
            <Link href="#" className="hover:underline active:underline underline">Published</Link>
            <Link href="#" className="hover:underline">Paused</Link>
            <Link href="#" className="hover:underline">Saved</Link>
          </div>
        </div>

        <div className="px-5">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <>
                    <div className="flex">
                      <div className="">
                        <Image src="https://via.placeholder.com/120&text=Service" alt="..." className="rounded-lg" />
                      </div>
                      <div className="pl-4">
                        <h3>Service Name</h3>
                        <p>Location</p>
                        <div className="flex my-auto">
                          <label>0.0</label>
                          <div className="flex pl-2">
                            <div className="">*</div>
                            <div className="">*</div>
                            <div className="">*</div>
                            <div className="">*</div>
                            <div className="">*</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </TableCell>
                <TableCell>
                  <>
                    <div className="border-l-2 pl-4">
                      <h3>Occasion Type</h3>
                      <div>Catering</div>
                    </div>
                  </>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
}



export default OccasionService;