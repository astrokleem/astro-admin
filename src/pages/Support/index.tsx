import { Link, Outlet } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import {
    Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow
} from '@tremor/react';

import supportApi from '../../api/support';
import { Button } from '../../components/ui/button';

function Support() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["support-tickets"],
    refetchOnWindowFocus: false,
    queryFn: supportApi.listAll,
    onError: () => {
      window.location.reload();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  //   return (
  //     <div>
  //       <h1>Support</h1>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Id</th>
  //             <th>Subject</th>
  //             <th>Created At</th>
  //             <th>Updated At</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data?.tickets.map((support: any) => (
  //             <tr key={support.id}>
  //               <td>{support.id}</td>
  //               <td>
  //                 <Link to={`/support-tickets/${support.id}`}>
  //                   {support.title}
  //                 </Link>
  //               </td>
  //               <td>{support.createdAt}</td>
  //               <td>{support.updatedAt}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //       <Outlet />
  //     </div>
  //   );

  return (
    <>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Ticket Number</TableHeaderCell>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell className="text-right">
                User Name
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                User Type
              </TableHeaderCell>
              <TableHeaderCell className="text-right">Status</TableHeaderCell>
              <TableHeaderCell className="text-right"></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.tickets.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell className="text-right">
                  {item.user.firstname} {item.user.lastname}
                </TableCell>
                <TableCell className="text-right">
                  {item.userType.toUpperCase()}
                </TableCell>
                <TableCell className="text-right">
                  {item.status.toUpperCase()}
                </TableCell>
                <TableCell className="text-right">
                  <Button>
                    <Link to={`/support-tickets/${item.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Outlet />
    </>
  );
}

export default Support;
