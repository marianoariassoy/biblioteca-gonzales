import { useEffect } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
const url = 'http://bibliotecagonzalez.com.ar/backend/images-static/'

const Boxes = ({ random }) => {
  useEffect(() => {
    const boxes = document.getElementById('boxes-' + random)
    boxes?.classList.remove('hidden')
  })
  return (
    <section>
      <article
        className='grid lg:grid-cols-2 gap-3 lg:gap-6 hidden'
        id='boxes-1'
      >
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
            url='/montajes'
          />
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Quienes somos'
              color='#687c32'
              image={url + 'quienes-somos.jpg'}
              url='/quienes-somos'
            />
            <Box2
              title='Sobre archivos'
              color='#358b74'
              image={url + 'sobrearchivos.jpg'}
              url='/archivos/sobre-archivos'
            />
          </div>
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Recomendaciones'
              color='#008d36'
              image={url + 'motajerd.jpg'}
              url='/recomendaciones'
            />
            <Box2
              title='Mapas'
              color='#006633'
              image={url + 'mapas.jpg'}
              url='/mapas'
            />
          </div>
          <Box1
            title='Catálogo Horacio González'
            color='#00a19a'
            image={url + 'catalogo.jpg'}
            url='/archivos/catalogo-hg'
          />
          <Box1
            title='Fantasmal'
            color='#248e90'
            image={url + 'bitacora.jpg'}
            url='/fantasmal'
          />
        </div>
      </article>
      <article
        className='grid lg:grid-cols-2 gap-3 lg:gap-6 hidden'
        id='boxes-2'
      >
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Quienes somos'
              color='#e63b11'
              image={url + 'quienes-somos.jpg'}
              url='/quienes-somos/historia'
            />
            <Box2
              title='Sobre archivos'
              color='#b2302c'
              image={url + 'sobrearchivos.jpg'}
              url='/leer/sobre-archivos'
            />
          </div>
          <Box1
            title='Biblioteca'
            color='#d35b17'
            image={url + 'biblioteca.jpg'}
            url='/quienes-somos/historia'
          />
          <Box1
            title='Montajes'
            color='#db9d73'
            image={url + 'montajes.jpg'}
            url='/leer/montajes'
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <Box1
            title='Catálogo Horacio González '
            color='#db9705'
            image={url + 'catalogo.jpg'}
            url='/catalogos'
          />
          <Box1
            title='Bitácora'
            color='#dba092'
            image={url + 'bitacora.jpg'}
            url='/'
          />
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Donaciones'
              color='#9e1510'
              image={url + 'motajerd.jpg'}
              url='/donaciones'
            />
            <Box2
              title='Mapas'
              color='#7d1206'
              image={url + 'mapas.jpg'}
              url='/mirar/mapas'
            />
          </div>
        </div>
      </article>
      <article
        className='grid lg:grid-cols-2 gap-3 lg:gap-6 hidden'
        id='boxes-3'
      >
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Quienes somos'
              color='#0080af'
              image={url + 'quienes-somos.jpg'}
              url='/quienes-somos/historia'
            />
            <Box2
              title='Donaciones'
              color='#007499'
              image={url + 'sobrearchivos.jpg'}
              url='/leer/donaciones'
            />
          </div>
          <Box1
            title='Biblioteca'
            color='#0089bb'
            image={url + 'biblioteca.jpg'}
            url='/quienes-somos/historia'
          />
          <Box1
            title='Montajes'
            color='#5bc5f2'
            image={url + 'montajes.jpg'}
            url='/leer/montajes'
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Leer / Motajerd'
              color='#006885'
              image={url + 'motajerd.jpg'}
              url='/leer/montajes'
            />
            <Box2
              title='Mapas'
              color='#00566f'
              image={url + 'mapas.jpg'}
              url='/mirar/mapas'
            />
          </div>
          <Box1
            title='Catálogo Horacio González '
            color='#2581c4'
            image={url + 'catalogo.jpg'}
            url='/catalogos'
          />
          <Box1
            title='Bitácora'
            color='#a1daf8'
            image={url + 'bitacora.jpg'}
            url='/'
          />
        </div>
      </article>
      <article
        className='grid lg:grid-cols-2 gap-3 lg:gap-6 hidden'
        id='boxes-4'
      >
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Quienes somos'
              color='#bca3ce'
              image={url + 'quienes-somos.jpg'}
              url='/quienes-somos/historia'
            />
            <Box2
              title='Sobre archivos'
              color='#a78bc0'
              image={url + 'sobrearchivos.jpg'}
              url='/leer/sobre-archivos'
            />
          </div>
          <Box1
            title='Biblioteca'
            color='#8d6a9f'
            image={url + 'biblioteca.jpg'}
            url='/quienes-somos/historia'
          />
          <Box1
            title='Montajes'
            color='#bb7cb3'
            image={url + 'montajes.jpg'}
            url='/leer/montajes'
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <Box1
            title='Catálogo Horacio González '
            color='#bb7cb3'
            image={url + 'catalogo.jpg'}
            url='/catalogos'
          />
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Donaciones'
              color='#956095'
              image={url + 'motajerd.jpg'}
              url='/donaciones'
            />
            <Box2
              title='Mapas'
              color='#792477'
              image={url + 'mapas.jpg'}
              url='/mirar/mapas'
            />
          </div>
          <Box1
            title='Bitácora'
            color='#d9a2ca'
            image={url + 'bitacora.jpg'}
            url='/'
          />
        </div>
      </article>
    </section>
  )
}

export default Boxes
