import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useCnpj } from '@/api/use-cnpj';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';

const CNPJ = z.object({
  cnpj: z
    .string()
    .min(14, { message: 'CNPJ deve ter 14 dígitos' })
    .max(14, 'CNPJ deve ter 14 dígitos'),
});

export type CNPJFormValues = z.infer<typeof CNPJ>;

export function ConsultaCnpj() {
  const [cnpj, setCnpj] = useState<string>('');

  const form = useForm<CNPJFormValues>({
    defaultValues: {
      cnpj: '',
    },
    resolver: zodResolver(CNPJ),
  });

  function cnpjSearch(data: CNPJFormValues) {
    setCnpj(data.cnpj);
  }

  const { data: dataCnpj, isLoading } = useCnpj(cnpj);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <h1 className="text-center text-2xl">
        Cadastro Nacional da Pessoa Jurídica (CNPJ)
      </h1>
      <Form {...form}>
        <form
          className="flex items-center gap-2"
          onSubmit={form.handleSubmit(cnpjSearch)}
        >
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Digite o CNPJ..." />
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
      {isLoading && (
        <Card className="w-82 p-6">
          <div className="flex flex-col items-center gap-1">
            <Skeleton className="h-6 w-[80%]" />
            <span className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              Dados da busca do CNPJ
            </span>
          </div>
          <div className="h-px w-full bg-zinc-300 dark:bg-zinc-600">{}</div>
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
          <Skeleton className="h-6 w-full" />
        </Card>
      )}
      {dataCnpj && (
        <Card className="p-6">
          <div className="flex flex-col gap-1">
            <Badge className="font-bold text-sm" variant={'outline'}>
              {dataCnpj.razao_social}
            </Badge>
            <span className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              Dados da busca do CNPJ
            </span>
          </div>
          <div className="h-px w-full bg-zinc-300 dark:bg-zinc-600">{}</div>
          <div className="space-y-2">
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">CNPJ</span>
              <p>{dataCnpj.cnpj}</p>
            </Badge>
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">Situação cadastral</span>
              <p>{dataCnpj.descricao_situacao_cadastral}</p>
            </Badge>
            <Badge
              className="flex w-full flex-col items-baseline justify-normal gap-1 p-2"
              variant="secondary"
            >
              <span className="text-sm">UF</span>
              <p>{dataCnpj.uf}</p>
            </Badge>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Visualizar dados completos</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
              <DialogHeader className="contents space-y-0 text-left">
                <DialogTitle className="border-b px-6 py-4 text-base">
                  Dados completos do CNPJ
                </DialogTitle>
                <div className="overflow-y-auto p-5">
                  <DialogDescription asChild>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-4">
                        <span>Dados empresariais</span>
                        <div className="space-y-1">
                          <Label>CNPJ</Label>
                          <span>{dataCnpj.cnpj}</span>
                        </div>
                        <div className="space-y-1">
                          <Label>Fantasia</Label>
                          <span>{dataCnpj.nome_fantasia}</span>
                        </div>
                        <div className="space-y-1">
                          <Label>Razão social</Label>
                          <span>{dataCnpj.razao_social}</span>
                        </div>
                        <div className="space-y-1">
                          <Label>Nome do responsável</Label>
                          <span>{dataCnpj.qsa[0].nome_socio}</span>
                        </div>
                        <div className="space-y-1">
                          <Label>Telefone</Label>
                          <span>{dataCnpj.ddd_telefone_1}</span>
                        </div>
                        <div className="space-y-1">
                          <Label>Porte</Label>
                          <span>{dataCnpj.porte}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                          <span>Endereço</span>
                          <div className="space-y-1">
                            <Label>CEP</Label>
                            <span>{dataCnpj.cep}</span>
                          </div>
                          <div className="space-y-1">
                            <Label>Estado</Label>
                            <span />
                          </div>
                          <div className="space-y-1">
                            <Label>Município</Label>
                            <span>{dataCnpj.municipio}</span>
                          </div>
                          <div className="space-y-1">
                            <Label>Código IBGE do Município</Label>
                            <span>{dataCnpj.codigo_municipio_ibge}</span>
                          </div>
                          <div className="space-y-1">
                            <Label>Bairro</Label>
                            <span>{dataCnpj.bairro}</span>
                          </div>
                          <div className="space-y-1">
                            <Label>Logradouro</Label>
                            <span>{dataCnpj.logradouro}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogDescription>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Card>
      )}
    </div>
  );
}
