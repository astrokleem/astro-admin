import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function Topbar() {
  return (
    <header className="fixed top-0 bg-white border-b border-gray-200 left-[280px] z-12 w-100">
      <div className="flex flex-row justify-end w-full p-4">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
