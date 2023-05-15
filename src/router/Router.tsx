import { Register } from '../features/register'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
}

export default Router
