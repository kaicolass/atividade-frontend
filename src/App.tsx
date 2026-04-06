import './App.css'

function App() {
  return (
    <div className="container-fluid p-0">
      
      {/* CABEÇALHO */}
      <header className="bg-dark text-white p-3 shadow-sm">
        <div className="container">
          <h1 className="h4 mb-0">🛡️ SecurityDash</h1>
        </div>
      </header>

      {/* ÁREA PRINCIPAL COM GRID ASSIMÉTRICO */}
      <div className="container mt-4">
        <div className="row">
          
          {/* BARRA LATERAL (3 colunas no Desktop, 12 no Mobile) */}
          <aside className="col-12 col-lg-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Filtros</h5>
                <p className="text-muted small">...</p>
              </div>
            </div>
          </aside>

          {/* CONTEÚDO PRINCIPAL (9 colunas no Desktop, 12 no Mobile) */}
          <main className="col-12 col-lg-9">
            
            {/* SESSÃO DO DASHBOARD */}
            <section id="dashboard" className="mb-4">
              <div className="card shadow-sm border-primary">
                <div className="card-body">
                  <h2 className="h5 text-primary">Dashboard de Status</h2>
                  <p className="text-muted small">...</p>
                </div>
              </div>
            </section>

            {/* SESSÃO DA LISTA DE INCIDENTES */}
            <section id="incidentes">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="h5">Incidentes Recentes</h2>
                  <p className="text-muted small">...</p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* RODAPÉ OBRIGATÓRIO */}
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

export default App