import { ApiClient } from '@api/axiosInstance';
import { API_URL } from '@api/config';
import { ICustomer } from '@interfaces';

export const CustomerApi = {
  getCustomerData: () => {
    const url = API_URL.CUSTOMER.DATA;
    return ApiClient.get(url);
  },
  searchData: (search: string) => {
    const url = `${API_URL.CUSTOMER.SEARCH}?phoneNumber=${search}`;
    return ApiClient.get(url);
  },
  filterData: (id: number) => {
    const url = `${API_URL.CUSTOMER.FILTER_CUSTOMER}?statusId=${id}`;
    return ApiClient.get(url);
  },

  createCustomer: (body: Partial<ICustomer>) => {
    const url = `${API_URL.CUSTOMER.DATA}`;
    return ApiClient.post(url, body);
  },

  editCustomerById: (id: number | string, body: Partial<ICustomer>) => {
    const url = `${API_URL.CUSTOMER.DATA}/${id}`;
    return ApiClient.put(url, body);
  },

  deleteCustomerById: (id: number | string) => {
    const url = `${API_URL.CUSTOMER.DATA}/${id}`;
    return ApiClient.delete(url);
  },

  exportCustomers: () => {
    const url = `${API_URL.CUSTOMER.EXPORT}`;
    return ApiClient.get(url);
  },
};
