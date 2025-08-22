import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { api } from '@/service/api';

const ibgeSchema = z.object({
  ibge: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 7, { message: 'IBGE deve ter 7 dígitos' }),
});

type IbgeFormValues = z.infer<typeof ibgeSchema>;

export function ConsultaIbge() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <h1 className="text-2xl">Consulta IBGE</h1>
      <p>Funcionalidade ainda não implementada.</p>
    </div>
  );
  // const [ibge, setIbge] = useState("");

  // const form = useForm<IbgeFormValues>({
  //     defaultValues: {
  //         ibge: "",
  //     },
  //     resolver: zodResolver(ibgeSchema)
  // })

  // function ibgeSearch(data: IbgeFormValues) {
  //     console.log(data)
  //     setIbge(data.ibge);
  // }

  // const { data } = useQuery({
  //     queryKey: ["ibge", ibge],
  //     queryFn: async () => {
  //         const response = await api.get("")

  //         return response.data;
  //     }
  // })

  // return (
  //     <div className="flex items-center justify-center py-12 flex-col space-y-8">
  //         <h1 className="text-2xl">Consulta IBGE</h1>
  //         <Form {...form}>
  //             <form onSubmit={form.handleSubmit(ibgeSearch)} className="flex items-center gap-2">
  //                 <FormField control={form.control} name="ibge" render={({ field }) => (
  //                     <FormItem>
  //                         <FormControl>
  //                             <Input {...field} placeholder="Digite o código IBGE..." />
  //                         </FormControl>
  //                         <FormMessage />
  //                     </FormItem>
  //                 )} />
  //                 <Button type="submit">
  //                     <Search />
  //                     Buscar
  //                 </Button>
  //             </form>
  //         </Form>
  //     </div>
  // )
}
