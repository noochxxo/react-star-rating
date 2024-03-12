import { useState } from 'react'
import './App.css'
import StarRating from './star-rating.component'

function App() {
  const [productRaing, setProductRating] = useState(0)
  return (
    <main>
      Current Product Rating: { productRaing }
      <StarRating maxRating={10} onChange={setProductRating} />
    </main>
  )
}

export default App
