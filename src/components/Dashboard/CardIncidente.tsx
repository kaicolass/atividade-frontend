import type { IIncidente } from '../../@types/IIncidente';

interface Props {
  incidente: IIncidente;
  onToggle: (id: number) => void;
}

export function CardIncidente({ incidente, onToggle }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <span className={`badge me-3 ${incidente.criticidade === 'Alta' ? 'bg-danger' : incidente.criticidade === 'Média' ? 'bg-warning text-dark' : 'bg-info'}`}>
          {incidente.criticidade}
        </span>
        <span className={incidente.resolvido ? 'text-decoration-line-through text-muted' : ''}>
          {incidente.titulo}
        </span>
      </div>
      <button
        onClick={() => onToggle(incidente.id)}
        className={`btn btn-sm ${incidente.resolvido ? 'btn-outline-secondary' : 'btn-success'}`}
      >
        {incidente.resolvido ? 'Reabrir' : 'Resolver'}
      </button>
    </li>
  );
}