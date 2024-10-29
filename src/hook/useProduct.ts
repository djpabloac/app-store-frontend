import {
    useQuery
  } from '@tanstack/react-query'
  import { Response } from '../types/client';
  
  export const useProduct = () => {
    const dataQuery = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
  
        return data as Response
      }
    })
  
    return dataQuery
  }