import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export function Home() {
  const teste = {
    razao_social: 'Empresa Exemplo Ltda',
    nome_fantasia: 'Exemplo',
    cnpj: 'cnpj',
    situacao: 'ATIVA',
    uf: 'SP',
    municipio: 'São Paulo',
  };

  return (
    <div className="flex h-full w-full flex-col items-center space-y-12 px-16 py-10">
      <div className="flex items-center gap-2">
        <Badge className="flex p-2 text-xl" variant={'outline'}>
          BR
        </Badge>
        <h1 className="font-bold text-4xl">API Brasil</h1>
      </div>
      <p>
        Consulte dados brasileiros de forma rápida e gratuita. CNPJs, CEPs,
        dados do IBGE e muito mais em uma única plataforma.
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card className="p-4">
          <div className="space-y-2">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex max-w-fit items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
                🏢
              </div>
              <Badge className="flex p-2 text-lg" variant={'outline'}>
                Consulta CNPJ
              </Badge>
            </div>
            <p>
              Obtenha informações detalhadas de empresas brasileiras através do
              CNPJ. Dados atualizados da Receita Federal.
            </p>
            <Card className="p-2">
              <span>Teste agora</span>
              <Input placeholder="Digite o CNPJ..." />
              <Button>Consultar</Button>
              <Card className="overflow-auto p-5">
                <pre>{JSON.stringify(teste, null, 2)}</pre>
              </Card>
            </Card>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-2">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex max-w-fit items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
                📍
              </div>
              <Badge className="flex p-2 text-lg" variant={'outline'}>
                Consulta CNPJ
              </Badge>
            </div>
            <p>
              Obtenha informações detalhadas de empresas brasileiras através do
              CNPJ. Dados atualizados da Receita Federal.
            </p>
            <Card className="p-2">
              <span>Teste agora</span>
              <Input placeholder="Digite o CNPJ..." />
              <Button>Consultar</Button>
              <Card className="overflow-auto p-5">
                <pre>{JSON.stringify(teste, null, 2)}</pre>
              </Card>
            </Card>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-2">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex max-w-fit items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
                🗺️
              </div>
              <Badge className="flex p-2 text-lg" variant={'outline'}>
                Consulta CNPJ
              </Badge>
            </div>
            <p>
              Obtenha informações detalhadas de empresas brasileiras através do
              CNPJ. Dados atualizados da Receita Federal.
            </p>
            <Card className="p-2">
              <span>Teste agora</span>
              <Input placeholder="Digite o CNPJ..." />
              <Button>Consultar</Button>
              <Card className="overflow-auto p-5">
                <pre>{JSON.stringify(teste, null, 2)}</pre>
              </Card>
            </Card>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-2">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex max-w-fit items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
                📅
              </div>
              <Badge className="flex p-2 text-lg" variant={'outline'}>
                Consulta CNPJ
              </Badge>
            </div>
            <p>
              Obtenha informações detalhadas de empresas brasileiras através do
              CNPJ. Dados atualizados da Receita Federal.
            </p>
            <Card className="p-2">
              <span>Teste agora</span>
              <Input placeholder="Digite o CNPJ..." />
              <Button>Consultar</Button>
              <Card className="overflow-auto p-5">
                <pre>{JSON.stringify(teste, null, 2)}</pre>
              </Card>
            </Card>
          </div>
        </Card>
      </div>
      <Card className="w-full p-8">
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl">Por que escolher nossa API?</span>
          <p>Dados confiáveis e atualizados em tempo real</p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl">99.9%</span>
            <p>Uptime</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl">&lt;200ms</span>
            <p>Tempo de Resposta</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl">24/7</span>
            <p>Disponibilidade</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-4xl">100%</span>
            <p>Gratuito</p>
          </div>
        </div>
      </Card>
      <span className="mt-10 text-sm">
        © 2024 {''}
        <a
          className="text-blue-500 hover:underline"
          href="https://brasilapi.com.br/"
          rel="noopener"
          target="_blank"
        >
          API Brasil
        </a>
        {''} - Dados públicos acessíveis para todos
      </span>
    </div>
  );
}
