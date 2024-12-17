import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { useEffect } from 'react'

const Index = () => {
  const { color } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-4xl m-auto px-6 flex flex-col gap-y-12'>
          <div className='font-secondary lg:text-xl font-bold'>
            El objeto de la Fundación es investigar, estudiar, crear, estimular, restaurar y difundir iniciativas
            vinculadas al patrimonio cultural argentino tales como libros, revistas y diarios de época así como material
            audiovisual, destinadas al Arte, la Investigación y la Cultura, en sus distintas manifestaciones, como el
            cine, el teatro, la música, la literatura y el pensamiento en su confluencia con el mundo digital, las
            nuevas narrativas y lenguajes, y el espacio cibernético.
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-center'>
            <div>
              <img
                src='/images/img-fundacion.svg'
                alt='Imagen Fundación'
                className='w-full'
              />
            </div>
            <div className='flex flex-col gap-y-3 text-base roboto-regular'>
              <h2
                className='font-secondary lg:text-xl font-bold'
                style={{ color: color }}
              >
                Quiénes somos
              </h2>
              <ul className='flex flex-col'>
                <li>Marcos Cappelacci</li>
                <li>Tomás Colombres</li>
                <li>Luciana Córdoba Torti</li>
                <li>Florencia Eva González</li>
                <li>Lidia González</li>
                <li>Diego Hillal</li>
                <li>Pablo Vialatte </li>
              </ul>
              <h2
                className='font-secondary lg:text-xl font-bold'
                style={{ color: color }}
              >
                Colaboran
              </h2>
              <ul className='flex flex-col'>
                <li>Bibiana Aflalo</li>
                <li>Beatriz Mengoni</li>
                <li>Jorge Quiroga</li>
                <li>Pedro Vialatte</li>
                <li>Ariana Santa</li>
              </ul>
            </div>
          </div>
          {/* <div className='grid grid-cols-2 gap-x-20 items-center'>
            <div className='lg:pl-20'>
              <a
                href='#'
                className='bg-primary text-white py-1 pl-2 pr-12 hover:bg-black transition-colors'
              >
                Donaciones
              </a>
            </div>
            <div>
              <a
                href='#'
                className='bg-primary text-white py-1 pl-2 pr-12 hover:bg-black transition-colors'
              >
                Hacete amigx
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  )
}

export default Index
