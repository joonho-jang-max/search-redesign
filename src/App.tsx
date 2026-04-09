import './index.css'
import Component from './Component'
import FloatingCat from './FloatingCat'
export default function App() {
  return (
    <div style={{ minHeight: '100dvh', background: '#f7f7f7' }}>
      <Component />
      <FloatingCat />
    </div>
  )
}
