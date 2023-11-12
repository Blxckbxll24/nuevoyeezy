import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login_user';
import Registro from './pages/login';

import Pago from './pages/pago';
import Dash from './pages/dashboard';
import Inicio from './pages/inicio';
import Buscador from './pages/buscador';
import { FavoriteSongsProvider } from '../src/context/favoritos.jsx';
import Player from './pages/reproductor.jsx';

function App() {
  return (
    <BrowserRouter>
      <FavoriteSongsProvider>
        <Routes>
          <Route path='/' element={<Registro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pago' element={<Pago />} />
          <Route path='/dash' element={<Dash />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/buscador' element={<Buscador />} />
          <Route path='/player' element={<Player />} />
        </Routes>
      </FavoriteSongsProvider>
    </BrowserRouter>
  );
}

export default App;
