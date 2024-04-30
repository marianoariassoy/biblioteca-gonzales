import Box1 from './Box1'
import Box2 from './Box2'

const Boxes = () => {
  return (
    <section className='grid lg:grid-cols-2 gap-3 lg:gap-6'>
      <div className='flex flex-col gap-3 lg:gap-6'>
        <Box1
          title='Biblioteca'
          color='#2fac66'
          image='https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600'
          url='/quienes-somos/historia'
        />
        <Box1
          title='Montajes'
          color='#aaaa00'
          image='https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600'
          url='/leer/montajes'
        />
        <div className='grid grid-cols-2 gap-3 lg:gap-6'>
          <Box2
            title='Quienes somos'
            color='#687c32'
            image='https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600'
            url='/quienes-somos/historia'
          />
          <Box2
            title='Leer / Sobre archivos'
            color='#358b74'
            image='https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600'
            url='/leer/sobre-archivos'
          />
        </div>
      </div>
      <div className='flex flex-col gap-3 lg:gap-6'>
        <div className='grid grid-cols-2 gap-3 lg:gap-6'>
          <Box2
            title='Leer / Montajes'
            color='#008d36'
            image='https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600'
            url='/leer/montajes'
          />
          <Box2
            title='Mapas'
            color='#006633'
            image='https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600'
            url='/mirar/mapas'
          />
        </div>
        <Box1
          title='Catálogo Horacio González '
          color='#00a19a'
          image='https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600'
          url='/catalogos'
        />
        <Box1
          title='Bitácora'
          color='#248e90'
          image='https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=600'
          url='/'
        />
      </div>
    </section>
  )
}

export default Boxes
