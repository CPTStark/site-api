import { useQuery } from '@tanstack/react-query';
import { api } from '@/service/api';

interface CepResponse {
  cep: string;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
}

export function useCep(cep: string) {
  return useQuery({
    queryKey: ['cep', cep],
    queryFn: async () => {
      const response = await api.get<CepResponse>(`/cep/v1/${cep}`);

      return response.data;
    },
    enabled: !!cep,
  });
}
