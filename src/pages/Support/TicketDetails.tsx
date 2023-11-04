import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle
} from '@/components/ui/sheet';
import { useQuery } from '@tanstack/react-query';

import supportApi from '../../api/support';

function UserInfo({ user }: any) {
  return (
    <div className="w-[350px]">
      <Label htmlFor="username" className="text-right">
        User Information
      </Label>
      <div>
        <dl className="divide-y divide-gray-600">
          <div className="flex flex-row px-4 py-6 space-x-4">
            <dt className="text-sm font-medium leading-6 text-gray-200">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
              {user.firstname} {user.lastname}
            </dd>
          </div>
          <div className="flex flex-row px-4 py-6 space-x-4">
            <dt className="text-sm font-medium leading-6 text-gray-200">
              Account Type
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
              {user.userType}
            </dd>
          </div>
          <div className="flex flex-col px-4 py-6 space-y-4">
            <div>
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Date of Birth
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
                {user.date_of_birth}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium leading-6 text-gray-200">
                Time of Birth
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
                {user.time_of_birth}
              </dd>
            </div>
          </div>
          <div className="flex flex-row px-4 py-6 space-x-4">
            <dt className="text-sm font-medium leading-6 text-gray-200">
              Place of Birth
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">
              {user.place_of_birth}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function TicketDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(
    ["support-tickets", id],
    () => supportApi.getOne(Number(id)),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isError) return <div>Error...</div>;

  return (
    <Sheet
      defaultOpen
      onOpenChange={(isOpen) => {
        if (!isOpen) window.history.back();
      }}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ticket #{id}</SheetTitle>
          <SheetDescription>View and edit ticket details</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={data?.ticket.title}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="content" className="text-right">
                Content
              </Label>
              <Input
                id="content"
                value={data?.ticket.content}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4 pt-4 border-t border-gray-200">
              <UserInfo user={data?.ticket.user} />
            </div>
          </div>
        )}
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              onClick={() => {
                window.history.back();
              }}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default TicketDetails;
