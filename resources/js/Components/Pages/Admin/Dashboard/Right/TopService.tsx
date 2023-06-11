import { Card, CardHeader, CardTitle } from '@/Components/Card/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/Table/table';
import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface TopServiceProps {

}

const TopService: FunctionComponent<TopServiceProps> = () => {
  return (
    <>
      <Card className=''>
        <CardHeader className='pb-0'>
          <CardTitle className={cn("text-xl")}>Top Service</CardTitle>
        </CardHeader>
        <div className="px-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Name</TableHead>
                <TableHead className="w-1/4">No. Of Orders</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
}

export default TopService;