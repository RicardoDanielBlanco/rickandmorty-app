import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Location from './screens/Locations'
import Episode from './screens/Episodes'
import Layout from './components/Layout'
import PjDetails from './screens/PjDetails'
import EpDetails from './screens/EpDetails'
import LocDetails from './screens/LocDetails'
import NotFound from './screens/NotFound'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Personajes/:id' element={<PjDetails />}/>
          <Route path='/Ubicaciones' element={<Location />} />
          <Route path='/Ubicaciones/:id' element={<LocDetails />} />
          <Route path='/Episodios' element={<Episode />} />
          <Route path='/Episodios/:id' element={<EpDetails />} />
        </Route>
        <Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )}

export default App
