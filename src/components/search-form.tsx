import { Search } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from '@/components/ui/sidebar';

interface SearchFormProps extends React.ComponentProps<'form'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({ value, onChange, ...props }: SearchFormProps) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label className="sr-only" htmlFor="search">
            Search
          </Label>
          <SidebarInput
            className="pl-8"
            id="search"
            onChange={onChange}
            placeholder="Pesquisar..."
            value={value}
          />
          <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-2 size-4 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
