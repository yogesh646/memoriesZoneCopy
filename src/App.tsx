import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUploader1 from './components/FileUploader1'

function App() {
  const [count, setCount] = useState(0)

  return (
   <FileUploader1/>
  )
}

export default App
