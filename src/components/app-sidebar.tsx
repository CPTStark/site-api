import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchForm } from '@/components/search-form';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import Logo from '../assets/images/logo.svg';

const data = [
  { title: 'Consulta CNPJs', url: '/consulta-cnpj' },
  { title: 'Consulta CEPs', url: '/consulta-cep' },
  { title: 'Consulta IBGE', url: '/consulta-ibge' },
  { title: 'Feriados Nacionais', url: '/feriados' },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [search, setSearch] = React.useState('');
  const [activeUrl, setActiveUrl] = React.useState<string>(''); // começa no primeiro

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

  function handleNavigationHome() {
    navigate('/');
    setActiveUrl('');
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center">
          <button
            className="cursor-pointer"
            onClick={handleNavigationHome}
            type="button"
          >
            <img alt="" className="w-32" src={Logo} />
          </button>
        </div>
        <SearchForm
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {filteredData.map((item) => (
            <SidebarMenu key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={item.url === activeUrl}
                  onClick={() => setActiveUrl(item.url)}
                >
                  <Link to={item.url}>{item.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
