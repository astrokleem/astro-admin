import {
    Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text
} from '@tremor/react';

const salesPeople: {
  name: string;
  profilepicture: string;
  num_connections: number;
  wallet: string;
  location: string;
}[] = [
  {
    name: "Peter Doe",
    profilepicture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
    num_connections: 45,
    wallet: "1,000,000",
    location: "location A",
  },
  {
    name: "Lena Whitehouse",
    profilepicture:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png",
    num_connections: 35,
    wallet: "900,000",
    location: "location B",
  },
];

export default function Users() {
  return (
    <main>
      <div className="sticky top-0 mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <Text>
          View all users and their details. You can also edit their details.
        </Text>
      </div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">
                Connections Made
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                Wallet ($)
              </TableHeaderCell>
              <TableHeaderCell className="text-right">Location</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <div className="flex flex-row items-center space-x-2">
                    <img
                      src={item.profilepicture}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {item.num_connections}
                </TableCell>
                <TableCell className="text-right">{item.wallet}</TableCell>
                <TableCell className="text-right">{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}
