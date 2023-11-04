import { CashIcon, TicketIcon, UserGroupIcon } from "@heroicons/react/solid"
import {
  Badge,
  Button,
  Card,
  CategoryBar,
  Color,
  Flex,
  Grid,
  Icon,
  Legend,
  Metric,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title
} from "@tremor/react"

import { ApplicationsSheet } from "../Customers/Components/applicationSheet"

const colors: { [key: string]: Color } = {
  cancelled: "gray",
  failed: "rose",
  paid: "emerald",
  pending: "yellow",
};

type Categories = {
  title: string;
  metric: string;
  icon?: unknown;
  color: Color;
} & (
  | {
      type: "categorical";
      subCategoryValues: number[];
      subCategoryColors: string[];
      subCategoryTitles: string[];
    }
  | {
      type?: "text";
    }
);

const categories: Categories[] = [
  {
    title: "Sum of Successful Payments",
    metric: "74576",
    color: "indigo",
  },
  {
    title: "Total Transactions",
    metric: "26",
    color: "fuchsia",
    type: "categorical",
    subCategoryValues: [18, 3, 1],
    subCategoryTitles: ["Successful", "Failed", "Pending"],
    subCategoryColors: ["emerald", "rose", "amber"],
  },
  {
    title: "Count of Unique Users",
    metric: "1",
    color: "amber",
  },
];

const transactions = [
  {
    orderId: "order_MbrqIK6OYyvuX5",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 59000,
    currency: "INR",
  },
  {
    orderId: "order_MbryCfQHNQQRxW",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "failed",
    amount: 236000,
    currency: "INR",
  },
  {
    orderId: "order_MbsA8E8KGLpdUI",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 59000,
    currency: "INR",
  },
  {
    orderId: "order_MbselyvW32QZyv",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 35400,
    currency: "INR",
  },
  {
    orderId: "order_Mbsh8bZJrdeKhg",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_MbsiZ0DLbNtVtm",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_Mbsl3soibYDcPM",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "failed",
    amount: 11800,
    currency: "INR",
  },
  {
    orderId: "order_Mbsux1q07E0xMq",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 59000,
    currency: "INR",
  },
  {
    orderId: "order_Mc6aqKl0R7RGgd",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 11800,
    currency: "INR",
  },
  {
    orderId: "order_Mc6xfEaSTqvyqJ",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: null,
    status: "cancelled",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_Mc6z7JskZB6YaH",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: null,
    status: "cancelled",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_Mc7ll3Ftpan3rj",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_Mc7nTP3HdwkJCm",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: null,
    status: "cancelled",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_McwCZIDqyxgNYM",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 1180000,
    currency: "INR",
  },
  {
    orderId: "order_McwkihgiKPTusW",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_McwlsojjLU6uvc",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 11800,
    currency: "INR",
  },
  {
    orderId: "order_Md0o9opjvvunyZ",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 35400,
    currency: "INR",
  },
  {
    orderId: "order_Md4BanjapgP3re",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_Md5j0idmgQXLUX",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "failed",
    amount: 11800,
    currency: "INR",
  },
  {
    orderId: "order_Md5kRiLf88d1Bj",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900000,
    currency: "INR",
  },
  {
    orderId: "order_MeF480LtFzPbKn",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: null,
    status: "cancelled",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_MerosXRQKbGMws",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 59000,
    currency: "INR",
  },
  {
    orderId: "order_MipSds9s08QDRK",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_MjgMRH7EP9dpz0",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_MjgwzeaegbfkKl",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: "1:wallet_recharge",
    status: "paid",
    amount: 5900,
    currency: "INR",
  },
  {
    orderId: "order_MkBObDEtqnPA9j",
    user: {
      firstname: "Divyansh",
      lastname: "Gupta",
    },
    paid_for: null,
    status: "pending",
    amount: 5900,
    currency: "INR",
  },
];

export default function Transactions() {
  return (
    <main>
      <div className="sticky top-0 mb-4">
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <Text>Make informed decisions based on the below metrics.</Text>
      </div>
      <div className="flex flex-col space-y-4">
        <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
          {categories.map((item) => (
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
              {transactions.map((item) => (
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
