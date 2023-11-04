import { publicApi } from './axios';

export default async function login(credentials: {
  email: string;
  password: string;
}) {
  const { data } = await publicApi.post("/auth/admin-login", credentials);

  console.log(data);

  return data;
  // return {
  //   user: {
  //     name: "John Doe",
  //     email: "test@mail.com",
  //     id: 1,
  //   },
  //   token: "1234567890",
  // };

  // throw new Error("Not implemented");
}
