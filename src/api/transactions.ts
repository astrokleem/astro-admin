import { privateApi } from './axios';

const transactionApi = {
  async listAll() {
    const response = await privateApi.get("/admin/transactions");
    return response.data;
  },

  async update(id: number, data: any) {
    const response = await privateApi.put(`/admin/transactions/${id}`, data);
    return response.data;
  },

  async delete(id: number) {
    const response = await privateApi.delete(`/admin/transactions/${id}`);
    return response.data;
  },

  async answer(id: number, data: any) {
    const response = await privateApi.post(
      `/admin/transactions/${id}/answer`,
      data
    );
    return response.data;
  },

  async getOne(id: number) {
    const response = await privateApi.get(`/admin/transactions/${id}`);
    return response.data;
  },
};

export default transactionApi;
