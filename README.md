# Fornaria Pizzaria & General Bacon — site em Next.js

Landing page da Fornaria Pizzaria & General Bacon (Porto de Pedras/Patacho, AL), construída em Next.js 14 (App Router) + TypeScript, sem dependências de UI externas (CSS puro em `app/globals.css`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.tsx     -> metadata (SEO, Open Graph), fontes (Fraunces, Manrope, IBM Plex Mono) e o JSON-LD (schema.org Restaurant)
  page.tsx       -> todo o conteúdo da página (hero, rota, cardápio, avaliações, localização)
  globals.css    -> estilos (paleta de cores clara/escura, tipografia, grid, componentes)
public/
  images/
    hero-facade.jpg        -> foto da fachada (usada no hero)
    dish-picanha.jpg       -> foto da picanha (seção "Nossa cozinha")
    cardapio-burguers.jpg  -> foto do cardápio impresso (seção "Cardápio")
```

## Antes de publicar

1. **Domínio**: troque `siteUrl` em `app/layout.tsx` pelo domínio definitivo do site assim que ele estiver registrado. Isso ajusta automaticamente as tags de Open Graph e o JSON-LD.
2. **Horário de funcionamento**: só temos confirmado que o restaurante fecha à meia-noite (dado tirado do Google Maps, quinta-feira). Vale conferir e preencher o horário completo da semana em `page.tsx` (seção "Localização") e, se quiser, adicionar `openingHoursSpecification` no JSON-LD de `layout.tsx`.
3. **Fotos**: as três fotos em `public/images` vieram de capturas de tela do Google Maps/Instagram e foram recortadas e comprimidas. Se você tiver os arquivos originais em maior resolução, vale substituí-los (mantendo os mesmos nomes de arquivo ou ajustando os `src` em `page.tsx`).
4. **SEO no Google**: o código já inclui title, meta description, Open Graph, dados estruturados (schema.org Restaurant com endereço, telefone, nota e cardápio) e HTML semântico. Mas aparecer bem posicionado no Google depende também de fatores fora do código — domínio próprio indexado, Google Business Profile atualizado e bem avaliado, e backlinks. Depois de publicar, vale cadastrar o site na [Google Search Console](https://search.google.com/search-console) e vincular o domínio ao perfil da empresa no Google.
5. **WhatsApp**: os botões usam `https://wa.me/5582991741699`. Se o número mudar, é só atualizar as constantes `WHATSAPP_URL` no topo de `app/page.tsx`.

## Deploy

O jeito mais simples é publicar na [Vercel](https://vercel.com) (criadora do Next.js): conecte o repositório e o deploy é automático a cada push. Também funciona em qualquer outro provedor que rode Node.js (Netlify, Railway, servidor próprio etc.).
