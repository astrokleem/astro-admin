import { LayoutDashboard, PercentDiamond, Ticket, Users2, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProfileButton from '../ProfileButton';
import CollapsibleMenu from './collapsibleMenu';

const links = [
  { name: "Dashboard", href: "dashboard", icon: <LayoutDashboard /> },
  {
    name: "Operations",
    icon: <Wrench />,
    children: [
      {
        name: "Support Tickets",
        href: "support-tickets",
        icon: <Ticket />,
      },
    ],
  },
  // { name: "Marketing", href: "marketing", icon: <FileSpreadsheet /> },
  {
    name: "Sales",
    icon: <PercentDiamond />,
    children: [
      // { name: "Orders", href: "orders", icon: <PercentDiamond /> },
      { name: "Transactions", href: "transactions", icon: <PercentDiamond /> },
    ],
  },
  {
    name: "Customers",
    icon: <Users2 />,
    children: [
      { name: "Users", href: "users", icon: <Users2 /> },
      { name: "Astrologers", href: "astrologers", icon: <Users2 /> },
      {
        name: "Astrologer Applications",
        href: "astrologer-applications",
        icon: <Users2 />,
      },
    ],
  },
  // { name: "Reports", href: "reports", icon: <TableProperties /> },
];

function Sidebar() {
  // const [isVisible, setIsVisible] = useState(true);
  // const { setTheme } = useTheme();
  // const notify = () => {
  //   // addNotification({
  //   //   title: "Warning",
  //   //   subtitle: "Please fill it",
  //   //   message: "You have to enter name",
  //   //   theme: "red",
  //   //   closeButton: "X",
  //   // });
  // };

  return (
    <aside className="w-[280px] min-h-screen p-4 dark:text-white text-black bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 fixed left-0 z-10">
      <div className="flex flex-col justify-between h-screen py-6">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Astrokleem</h2>
          {/* <button onClick={() => setTheme("light")}>Notif</button> */}
          <ul className="w-full">
            {links.map((link) => (
              <li className="my-2">
                {link.children ? (
                  <CollapsibleMenu
                    name={link.name}
                    icon={link.icon}
                    children={link.children}
                  />
                ) : (
                  <Link
                    to={link.href as string}
                    className="w-full cursor-pointer "
                    key={link.name}
                  >
                    <div className="flex flex-row items-center px-2 py-2 space-x-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ProfileButton />
      </div>
    </aside>
  );
}

export default Sidebar;
