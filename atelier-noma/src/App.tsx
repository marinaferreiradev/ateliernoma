import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Contact from './pages/Contact'
import Credits from './pages/Credits'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Studio from './pages/Studio'

// HashRouter apenas para pré-visualizações em hospedagens sem reescrita de rotas.
// Na Vercel, o padrão (BrowserRouter) usa URLs limpas, como /projetos/casa-horizonte.
const Router = import.meta.env.VITE_ROUTER === 'hash' ? HashRouter : BrowserRouter

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="projetos/:slug" element={<ProjectDetail />} />
          <Route path="estudio" element={<Studio />} />
          <Route path="contato" element={<Contact />} />
          <Route path="creditos" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
