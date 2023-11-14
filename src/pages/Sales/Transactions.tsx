import { QueryKey, useQuery } from '@tanstack/react-query';
import {
    Badge, Button, Card, CategoryBar, Color, Flex, Grid, Legend, Metric, Table, TableBody,
    TableCell, TableHead, TableHeaderCell, TableRow, Text, Title
} from '@tremor/react';

import transactionApi from '../../api/transactions';
import { ApplicationsSheet } from '../Customers/Components/applicationSheet';

const colors: { [key: string]: Color } = {
  cancelled: "gray",
  failed: "rose",
  paid: "emerald",
  pending: "yellow",
};

export default function Transactions() {
  const { data, isError, isLoading } = useQuery<any>(
    ["transactions"] as unknown as QueryKey,
    transactionApi.listAll,
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
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <Text>Make informed decisions based on the below metrics.</Text>
      </div>
      <div className="flex flex-col space-y-4">
        <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
          {data?.paymentSummary?.map((item: any) => (
            <Card
              key={item.title}
              decoration="top"
              decorationColor={item.color}
            >
              {item.type === "categorical" ? (
                <>
                  <Text>{item.title}</Text>
                  <Metric>{item.metric}</Metric>
                  <CategoryBar
                    values={item.subCategoryValues}
                    colors={item.subCategoryColors as Color[]}
                    className="mt-4"
                  />
                  <Legend
                    categories={item.subCategoryTitles}
                    colors={item.subCategoryColors as Color[]}
                    className="mt-3"
                  />
                </>
              ) : (
                <Flex justifyContent="start" className="space-x-4">
                  <div className="truncate">
                    <Text>{item.title}</Text>
                    <Metric className="truncate">{item.metric}</Metric>
                  </div>
                </Flex>
              )}
            </Card>
          ))}
        </Grid>
        <Card>
          <Flex justifyContent="start" className="space-x-2">
            <Title>Wallet Recharges</Title>
            {/* <Badge color="gray">8</Badge> */}
          </Flex>
          <Text className="mt-2">
            Overview of this month's wallet recharges
          </Text>

          <Table className="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Transaction ID</TableHeaderCell>
                <TableHeaderCell>User</TableHeaderCell>
                <TableHeaderCell>Item</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell className="text-right">Amount</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Currency
                </TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.trasactionDetails?.map((item: any) => (
                <TableRow key={item.orderId}>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>
                    {item.user.firstname} {item.user.lastname}
                  </TableCell>
                  <TableCell>
                    {item.paid_for?.split(":")[1].replace("_", " ")}
                  </TableCell>
                  <TableCell>
                    <Badge color={colors[item.status]} size="xs">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {item.amount / 100}
                  </TableCell>
                  <TableCell className="text-right">{item.currency}</TableCell>
                  <TableCell>
                    <ApplicationsSheet>
                      <Button size="xs" variant="secondary" color="gray">
                        View details
                      </Button>
                    </ApplicationsSheet>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
}
