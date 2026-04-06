import { useState } from 'react';
import type { IIncidente } from './@types/IIncidente';
import { Header } from './components/Layout/Header';
import { CardIncidente } from './components/Dashboard/CardIncidente';
import './App.css';

const dadosIniciais: IIncidente[] = [
  { id: 1, titulo: 'Tentativa de Login Força Bruta', criticidade: 'Alta', resolvido: false },
  { id: 2, titulo: 'Acesso suspeito via VPN', criticidade: 'Média', resolvido: false },
  { id: 3, titulo: 'Falha no backup diário do Banco', criticidade: 'Baixa', resolvido: true },
];

function App() {
  const [incidentes, setIncidentes] = useState<IIncidente[]>(dadosIniciais);

  const totalAbertos = incidentes.filter(i => !i.resolvido).length;
  const totalResolvidos = incidentes.filter(i => i.resolvido).length;

  const handleToggleResolvido = (id: number) => {
    setIncidentes(incidentes.map(incidente =>
      incidente.id === id ? { ...incidente, resolvido: !incidente.resolvido } : incidente
    ));
  };

  return (
    <div className="container-fluid p-0">
      <Header /> 

      <div className="container mt-4">
        <div className="row">
          <aside className="col-12 col-lg-3 mb-4">
             <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Filtros</h5>
                <p className="text-muted small">Mostrando todos os incidentes.</p>
                <button className="btn btn-outline-primary btn-sm w-100" onClick={() => alert("filtrando a lista de incidentes!")}>
                  Recarregar Dados
                </button>
              </div>
            </div>
          </aside>

          <main className="col-12 col-lg-9">
            <section id="dashboard" className="mb-4">
               <div className="card shadow-sm border-primary">
                <div className="card-body">
                  <h2 className="h5 text-primary">Dashboard de Status</h2>
                  <div className="d-flex gap-4 mt-3">
                    <div className="fs-5"><strong>Total:</strong> {incidentes.length}</div>
                    <div className="fs-5 text-danger"><strong>Abertos:</strong> {totalAbertos}</div>
                    <div className="fs-5 text-success"><strong>Resolvidos:</strong> {totalResolvidos}</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="incidentes">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="h5 mb-3">Incidentes Recentes</h2>
                  <ul className="list-group">  
                    {incidentes.map(incidente => (
                      <CardIncidente 
                        key={incidente.id} 
                        incidente={incidente} 
                        onToggle={handleToggleResolvido} 
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-light border-top py-4 mt-5 text-center">
        <div className="container">
          <address className="mb-0 text-muted small">
            <strong>Desenvolvido por:</strong> Kaique Granato Santos Silva <br />
            <strong>Data:</strong> 06/04/2026 | <strong>Disciplina:</strong> Desenvolvimento Web - Prof. Alexandre Almeida
          </address>
        </div>
      </footer>
    </div>
  )
}

export default App;