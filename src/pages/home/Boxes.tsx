import Box1 from './Box1'
import Box2 from './Box2'
const url = 'http://localhost/sites/biblioteca-backend/images-static/'

const Boxes = () => {
  return (
    <section className='grid lg:grid-cols-2 gap-3 lg:gap-6'>
      <div className='flex flex-col gap-3 lg:gap-6'>
        <Box1
          title='Biblioteca'
          color='#2fac66'
          image={url + 'biblioteca.jpg'}
          url='/quienes-somos/historia'
        />
        <Box1
          title='Montajes'
          color='#aaaa00'
          image={url + 'montajes.jpg'}
          url='/leer/montajes'
        />
        <div className='grid grid-cols-2 gap-3 lg:gap-6'>
          <Box2
            title='Quienes somos'
            color='#687c32'
            image={url + 'quienes-somos.jpg'}
            url='/quienes-somos/historia'
          />
          <Box2
            title='Leer / Sobre archivos'
            color='#358b74'
            image={url + 'sobrearchivos.jpg'}
            url='/leer/sobre-archivos'
          />
        </div>
      </div>
      <div className='flex flex-col gap-3 lg:gap-6'>
        <div className='grid grid-cols-2 gap-3 lg:gap-6'>
          <Box2
            title='Leer / Motajerd'
            color='#008d36'
            image={url + 'motajerd.jpg'}
            url='/leer/montajes'
          />
          <Box2
            title='Mapas'
            color='#006633'
            image={url + 'mapas.jpg'}
            url='/mirar/mapas'
          />
        </div>
        <Box1
          title='Catálogo Horacio González '
          color='#00a19a'
          image={url + 'catalogo.jpg'}
          url='/catalogos'
        />
        <Box1
          title='Bitácora'
          color='#248e90'
          image={url + 'bitacora.jpg'}
          url='/'
        />
      </div>
    </section>
  )
}

export default Boxes
