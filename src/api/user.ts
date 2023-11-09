import { privateApi } from './axios';

interface Wallet {
  id: number;
  balance: number;
}

interface CommHistory {
  id: number;
  total_duration: number;
  type: string;
}

export interface User {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  profilepicture: string;
  comm_history: CommHistory[];
  wallet: Wallet[];
}

const userApi = {
  listAll(type: string) {
    return async () => {
      const response = await privateApi.get(`/admin/${type}`);
      return response.data;
    };
  },
};

export default userApi;
