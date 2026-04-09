import './index.css'
import Component from './Component'
import FloatingCat from './FloatingCat'
export default function App() {
  return (
    <>
      <div style={{ maxWidth: 375, margin: '0 auto', background: '#f7f7f7', minHeight: '100dvh', position: 'relative' }}>
        <Component />
      </div>
      <FloatingCat />
    </>
  )
}
