import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

export default function Routers() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" exact element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}