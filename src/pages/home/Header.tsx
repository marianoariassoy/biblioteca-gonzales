import Forma from '../../assets/forma.svg'
import Slider from './Slider'

const Header = () => {
  return (
    <section className='flex flex-col gap-3 items-start justify-start lg:gap-0 lg:flex-row'>
      <div className=' w-full lg:w-3/4 lg:pr-2'>
        <div className='bg-gray-200 overflow-hidden rounded-2xl h-[50vh]'>
          <Slider />
        </div>
      </div>
      <div className='lg:w-1/4 lg:h-[50vh] lg:pl-4'>
        <article
          className='rounded-2xl h-full w-full text-white relative overflow-hidden grid lg:grid-rows-2'
          style={{ backgroundColor: '#008d36' }}
        >
          <div className='bg-white/25 p-3 flex items-center justify-center'>
            <img
              src={Forma}
              alt='Ilustración'
              className='h-36 lg:h-full'
            />
          </div>
          <div className='text-white flex flex-col gap-y-3 p-6'>
            <h2
              className='text-xl'
              style={{ color: '#9bba62' }}
            >
              Talleres
            </h2>
            <p className='font-extrabold '>Espacio de formación académica, artística y no formal</p>
            <p>Ciclos de Lectura</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Header
