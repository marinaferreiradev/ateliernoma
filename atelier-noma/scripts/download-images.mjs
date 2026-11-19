#!/usr/bin/env node
/**
 * Baixa todas as fotografias do site para public/images, nos tamanhos usados
 * pelo srcset. Depois de rodar, defina VITE_IMAGE_SOURCE=local (em .env.local
 * ou nas variáveis de ambiente da Vercel) para que o site use os arquivos locais.
 *
 *   npm run images:local
 *
 * Os dados são lidos de src/data/images.ts — mantenha esse arquivo como fonte única.
 */
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'images')
const WIDTHS = [640, 1080, 1600, 2400]

const source = await readFile(path.join(root, 'src/data/images.ts'), 'utf8')
const entries = [...source.matchAll(/key:\s*'([^']+)',\s*\n\s*id:\s*'([^']+)'/g)].map((m) => ({
  key: m[1],
  id: m[2],
}))

if (entries.length === 0) {
  console.error('Nenhuma imagem encontrada em src/data/images.ts')
  process.exit(1)
}

await mkdir(outDir, { recursive: true })

const exists = async (file) => {
  try {
    return (await stat(file)).size > 0
  } catch {
    return false
  }
}

let downloaded = 0
let failed = 0

for (const { key, id } of entries) {
  for (const width of WIDTHS) {
    const file = path.join(outDir, `${key}-${width}.jpg`)
    if (await exists(file)) continue
    const url = `https://images.unsplash.com/${id}?fm=jpg&fit=max&q=80&w=${width}`
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      await writeFile(file, Buffer.from(await res.arrayBuffer()))
      downloaded++
      process.stdout.write(`✓ ${key}-${width}.jpg\n`)
    } catch (error) {
      failed++
      console.error(`✗ ${key}-${width}.jpg — ${error.message}`)
    }
  }
}

console.log(`\n${downloaded} arquivo(s) baixado(s), ${failed} falha(s). Pasta: public/images`)
if (failed > 0) process.exit(1)
console.log('Agora defina VITE_IMAGE_SOURCE=local para usar os arquivos locais.')
