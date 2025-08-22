import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import Logo from '../assets/images/logo.svg';

export function NotFound() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/');
  }

  function handleContactSupport() {
    window.open('https://www.linkedin.com/in/gabrielprestesperez/', '_blank');
  }

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <img alt="" className="w-80" src={Logo} />
        <p className="font-semibold text-base text-indigo-600 dark:text-indigo-400">
          404
        </p>
        <h1 className="mt-4 text-balance font-semibold text-5xl text-gray-900 tracking-tight sm:text-7xl dark:text-white">
          Página não encontrada
        </h1>
        <p className="mt-6 text-pretty font-medium text-gray-500 text-lg sm:text-xl/8 dark:text-gray-400">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={handleGoBack}>Voltar para a página inicial</Button>
          <Button onClick={handleContactSupport} variant="outline">
            Contato do suporte
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
