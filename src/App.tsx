import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Historia from './pages/quinessomos/historia'
import HistoriaDecalogo from './pages/quinessomos/decalogo'
import Archivo from './pages/archivo'
import SobreArchivos from './pages/leer/sobre-archivos'
import Montajes from './pages/leer/montajes'
import Soncats from './pages/mirar'
import HoracioAcerca from './pages/horacio/acerca'
import Dibujos from './pages/horacio/dibujos'
import Fotos from './pages/horacio/fotos'
import Descargas from './pages/horacio/descargas'

import Soon from './pages/soon'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/quienes-somos/historia'
        component={Historia}
      />
      <Route
        path='/quienes-somos/decalogo'
        component={HistoriaDecalogo}
      />
      <Route
        path='/archivo/archivo'
        component={Archivo}
      />
      <Route
        path='/archivo/biblioteca'
        component={Archivo}
      />
      <Route
        path='/archivo/cinefilias'
        component={Archivo}
      />
      <Route
        path='/leer/sobre-archivos'
        component={SobreArchivos}
      />
      <Route
        path='/leer/montajes'
        component={Montajes}
      />
      <Route
        path='/mirar/soncats'
        component={Soncats}
      />
      <Route
        path='/mirar/mapas'
        component={Soncats}
      />
      <Route
        path='/horacio-gonzalez/acerca'
        component={HoracioAcerca}
      />
      <Route
        path='/horacio-gonzalez/dibujos'
        component={Dibujos}
      />
      <Route
        path='/horacio-gonzalez/fotos'
        component={Fotos}
      />
      <Route
        path='/horacio-gonzalez/descargas'
        component={Descargas}
      />
      <Route
        path='/catalogos'
        component={Soon}
      />
      <Route
        path='/agenda'
        component={Soon}
      />
      <Route
        path='/amigxs'
        component={Soon}
      />
      <Route
        path='/donaciones'
        component={Soon}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
