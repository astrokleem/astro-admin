import { QueryKey, useQuery } from '@tanstack/react-query';
import {
    Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text
} from '@tremor/react';

import userApi, { User } from '../../api/user';

export default function Users() {
  const { data, isError, isLoading } = useQuery<User[]>(
    ["customer-users"] as unknown as QueryKey,
    userApi.listAll("users"),
    {
      refetchOnWindowFocus: false,
      onError: () => {
        window.location.reload();
      },
      initialData: [],
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;
  return (
    <main>
      <div className="sticky top-0 mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Text>
          View all users and their details. You can also edit their details.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Connections Made
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                Wallet ($)
              </TableHeaderCell>
              {/* <TableHeaderCell className="text-right">Location</TableHeaderCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((item: User) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex flex-row items-center space-x-2">
                    <img
                      src={item.profilepicture}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <span>
                      {item.firstname} {item.middlename} {item.lastname}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {item.comm_history.length}
                </TableCell>
                <TableCell className="text-right">
                  {item.wallet[0]?.balance}
                </TableCell>
                {/* <TableCell className="text-right">{item.location}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
