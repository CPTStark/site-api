import { zodResolver } from '@hookform/resolvers/zod';
import { SelectValue } from '@radix-ui/react-select';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useHolidays } from '@/api/use-holidays';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const holidaysFormSchema = z.object({
  year: z.number().min(1900).max(2100),
});

type HolidaysFormSchema = z.infer<typeof holidaysFormSchema>;

export function Holidays() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const form = useForm<HolidaysFormSchema>({
    defaultValues: {
      year: new Date().getFullYear(),
    },
    resolver: zodResolver(holidaysFormSchema),
  });

  function holidaysSubmit(data: HolidaysFormSchema) {
    setYear(data.year);
  }

  const { data: dataHolidays, isLoading } = useHolidays(year);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <h1 className="text-2xl">Feriados Nacionais</h1>
      <Form {...form}>
        <form
          className="flex items-center gap-2"
          onSubmit={form.handleSubmit(holidaysSubmit)}
        >
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    value={field.value?.toString()} // 🔥 aqui o segredo
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecione o ano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {Array.from({ length: 201 }, (_, i) => i + 1900).map(
                          (ano) => (
                            <SelectItem key={ano} value={ano.toString()}>
                              {ano}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">
            <Search />
            Filtrar
          </Button>
        </form>
      </Form>
      {isLoading && (
        <div className="w-[70%] rounded border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Dia da semana</TableHead>
                <TableHead>Feriado</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={4}>
                  <Skeleton className="h-10" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
      {dataHolidays && (
        <div className="w-[70%] rounded border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Dia da semana</TableHead>
                <TableHead>Feriado</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataHolidays.map((holiday) => {
                const weekDay = new Date(holiday.date).toLocaleDateString(
                  'pt-BR',
                  { weekday: 'long' }
                );

                return (
                  <TableRow key={holiday.date}>
                    <TableCell>
                      {holiday?.date.split('-').reverse().join('/')}
                    </TableCell>
                    <TableCell>{weekDay}</TableCell>
                    <TableCell>{holiday.name}</TableCell>
                    <TableCell>
                      {holiday.type === 'national' && 'Nacional'}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
