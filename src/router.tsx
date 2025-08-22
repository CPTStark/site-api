import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/default-layout';
import { NotFound } from './pages/404';
import { ConsultaCep } from './pages/consulta-cep';
import { ConsultaCnpj } from './pages/consulta-cnpj';
import { ConsultaIbge } from './pages/consulta-ibge';
import { Holidays } from './pages/holidays';
import { Home } from './pages/home';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<Home />} path="/" />
        <Route element={<ConsultaCnpj />} path="consulta-cnpj" />
        <Route element={<ConsultaCep />} path="consulta-cep" />
        <Route element={<ConsultaIbge />} path="consulta-ibge" />
        <Route element={<Holidays />} path="feriados" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
