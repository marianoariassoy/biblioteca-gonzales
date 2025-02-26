import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import HTML from '../../hooks/useHTML'
import ReactPlayer from 'react-player'
import { Dibujo } from '../../components/icons'

interface Props {
  id: string
  title: string
  text: string
  image: string
  url: string
  video: string
  file: string
}

const Index = () => {
  const { data, loading } = useFetch(`/archivos`)
  const { color } = useDataContext()
  const [location] = useLocation()
  let dataFilteder = {} as Props[]

  if (data) {
    if (location === '/archivos/catalogo-biblioteca') {
      dataFilteder = data.filter(item => item.id === 9)
    } else if (location === '/archivos/catalogo-videoteca') {
      dataFilteder = data.filter(item => item.id === 10)
    }
  }

  return (
    <Layout>
      <section className='section-main fade-in'>
        <div className='w-full max-w-4xl m-auto px-6 flex flex-col gap-y-8'>
          {loading ? (
            <Loader />
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4'>
              <div style={{ color: color }}>
                <Dibujo />
              </div>
              <div className='flex flex-col gap-y-4'>
                <h1
                  className='text-xl lg:text-2xl'
                  style={{ color: color }}
                >
                  {dataFilteder[0].title}
                </h1>
                <div className='text-base roboto-regular'>
                  <HTML text={dataFilteder[0].text} />
                </div>

                {dataFilteder[0].video && (
                  <div className='aspect-video'>
                    <ReactPlayer
                      url={dataFilteder[0].video}
                      controls
                      width='100%'
                      height='100%'
                    />
                  </div>
                )}
                <div className='flex gap-3'>
                  {dataFilteder[0].file && (
                    <a
                      href={dataFilteder[0].file}
                      target='_blank'
                      className='bg-primary text-white px-6 py-2 hover:bg-black'
                    >
                      Descarga PDF
                    </a>
                  )}
                  {dataFilteder[0].url && (
                    <a
                      href={dataFilteder[0].url}
                      target='_blank'
                      className='bg-primary text-white px-6 py-2 hover:bg-black'
                    >
                      Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
