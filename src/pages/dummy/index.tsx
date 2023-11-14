import { Link } from 'react-router-dom';

import { ShoppingBagIcon, UsersIcon } from '@heroicons/react/solid';
import { Card, Flex, Grid, Icon, Text, Title } from '@tremor/react';

const categories = [
  {
    title: "Sales",
    text: `Sales are activities related to selling or the number of goods sold in a given targeted time period. `,
    icon: ShoppingBagIcon,
    link: "/transactions",
  },
  // {
  //   title: "Profit",
  //   text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  //       tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
  //   icon: CashIcon,
  // },
  {
    title: "Customers",
    text: `A customer is an individual or business that purchases another company's goods or services.`,
    icon: UsersIcon,
    link: "/users",
  },
  // {
  //   title: "Orders",
  //   text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  //       tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
  //   icon: ShoppingCartIcon,
  // },
];

export default function Dummy() {
  return (
    <main>
      <div className="sticky top-0 mb-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Text>Make informed decisions based on the below metrics.</Text>
      </div>
      <Grid numItemsSm={2} className="gap-6">
        {categories.map((item) => (
          <Card key={item.title}>
            <Icon variant="light" icon={item.icon} size="lg" color="blue" />
            <Title className="mt-6">{item.title}</Title>
            <Text className="mt-2">{item.text}</Text>
            <Flex className="pt-4 mt-6 border-t">
              <Link to={item.link}>View more</Link>
            </Flex>
          </Card>
        ))}
      </Grid>
    </main>
  );
}
