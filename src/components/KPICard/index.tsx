import { FC, Fragment, useEffect, useState } from 'react';

import { Transition } from '@headlessui/react';
import { Card, CategoryBar, Color, Legend, Metric, Text } from '@tremor/react';

import BaseCard from '../BaseCard';

export type Item = {
  title: string;
  metric: string;
  subCategoryValues: number[];
  subCategoryColors: Color[];
  subCategoryTitles: string[];
};

interface indexProps {
  item: Item;
}

const KPICard: FC<indexProps> = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <BaseCard isLoading={isLoading}>
      <Transition
        as={Fragment}
        show={!isLoading}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
      >
        <Card>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <CategoryBar
            values={item.subCategoryValues}
            colors={item.subCategoryColors}
            className="mt-4"
          />
          <Legend
            categories={item.subCategoryTitles}
            colors={item.subCategoryColors}
            className="mt-3"
          />
        </Card>
      </Transition>
    </BaseCard>
  );
};

export default KPICard;
