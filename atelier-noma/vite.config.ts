import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Controle de indexação em um só lugar.
 *
 * Por padrão o site NÃO é indexado (projeto conceitual). Para liberar a
 * indexação no futuro, defina a variável de ambiente VITE_ALLOW_INDEXING=true
 * (na Vercel: Settings → Environment Variables) e publique novamente.
 * O plugin abaixo ajusta a meta tag robots e gera o robots.txt de acordo.
 */
function indexingControl(allowIndexing: boolean): Plugin {
  const robotsTxt = allowIndexing
    ? 'User-agent: *\nAllow: /\n'
    : 'User-agent: *\nDisallow: /\n'

  return {
    name: 'atelier-noma-indexing',
    transformIndexHtml(html) {
      return html.replace(
        '%ROBOTS%',
        allowIndexing ? 'index, follow' : 'noindex, nofollow',
      )
    },
    configureServer(server) {
      server.middlewares.use('/robots.txt', (_req, res) => {
        res.setHeader('Content-Type', 'text/plain')
        res.end(robotsTxt)
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const allowIndexing = env.VITE_ALLOW_INDEXING === 'true'

  return {
    base: env.VITE_BASE ?? '/',
    plugins: [react(), tailwindcss(), indexingControl(allowIndexing)],
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/gsap')) return 'gsap'
            if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) return 'react'
            return undefined
          },
        },
      },
    },
  }
})
