# alfnori.github.io — Portfólio Adolfo Luiz Noriller

Site estático com **Astro + Tailwind** hospedado no **GitHub Pages** em https://alfnori.github.io

## Estrutura

```
/src
  /components  Header, Hero, Experience, Skills, Projects, ...
  /layouts     BaseLayout (SEO + OG + JSON-LD)
  /data        cv.ts (experiências/skills) + projects.ts (6 dummies cronológicos)
  /styles      global.css (Tailwind v4)
  /pages       index.astro
/public       me.jpg, cv.pdf, favicon, robots.txt
```

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # preview produção
```

## Como editar conteúdo

- **CV/experiências/skills:** `src/data/cv.ts`
- **Projetos:** `src/data/projects.ts` — troque `title`, `description`, `tech`, `link`, `repo`
- **Foto:** substitua `public/me.jpg` (e `me.jpg` na raiz como backup)
- **PDF:** substitua `public/cv.pdf` e `Curriculo Adolfo Luiz Noriller.pdf`

Push em `main` → GitHub Actions builda e publica automaticamente (`.github/workflows/deploy.yml`).

## Deploy

Repo: `alfnori/alfnori.github.io` (branch `main`, GitHub Pages via Actions)
Config: `astro.config.mjs` → `site: "https://alfnori.github.io"`
