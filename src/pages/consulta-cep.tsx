import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useCep } from '@/api/use-cep';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const cepSchema = z.object({
  cep: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 8, { message: 'CEP deve ter 8 dígitos' }),
});

type CepFormValues = z.infer<typeof cepSchema>;

export function ConsultaCep() {
  const [cep, setCep] = useState('');

  const form = useForm<CepFormValues>({
    defaultValues: {
      cep: '',
    },
    resolver: zodResolver(cepSchema),
  });

  function cepSearch(data: CepFormValues) {
    setCep(data.cep);
  }

  const { data: dataCep } = useCep(cep);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <h1 className="text-2xl">Consulta de CEP</h1>
      <Form {...form}>
        <form
          className="flex items-center gap-2"
          onSubmit={form.handleSubmit(cepSearch)}
        >
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Digite o CEP..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <Search />
            Buscar
          </Button>
        </form>
      </Form>
      {dataCep && (
        <Card className="w-82 p-6">
          <div>
            <p>Resultado da consulta CEP:</p>
            <Badge variant={'outline'}>CEP: {dataCep.cep}</Badge>
          </div>
          <div className="h-px w-full bg-zinc-300 dark:bg-zinc-600">{}</div>
          <div className="space-y-2">
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">Estado</span>
              <p>{dataCep.state}</p>
            </Badge>
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">Cidade</span>
              <p>{dataCep.city}</p>
            </Badge>
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">Bairro</span>
              <p>{dataCep.neighborhood}</p>
            </Badge>
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">Rua</span>
              <p>{dataCep.street}</p>
            </Badge>
          </div>
        </Card>
      )}
    </div>
  );
}
