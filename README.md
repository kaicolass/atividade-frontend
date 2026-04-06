# 🛡️ SecurityDash - Gestão de Incidentes

Trabalho 2 da disciplina de Desenvolvimento Web (Prof. Alexandre Almeida) - PUC Goiás.

**Aluno:** Kaique Granato Santos Silva
**Data:** 06/04/2026

## Sobre o Projeto
O SecurityDash é um painel de controle responsivo para monitoramento de incidentes de segurança da informação (como força bruta e acessos suspeitos). Desenvolvido com React, TypeScript e Bootstrap (via CDN).

## Justificativa da Arquitetura
Para garantir a manutenção e escalabilidade do código, a arquitetura foi dividida da seguinte forma:

1. **Separação de Responsabilidades (Componentização):** A estrutura da pasta `src/` foi organizada para separar definições de tipo (`@types`) da interface visual (`components/`). O ecossistema utiliza a extração de micro-componentes (Layout, Dashboard, Common).
2. **Single Source of Truth (Estado):** Optou-se por utilizar um único `useState` contendo o array de incidentes. Os contadores do Dashboard não possuem estados próprios; eles são *derivados* (calculados via `.filter().length`) diretamente do estado principal. Isso elimina bugs de dessincronização ao alterar o status de um item.
3. **Contratos Estritos:** O uso da interface `IIncidente` garante que não ocorram erros de tipagem ao manipular criticidades e status dos alertas, aumentando a segurança do software.
4. **Semântica e Grid:** Utilização estrita das tags HTML5 (`header`, `main`, `aside`, `section`, `address`) integradas ao sistema de 12 colunas do Bootstrap, garantindo assimetria no Desktop (3/9) e empilhamento no Mobile (12).

## Como Executar
1. Clone o repositório
2. Rode `npm install`
3. Rode `npm run dev`