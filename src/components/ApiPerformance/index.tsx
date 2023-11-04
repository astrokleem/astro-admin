import { useEffect, useState } from 'react';

import { CheckCircleIcon } from '@heroicons/react/solid';
import {
    Bold, Card, Color, Divider, Flex, Icon, LineChart, Text, Title, Tracker
} from '@tremor/react';

import BaseCard from '../BaseCard';

export interface Latency {
  Date: string;
  "Avg. Response Time": number;
}

const latency: Latency[] = [
  {
    Date: "01.01.2022",
    "Avg. Response Time": 0.95,
  },
  {
    Date: "02.01.2022",
    "Avg. Response Time": 0.01,
  },
  // ...
  {
    Date: "07.09.2022",
    "Avg. Response Time": 0.08,
  },
];

export interface Availablility {
  color: Color;
  tooltip: string;
}

const availability: Availablility[] = [
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
];

function ApiPerformance() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);
  return (
    <BaseCard isLoading={isLoading}>
      <Card>
        <div className="text-center">
          <Icon
            icon={CheckCircleIcon}
            variant="light"
            size="xl"
            color="emerald"
          />
          <Title className="mt-2">All services are online</Title>
          <Text className="text-center">As of September 7th, 1:46 PM</Text>
        </div>

        <Divider />

        <Flex className="mt-4 whitespace-nowrap">
          <Flex justifyContent="start" className="space-x-2">
            <Icon icon={CheckCircleIcon} color="emerald" />
            <Text>
              <Bold>API</Bold>
            </Text>
          </Flex>
          <Text>99.87% uptime</Text>
        </Flex>
        <Tracker data={availability} className="mt-2" />
        <Title className="mt-6">Avg. response time per day</Title>
        <LineChart
          className="mt-4 h-80"
          data={latency}
          index="Date"
          categories={["Avg. Response Time"]}
          colors={["gray"]}
          valueFormatter={(number: number) =>
            `${Intl.NumberFormat("us").format(number).toString()}s`
          }
          showLegend={false}
          yAxisWidth={48}
        />
      </Card>
    </BaseCard>
  );
}

export default ApiPerformance;
