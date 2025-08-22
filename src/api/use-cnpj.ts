import { useQuery } from '@tanstack/react-query';
import { api } from '@/service/api';

interface CNPJ {
  razao_social: string;
  nome_fantasia: string;
  cnpj: string;
  uf: string;
  numero: string;
  cep: string;
  logradouro: string;
  bairro: string;
  municipio: string;
  codigo_municipio_ibge: string;
  descricao_situacao_cadastral: string;
  ddd_telefone_1: string;
  porte: string;
  qsa: [{ nome_socio: string }];
}

export function useCnpj(cnpj: string) {
  return useQuery({
    queryKey: ['cnpj', cnpj],
    queryFn: async () => {
      const response = await api.get<CNPJ>(`cnpj/v1/${cnpj}`);

      return response.data;
    },
    enabled: !!cnpj,
  });
}
