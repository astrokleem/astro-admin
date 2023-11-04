import { privateApi } from './axios';

const supportApi = {
  async listAll() {
    const response = await privateApi.get("/support");
    return response.data;
  },

  async update(id: number, data: any) {
    const response = await privateApi.put(`/support/${id}`, data);
    return response.data;
  },

  async delete(id: number) {
    const response = await privateApi.delete(`/support/${id}`);
    return response.data;
  },

  async answer(id: number, data: any) {
    const response = await privateApi.post(`/support/${id}/answer`, data);
    return response.data;
  },

  async getOne(id: number) {
    const response = await privateApi.get(`/support/${id}`);
    return response.data;
  },
};

export default supportApi;
