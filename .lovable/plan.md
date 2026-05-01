## VELTOR — Site Institucional Premium (estilo Apple)

Site institucional de uma página com estética Apple: tipografia gigante, espaçamento generoso, microinterações suaves e mockups 3D de sites em devices. Paleta híbrida alternando seções pretas cinematográficas e brancas minimalistas.

### Paleta e tipografia

- **Branco puro** `#FFFFFF` / texto `#1D1D1F` (estilo apple.com)
- **Preto profundo** `#000000` / texto `#F5F5F7` (estilo Vision Pro)
- **Cinza acento** `#86868B` (subtítulos)
- **Tipografia:** SF Pro Display equivalent → Inter (700/600/400) com tracking apertado nos headlines gigantes (text-7xl a text-9xl)
- Botão primário: pill preto/branco, hover sutil com scale(1.02)

### Estrutura de seções (alternância preto/branco)

```text
[PRETO]   1. Hero — VELTOR + headline gigante + CTA WhatsApp + mockup MacBook
[BRANCO]  2. Posicionamento — "Mais do que sites"
[PRETO]   3. Filosofia — "Simplicidade é o mais alto nível de sofisticação"
[BRANCO]  4. Serviços — grid 5 cards com ícones minimalistas
[PRETO]   5. Benefícios — lista tipográfica grande com números 01–05
[BRANCO]  6. Investimento — "A partir de R$ 400" centralizado, tipografia massiva
[PRETO]   7. Portfólio — carrossel/grid com 3 mockups (iMac, MacBook, iPhone)
[BRANCO]  8. CTA Final — headline + botão WhatsApp pill preto
[PRETO]   9. Rodapé — minimalista, 3 colunas
```

### Detalhes por seção

**1. Hero (preto)**
- Headline: "VELTOR" em text-9xl, weight 600, tracking -0.05em
- Subheadline: "Sites premium que redefinem a presença digital."
- Parágrafo descritivo em cinza claro, max-w-2xl
- Botão pill branco "Falar com um especialista" → link WhatsApp
- Mockup grande de MacBook com site premium na tela, centralizado abaixo
- Fade-in no scroll, parallax sutil no mockup

**2. Posicionamento (branco)**
- Eyebrow pequeno cinza "POSICIONAMENTO"
- "Mais do que sites." em text-8xl
- "Criamos percepção de marca." em text-8xl com cinza muted
- Parágrafo de apoio centralizado

**3. Filosofia (preto)**
- Quote gigante centralizada, peso leve (font-light) com aspas finas
- Atribuição discreta abaixo

**4. Serviços (branco)**
- Grid 2 colunas (5 itens) — cards sem borda, só ícone SVG fino + título + descrição curta
- Hover: leve translate-y e mudança de cor do ícone

**5. Benefícios (preto)**
- 5 linhas tipográficas grandes numeradas "01 — Credibilidade imediata"
- Separadores de linha sutis em cinza escuro
- Animação stagger fade-in no scroll

**6. Investimento (branco)**
- "A partir de" pequeno cinza
- "R$ 400" em text-9xl bold
- Subtexto "Projetos exclusivos com foco em performance, design e resultado real."
- CTA pill preto

**7. Portfólio (preto)**
- 3 mockups gerados (iMac institucional, MacBook landing page, iPhone loja virtual)
- Layout assimétrico premium, cada um com label de categoria

**8. CTA Final (branco)**
- "Sua marca está pronta para evoluir?" em text-8xl
- Subtexto + botão pill preto "Falar no WhatsApp"

**9. Rodapé (preto)**
- Logo VELTOR esquerda
- WhatsApp (22) 98148-4193 + Instagram @grativol.allison
- Tagline "Criação de Sites Premium"
- Copyright minúsculo

### Imagens a gerar (Nano Banana Pro — qualidade máxima)

1. **Hero MacBook mockup** — MacBook Pro preto fotorrealista, iluminação cinematográfica suave, fundo preto absoluto, mostrando site premium minimalista na tela
2. **Portfólio iMac** — iMac frontal sobre fundo branco/cinza, site institucional elegante na tela
3. **Portfólio MacBook landing** — MacBook ângulo levemente lateral, fundo escuro, landing page colorida na tela
4. **Portfólio iPhone** — iPhone 15 Pro vertical, fundo branco, e-commerce premium na tela

Todas em alta resolução, estilo keynote Apple, sem texto legível quebrado nas telas (placeholders abstratos elegantes).

### Microinterações

- Fade-in + translate-y no scroll (Intersection Observer)
- Hover scale sutil (1.02) em botões e cards
- Smooth scroll
- Cursor padrão (sem custom cursor — Apple não usa)
- Transições 300–500ms ease-out

### Detalhes técnicos

- Single-page em `src/routes/index.tsx` (site institucional one-pager)
- Fonte Inter via Google Fonts no `__root.tsx`
- Atualizar `src/styles.css` com tokens semânticos: `--veltor-black`, `--veltor-white`, `--veltor-gray`, `--veltor-muted`
- Componentes em `src/components/veltor/`: `Hero`, `Positioning`, `Philosophy`, `Services`, `Benefits`, `Pricing`, `Portfolio`, `FinalCTA`, `Footer`, `WhatsAppButton`
- Hook `useScrollReveal` para animações de entrada
- Meta tags atualizadas no `__root.tsx`: title "VELTOR — Criação de Sites Premium", description, OG tags
- WhatsApp link único reutilizado: `https://wa.me/5522981484193?text=...`
- Instagram link: `https://instagram.com/grativol.allison`
- Imagens geradas via Lovable AI Gateway (Nano Banana Pro) e salvas em `src/assets/`
- Totalmente responsivo: tipografia escala via `clamp()` ou breakpoints Tailwind, mockups full-width no mobile