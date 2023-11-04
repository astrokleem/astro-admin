import React from 'react';
import { Link } from 'react-router-dom';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { cn } from '../../lib/utils';

function CollapsibleMenu({
  name,
  icon,
  children,
}: {
  name: string;
  icon: React.ReactNode;
  children?: any[];
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible
      className={cn(
        "w-full rounded-lg",
        isOpen && "bg-gray-100 dark:bg-gray-700 "
      )}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <CollapsibleTrigger className="w-full">
        <div className="flex flex-row items-center px-2 py-2 space-x-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>{icon}</span>
          <span>{name}</span>
        </div>
      </CollapsibleTrigger>
      {children?.map((child) => (
        <CollapsibleContent>
          <Link
            to={child.href as string}
            className="w-full cursor-pointer "
            key={child.name}
          >
            <div className="flex flex-row items-center px-2 py-2 space-x-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <span>{child.icon}</span>
              <span>{child.name}</span>
            </div>
          </Link>
        </CollapsibleContent>
      ))}
    </Collapsible>
  );
}

export default CollapsibleMenu;
