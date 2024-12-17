import Layout from '../../layout/Layout'
import { useLocation } from 'wouter'
import { useDataContext } from '../../context/useDataContext'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import HTML from '../../hooks/useHTML'

interface Props {
  id: string
  title: string
  text: string
  image: string
  url: string
}

const Index = () => {
  const { color } = useDataContext()
  const { data, loading } = useFetch(`/quienes-somos`)
  let dataFilteder = {} as Props
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (data) {
    if (location === '/quienes-somos/historia') {
      dataFilteder = data[0]
    } else {
      dataFilteder = data[1]
    }
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-4xl m-auto px-6 flex flex-col gap-y-12'>
          <div className='font-secondary lg:text-xl font-bold'>
            {loading ? <Loader /> : <HTML text={dataFilteder.text} />}
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-center'>
            <div style={{ color: color }}>
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
        </div>
      </section>
    </Layout>
  )
}

export default Index
