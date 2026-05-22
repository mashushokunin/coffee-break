import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>☕ Coffee Break</h1>
      <p>Welcome to Coffee Break!</p>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </div>
  )
}

export default App
