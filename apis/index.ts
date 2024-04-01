import { API_ROOT } from '@/utils/constants';
import axios from 'axios';

export const registerAccount = async (dataAccount: {
  email: string;
  password: string;
  tel: string;
  address: string;
}) => {
  const request = await axios.post(`${API_ROOT}/api/register`, dataAccount);
  return request.data;
};
