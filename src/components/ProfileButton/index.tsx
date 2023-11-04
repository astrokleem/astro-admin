import {
    Check, Cloud, LogOut, Moon, Palette, Plus, Settings, Sun, User, Users
} from 'lucide-react';

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub,
    DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/theme-provider';
import useAuthStore from '@/features/auth';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function ProfileButton() {
  const { setTheme } = useTheme();
  const { user, logOut } = useAuthStore((state) => state);

  return (
    <div className="flex flex-row items-center px-2 py-2 space-x-2 rounded-lg cursor-pointer justify-normal hover:bg-gray-200 dark:hover:bg-gray-700">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-col">
            <h3 className="font-semibold">{user?.name}</h3>
            <h4 className="text-sm font-semibold">{user?.email}</h4>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[260px] -ml-8 mb-4">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <div className="mr-2">
                  {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
                  <Palette className="w-4 mr-2" />
                </div>
                <span>Theme</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <button onClick={() => setTheme("dark")} className="w-full">
                    <DropdownMenuItem>
                      <Moon className="w-4 h-4 mr-2" />
                      <span>Dark</span>
                      <DropdownMenuShortcut className="scale-0 dark:scale-100">
                        <Check className="w-4" />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </button>
                  <button onClick={() => setTheme("light")} className="w-full">
                    <DropdownMenuItem>
                      <Sun className="w-4 h-4 mr-2" />
                      <span>Light</span>
                      <DropdownMenuShortcut className="scale-100 dark:scale-0">
                        <Check className="w-4" />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </button>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Users className="w-4 h-4 mr-2" />
              <span>Teams</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus className="w-4 h-4 mr-2" />
              <span>New Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Cloud className="w-4 h-4 mr-2" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logOut}>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ProfileButton;
