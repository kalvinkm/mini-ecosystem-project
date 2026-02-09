import { Renderer } from './engine/Renderer'
import { parsePages } from './engine/parser'

export default function App() {
  const page = parsePages()

  return (
    <main className="page">
      <Renderer page={page} />
    </main>
  )
}
