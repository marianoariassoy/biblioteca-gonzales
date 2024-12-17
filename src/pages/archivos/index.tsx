import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import HTML from '../../hooks/useHTML'
import ReactPlayer from 'react-player'

interface Props {
  id: string
  title: string
  text: string
  image: string
  url: string
}

const Index = () => {
  const { data, loading } = useFetch(`/archivos`)
  const { color } = useDataContext()
  const [location] = useLocation()
  let dataFilteder = {} as Props[]

  if (data) {
    if (location === '/archivos/catalogo-biblioteca') {
      dataFilteder = data.filter(item => item.category === 0)
    } else if (location === '/archivos/catalogo-videoteca') {
      dataFilteder = data.filter(item => item.category === 1)
    } else if (location === '/archivos/catalogo-hg') {
      dataFilteder = data.filter(item => item.category === 2)
    }
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-6xl m-auto px-6 flex flex-col gap-y-8'>
          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 items-center'>
              <div style={{ color: color }}>
                <img
                  src='/images/img-fundacion.svg'
                  alt='Imagen Fundación'
                  className='w-full'
                />
              </div>
              <div className='flex flex-col gap-y-3 text-base roboto-regular'>
                <HTML text={dataFilteder[0].text} />
              </div>
              {data.video && (
                <div>
                  <ReactPlayer
                    url={data.video}
                    controls
                    width='100%'
                    height='100%'
                  />
                </div>
              )}
              <div className='flex gap-3 mt-6'>
                {data.url && (
                  <a
                    href={data.url}
                    target='_blank'
                    className='bg-primary text-white px-6 py-2 hover:bg-black'
                  >
                    Link
                  </a>
                )}
                {data.file && (
                  <a
                    href={`./images/${data.file}`}
                    target='_blank'
                    className='bg-primary text-white px-6 py-2 hover:bg-black'
                  >
                    Descarga PDF
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
