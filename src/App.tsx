import { Route, Switch } from 'wouter'
import Home from './pages/home'

import QuienesSomos from './pages/quinessomos/'
import QuienesSomosManifiesto from './pages/quinessomos/decalogo'
import QuienesSomosHistoria from './pages/quinessomos/historia'

import ArchivosCatalogo from './pages/archivos'
import SobreArchivos from './pages/archivos/sobreArchivos'
import ArchivosDetalles from './pages/archivos/Details'

import Montajes from './pages/montajes/'
import MontajesDetalles from './pages/montajes/montajes'

import Mapas from './pages/montajes/Mapas'
import Fantasmal from './pages/montajes/Fantasmal'
import Recomendaciones from './pages/montajes/Recomendaciones'
import Textitos from './pages/montajes/Textitos'
import TextitosDetalles from './pages/montajes/TextitosDetalles'
import Testimonios from './pages/montajes/Testimonios'

import QueDiceElGato from './pages/que-dice-el-gato'
import GatoDetalles from './pages/que-dice-el-gato/Details'

import HoracioBiografia from './pages/horacio/biografia'
import HoracioSobreHG from './pages/horacio/sobreHC'
import HoracioQueDiceHG from './pages/horacio/queDiceHG'
import HoracioQueDiceHGDetalles from './pages/horacio/queDiceHGDetalles'

import Actividades from './pages/actividades'
import ActividadesDetalles from './pages/actividades/Details'
import Fundacion from './pages/fundacion'
import Donaciones from './pages/donaciones'

import Soon from './pages/soon'
import Error from './pages/error'

import SerAmigos from './pages/seramigos'

import Mosaicos from './pages/mosaicos/'
import MosaicosDetalles from './pages/mosaicos/mosaicos'

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
        path='/quienes-somos/manifiesto'
        component={QuienesSomosManifiesto}
      />
      <Route
        path='/quienes-somos/historia'
        component={QuienesSomosHistoria}
      />

      <Route
        path='/archivos/catalogo-biblioteca'
        component={ArchivosCatalogo}
      />
      <Route
        path='/archivos/catalogo-videoteca'
        component={ArchivosCatalogo}
      />
      <Route
        path='/archivos/catalogo-hg'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/picadito'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/mundo-p'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/cinefilas'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/hogueras'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/cine-internacional'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/documentales'
        component={ArchivosDetalles}
      />
      <Route
        path='/archivos/ficcion'
        component={ArchivosDetalles}
      />

      <Route
        path='/archivos/sobre-archivos'
        component={SobreArchivos}
      />

      <Route
        path='/montajes'
        component={Montajes}
      />
      <Route
        path='/montajes/:id'
        component={MontajesDetalles}
      />
      <Route
        path='/mapas'
        component={Mapas}
      />
      <Route
        path='/fantasmal'
        component={Fantasmal}
      />
      <Route
        path='/recomendaciones'
        component={Recomendaciones}
      />
      <Route
        path='/textitos'
        component={Textitos}
      />
      <Route
        path='/montajes/textitos/:id'
        component={TextitosDetalles}
      />
      <Route
        path='/testimonios'
        component={Testimonios}
      />

      <Route
        path='/mosaicos'
        component={Mosaicos}
      />
      <Route
        path='/mosaicos/:id'
        component={MosaicosDetalles}
      />

      <Route
        path='/que-dice-el-gato'
        component={QueDiceElGato}
      />
      <Route
        path='/que-dice-el-gato/:id'
        component={GatoDetalles}
      />

      <Route
        path='/horacio-gonzalez/biografia'
        component={HoracioBiografia}
      />
      <Route
        path='/horacio-gonzalez/sobreHG'
        component={HoracioSobreHG}
      />
      <Route
        path='/horacio-gonzalez/que-dice-hg'
        component={HoracioQueDiceHG}
      />
      <Route
        path='/horacio-gonzalez/que-dice-hg/:id'
        component={HoracioQueDiceHGDetalles}
      />

      <Route
        path='/actividades'
        component={Actividades}
      />
      <Route
        path='/actividades/:id'
        component={ActividadesDetalles}
      />
      <Route
        path='/agenda'
        component={Soon}
      />

      <Route
        path='/fundacion'
        component={Fundacion}
      />
      <Route
        path='/donaciones'
        component={Donaciones}
      />
      <Route
        path='/seramigos'
        component={SerAmigos}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
