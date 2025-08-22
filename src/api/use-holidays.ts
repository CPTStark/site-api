import { useQuery } from '@tanstack/react-query';
import { api } from '@/service/api';

interface Holiday {
  date: string;
  name: string;
  type: string;
}

export function useHolidays(year: number) {
  return useQuery<Holiday[]>({
    queryKey: ['holidays', year],
    queryFn: async () => {
      const response = await api.get(`/feriados/v1/${year}`);

      return response.data;
    },
    enabled: !!year,
  });
}
