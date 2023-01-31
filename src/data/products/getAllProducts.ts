import { ResponseData } from '../../domain/products/products';
import { fetchJson } from '../fetchJson';

export const getAllProducts = async (query = ''): Promise<ResponseData> => {
  const url = query;
  const posts = await fetchJson<ResponseData>(url);
  return posts;
};
