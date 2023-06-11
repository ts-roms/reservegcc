import { FunctionComponent } from 'react';
import { Card, CardHeader, CardTitle } from '@/Components/Card/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/Table/table';
import { Button } from '@/Components/Button/button';
import { cn } from '@/lib/utils';

interface OrdersProps {

}

const Orders: FunctionComponent<OrdersProps> = () => {
  return (
    <>
      <Card className='mt-5 pb-5'>
        <CardHeader className='pb-0'>
          <CardTitle className={cn("text-xl")}>Latest Orders</CardTitle>
        </CardHeader>
        <div className="px-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Name</TableHead>
                <TableHead className="w-1/4">Order ID</TableHead>
                <TableHead className="w-1/4">Order Type</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">
                  <Button type="button">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
}

export default Orders;