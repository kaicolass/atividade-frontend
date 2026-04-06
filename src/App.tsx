import { useState } from 'react';
import type { IIncidente } from './@types/IIncidente';
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
      
      {/* CABEÇALHO */}
      <header className="bg-dark text-white p-3 shadow-sm">
        <div className="container">
          <h1 className="h4 mb-0">🛡️ SecurityDash</h1>
        </div>
      </header>

      {/* ÁREA PRINCIPAL */}
      <div className="container mt-4">
        <div className="row">
          
          {/* BARRA LATERAL */}
          <aside className="col-12 col-lg-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Filtros</h5>
                <p className="text-muted small">Mostrando todos os incidentes.</p>
                <button className="btn btn-outline-primary btn-sm w-100" onClick={() => alert("Filtrando a lista de incidentes!")}>
                  Recarregar Dados
                </button>
              </div>
            </div>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}
          <main className="col-12 col-lg-9">
            
            {/* SESSÃO DO DASHBOARD (Contadores Dinâmicos) */}
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

            {/* SESSÃO DA LISTA DE INCIDENTES */}
            <section id="incidentes">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="h5 mb-3">Incidentes Recentes</h2>
                  
                  <ul className="list-group">
                    {/* Renderização dinâmica da lista usando .map */}
                    {incidentes.map(incidente => (
                      <li key={incidente.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          {/* Badges do Bootstrap condicionais baseados na criticidade */}
                          <span className={`badge me-3 ${incidente.criticidade === 'Alta' ? 'bg-danger' : incidente.criticidade === 'Média' ? 'bg-warning text-dark' : 'bg-info'}`}>
                            {incidente.criticidade}
                          </span>
                          
                          {/* Risco no texto se estiver resolvido */}
                          <span className={incidente.resolvido ? 'text-decoration-line-through text-muted' : ''}>
                            {incidente.titulo}
                          </span>
                        </div>
                        
                        {/* Botão para mudar o status */}
                        <button
                          onClick={() => handleToggleResolvido(incidente.id)}
                          className={`btn btn-sm ${incidente.resolvido ? 'btn-outline-secondary' : 'btn-success'}`}
                        >
                          {incidente.resolvido ? 'Reabrir' : 'Resolver'}
                        </button>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* RODAPÉ */}
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