import axios from 'axios';
import { Product } from '../types/Product';

const API_URL = 'http://localhost:5106/api'; // Adjust this to match your backend URL

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};