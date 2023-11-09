import { QueryKey, useQuery } from '@tanstack/react-query';
import {
    Badge, Card, Color, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text
} from '@tremor/react';

import userApi from '../../api/user';

const colors: { [key: string]: Color } = {
  "Under Review": "gray",
  pending: "yellow",
  rejected: "rose",
  approved: "emerald",
};

function isoToReadableDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString(undefined, options);
}

export default function AstrologerApplications() {
  const { data, isError, isLoading } = useQuery(
    ["customer-astrologers-applications"] as unknown as QueryKey,
    userApi.listAll("astrologer-applications"),
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
        <h1 className="text-2xl font-semibold">Applications</h1>
        <Text>
          View and manage all astrologer applications. You can also edit their
          details.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Application ID</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Phone</TableHeaderCell>
              <TableHeaderCell>Applied On</TableHeaderCell>
              <TableHeaderCell>Updated On</TableHeaderCell>
              <TableHeaderCell>Experience</TableHeaderCell>
              <TableHeaderCell>Qualifications</TableHeaderCell>
              <TableHeaderCell>Specialties</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              {/* <TableHeaderCell></TableHeaderCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>#{item.id}</TableCell>
                <TableCell>
                  <div className="flex flex-row items-center space-x-2">
                    <img
                      src={item.user.profilepicture}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <span>
                      {item.user.firstname} {item.user.middlename}{" "}
                      {item.user.lastname}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.user.phoneNumber}</TableCell>

                <TableCell>{isoToReadableDate(item.createdAt)}</TableCell>
                <TableCell>{isoToReadableDate(item.updatedAt)}</TableCell>
                <TableCell>{item.experience}</TableCell>
                <TableCell>{item.qualification}</TableCell>
                <TableCell>{item.specialties}</TableCell>
                {/* <TableCell>
                  <Button size="xs" variant="secondary" color="gray">
                    View
                  </Button>
                </TableCell> */}
                <TableCell>
                  <Badge color={colors[item.status]} size="xs">
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
