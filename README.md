# Simulador de Ágio do Garrote · Fazendas Boi Verde

App web (PWA) que abre em tela cheia no iPhone, sem barra de endereço, e funciona sem internet depois de aberto uma vez.

## O que tem na pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro (tela, cálculos, estilo) |
| `manifest.webmanifest` | Nome, cores e ícones do app instalado |
| `sw.js` | Guarda os arquivos no aparelho para abrir offline |
| `img/logo-creme.png` | Logo da Fazenda Boi Verde no topo do app |
| `icons/`, `favicon.ico` | Ícones oficiais da Boi Verde (iPhone usa `apple-touch-icon.png`) |
| `fonts/` | Fontes embutidas (Source Sans 3 e Source Serif 4, licença OFL) |
| `.nojekyll` | Avisa o GitHub Pages para publicar os arquivos como estão |

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `agio-garrote`).
2. Envie **todos** os arquivos desta pasta para a raiz do repositório, inclusive `.nojekyll` (no site do GitHub: *Add file → Upload files*, arraste o conteúdo da pasta).
3. Vá em *Settings → Pages*. Em *Source*, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o endereço aparece no topo da página: `https://SEU-USUARIO.github.io/agio-garrote/`.

## Instalar no iPhone

1. Abra o endereço no **Safari** (precisa ser o Safari).
2. Toque em **Compartilhar** → **Adicionar à Tela de Início** → **Adicionar**.
3. Abra pelo ícone. Ele abre em tela cheia, sem a barra do navegador.

## Atualizar o app depois

1. Edite os arquivos e envie de novo para o repositório.
2. Em `sw.js`, troque `VERSION = 'agio-v1.0'` por `'agio-v1.1'` (e assim por diante). Sem isso, o iPhone pode continuar mostrando a versão antiga.
3. No iPhone, feche o app e abra de novo com internet. Se ainda aparecer a versão antiga, feche e abra mais uma vez.

## Bom saber

- Os valores que você digita ficam salvos no aparelho. O app instalado e o Safari guardam dados separados, então o que você salvou num não aparece no outro.
- Repositório público no GitHub fica visível para qualquer pessoa. Se não quiser isso, o GitHub Pages em repositório privado exige plano pago.
