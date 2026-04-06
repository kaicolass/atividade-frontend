export interface IIncidente {
    id: number;
    titulo: string;
    criticidade: 'Baixa' | 'Média' | 'Alta';
    resolvido: boolean;
}