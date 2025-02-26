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
            title='Quienes somos'
            color='#2fac66'
            image={url + 'shortcut1.jpg'}
            url='/quienes-somos'
          />
          <Box1
            title='Archivos'
            color='#aaaa00'
            image={url + 'shortcut2.jpg'}
            url='/archivos/sobre-archivos'
          />
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Montajes'
              color='#687c32'
              image={url + 'shortcut3.jpg'}
              url='/montajes'
            />
            <Box2
              title='¿Qué dice el gato?'
              color='#358b74'
              image={url + 'shortcut4.jpg'}
              url='/que-dice-el-gato'
            />
          </div>
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Horacio González'
              color='#008d36'
              image={url + 'shortcut5.jpg'}
              url='/horacio-gonzalez/biografia'
            />
            <Box2
              title='Actividades'
              color='#006633'
              image={url + 'shortcut6.jpg'}
              url='/actividades'
            />
          </div>
          <Box1
            title='Amigxs'
            color='#00a19a'
            image={url + 'shortcut7.jpg'}
            url='/amigxs'
          />
          <Box1
            title='Catálogo Biblioteca'
            color='#248e90'
            image={url + 'shortcut8.jpg'}
            url='/archivos/catalogo-videoteca'
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
              image={url + 'shortcut1.jpg'}
              url='/quienes-somos'
            />
            <Box2
              title='Archivos'
              color='#b2302c'
              image={url + 'shortcut2.jpg'}
              url='/archivos/sobre-archivos'
            />
          </div>
          <Box1
            title='Montajes'
            color='#d35b17'
            image={url + 'shortcut3.jpg'}
            url='/montajes'
          />
          <Box1
            title='¿Qué dice el gato?'
            color='#db9d73'
            image={url + 'shortcut4.jpg'}
            url='que-dice-el-gato'
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <Box1
            title='Horacio González'
            color='#db9705'
            image={url + 'shortcut5.jpg'}
            url='/horacio-gonzalez/biografia'
          />
          <Box1
            title='Actividades'
            color='#dba092'
            image={url + 'shortcut6.jpg'}
            url='/actividades'
          />
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Amigxs'
              color='#9e1510'
              image={url + 'shortcut7.jpg'}
              url='/amigxs'
            />
            <Box2
              title='Catálogo Biblioteca'
              color='#7d1206'
              image={url + 'shortcut8.jpg'}
              url='/archivos/catalogo-videoteca'
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
              image={url + 'shortcut1.jpg'}
              url='/quienes-somos'
            />
            <Box2
              title='Archivos'
              color='#007499'
              image={url + 'shortcut2.jpg'}
              url='/archivos/sobre-archivos'
            />
          </div>
          <Box1
            title='Montajes'
            color='#0089bb'
            image={url + 'shortcut3.jpg'}
            url='/montajes'
          />
          <Box1
            title='¿Qué dice el gato?'
            color='#5bc5f2'
            image={url + 'shortcut4.jpg'}
            url='/que-dice-el-gato'
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Horacio González'
              color='#006885'
              image={url + 'shortcut5.jpg'}
              url='/horacio-gonzalez/biografia'
            />
            <Box2
              title='Actividades'
              color='#00566f'
              image={url + 'shortcut6.jpg'}
              url='/actividades'
            />
          </div>
          <Box1
            title='Amigxs '
            color='#2581c4'
            image={url + 'shortcut7.jpg'}
            url='/amigxs'
          />
          <Box1
            title='Catálogo Biblioteca'
            color='#a1daf8'
            image={url + 'shortcut8.jpg'}
            url='/archivos/catalogo-videoteca'
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
              image={url + 'shortcut1.jpg'}
              url='/quienes-somos'
            />
            <Box2
              title='Archivos'
              color='#a78bc0'
              image={url + 'shortcut2.jpg'}
              url='/archivos/sobre-archivos'
            />
          </div>
          <Box1
            title='Montajes'
            color='#8d6a9f'
            image={url + 'shortcut3.jpg'}
            url='/montajes'
          />
          <Box1
            title='¿Qué dice el gato?'
            color='#bb7cb3'
            image={url + 'shortcut4.jpg'}
            url='/que-dice-el-gato'
          />
        </div>
        <div className='flex flex-col gap-3 lg:gap-6'>
          <Box1
            title='Horacio González'
            color='#bb7cb3'
            image={url + 'shortcut5.jpg'}
            url='/horacio-gonzalez/biografia'
          />
          <div className='grid grid-cols-2 gap-3 lg:gap-6'>
            <Box2
              title='Actividades'
              color='#956095'
              image={url + 'shortcut6.jpg'}
              url='/actividades'
            />
            <Box2
              title='Amigxs'
              color='#792477'
              image={url + 'shortcut7.jpg'}
              url='/amigxs'
            />
          </div>
          <Box1
            title='Catálogo Biblioteca'
            color='#d9a2ca'
            image={url + 'shortcut8.jpg'}
            url='/archivos/catalogo-videoteca'
          />
        </div>
      </article>
    </section>
  )
}

export default Boxes
