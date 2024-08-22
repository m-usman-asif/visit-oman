import { useState, useEffect } from 'react';
import axiosInstance from '../utlis/axiosInstance'; // Adjust the import path accordingly

const useFetchData = (url: string, locale: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`${url}?populate=deep&locale=${locale}`);
        setData(response);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, locale]);

  return { data, error, loading };
};

export default useFetchData;
