import { Route, Switch } from 'wouter'
import Home from './pages/home'
import QuienesSomos from './pages/quinessomos'
import QuienesSomosDecalogo from './pages/quinessomos/decalogo'
import QuienesSomosHistoria from './pages/quinessomos/historia'

import ArchivosCatalogo from './pages/archivos/catalogo'
import Montajes from './pages/montajes/'
import MontajesDetalles from './pages/montajes/montajes'
import QueDiceElGato from './pages/que-dice-el-gato'

import HoracioBiografia from './pages/horacio/biografia'
import HoracioSobreHC from './pages/horacio/sobreHC'

import Actividades from './pages/actividades'
import Fundacion from './pages/fundacion'

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
        path='/quienes-somos/'
        component={QuienesSomos}
      />
      <Route
        path='/quienes-somos/decalogo'
        component={QuienesSomosDecalogo}
      />
      <Route
        path='/quienes-somos/historia'
        component={QuienesSomosHistoria}
      />

      <Route
        path='/archivos/catalogo'
        component={ArchivosCatalogo}
      />

      <Route
        path='/montajes'
        component={Montajes}
      />
      <Route
        path='/leer/montajes/:id'
        component={MontajesDetalles}
      />

      <Route
        path='/que-dice-el-gato'
        component={QueDiceElGato}
      />

      <Route
        path='/horacio-gonzalez/biografia'
        component={HoracioBiografia}
      />
      <Route
        path='/horacio-gonzalez/sobreHC'
        component={HoracioSobreHC}
      />

      {/* <Route
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
      /> */}
      <Route
        path='/actividades'
        component={Actividades}
      />
      <Route
        path='/actividades/:id'
        component={Actividades}
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
      <Route
        path='/fundacion'
        component={Fundacion}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
