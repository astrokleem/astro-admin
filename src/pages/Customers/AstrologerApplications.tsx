import {
    Badge, Button, Card, Color, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell,
    TableRow, Text, Title
} from '@tremor/react';

const colors: { [key: string]: Color } = {
  "Under Review": "gray",
  Pending: "yellow",
  Rejected: "rose",
  Approved: "emerald",
};

const transactions = [
  {
    transactionID: "#123456",
    user: "Lena Mayer",
    item: "Under Armour Shorts",
    status: "Approved",
    amount: "$ 49.90",
    link: "#",
  },
  {
    transactionID: "#234567",
    user: "Max Smith",
    item: "Book - Wealth of Nations",
    status: "Rejected",
    amount: "$ 19.90",
    link: "#",
  },
  {
    transactionID: "#345678",
    user: "Anna Stone",
    item: "Garmin Forerunner 945",
    status: "Pending",
    amount: "$ 499.90",
    link: "#",
  },
  {
    transactionID: "#345673",
    user: "Anna Stone",
    item: "Garmin Forerunner 945",
    status: "Under Review",
    amount: "$ 499.90",
    link: "#",
  },
];

export default function Example() {
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
              <TableHeaderCell>Full Name</TableHeaderCell>
              <TableHeaderCell>Enail</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Applied On
              </TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {transactions.map((item) => (
              <TableRow key={item.transactionID}>
                <TableCell>{item.transactionID}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>
                  <Badge color={colors[item.status]} size="xs">
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{item.amount}</TableCell>
                <TableCell>
                  <Button size="xs" variant="secondary" color="gray">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
